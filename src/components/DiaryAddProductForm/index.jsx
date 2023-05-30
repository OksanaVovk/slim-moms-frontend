import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import 'react-toastify/dist/ReactToastify.css';
import { createNotifySuccess } from 'helpers/createNotify';
import { LoaderDots } from 'components/Loader/LoaderDots';
import { Button } from '../Button';
import { Box } from 'components/Box';
import { ContainerForm, WeightInputStyled } from './DiaryAddProductForm.styled';
import { selectStyles } from './selectStyles';
import { useWindowResize } from 'hooks/useWindowResize';
import { addProduct } from 'redux/diary/diaryOperations';
import { diarySelectors } from 'redux/diary/diarySelectors';
import { getProductByQuery } from 'redux/products/products-operations';
import { useDebounce } from 'hooks/useDebounce';
import { productSelectors } from 'redux/products/productSelectors';

export const DiaryAddProductForm = () => {
  const [product, setProduct] = useState('');
  const [weight, setWeight] = useState('');
  const [errorProduct, setErrorProduct] = useState(false);
  const [errorWeight, setErrorWeight] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [options, setOptions] = useState([]);
  const { width } = useWindowResize();
  const dispatch = useDispatch();
  const date = useSelector(diarySelectors.selectDate);
  const debouncedProduct = useDebounce(product, 500);
  const data = useSelector(productSelectors.selectProductsByQuery);
  const isLoading = useSelector(
    productSelectors.selectIsLoadingProductsByQuery
  );

  const handleChange = inputValue => {
    setSelectedOption(inputValue);
  };

  useEffect(() => {
    if (debouncedProduct) {
      dispatch(getProductByQuery(debouncedProduct.toLowerCase()));
    }
  }, [debouncedProduct, dispatch]);

  useEffect(() => {
    if (!data) return;
    const result = data.map(product => ({
      value: product.id,
      label: product?.title,
    }));
    setOptions(result);
  }, [data]);

  useEffect(() => {
    if (weight !== '' || selectedOption !== '') {
      setErrorWeight(false);
      setErrorProduct(false);
    }
  }, [selectedOption, weight]);

  const addNewProduct = e => {
    e.preventDefault();

    if (selectedOption === '' && weight === '') {
      setErrorProduct(true);
      setErrorWeight(true);
      return;
    }
    if (weight === '') {
      setErrorWeight(true);
      return;
    }
    if (selectedOption === '') {
      setErrorProduct(true);
      return;
    }
    const newProduct = {
      date,
      product: selectedOption.label,
      weight: Number(weight),
      baseCaloricity: data.filter(it => it.title === selectedOption.label)[0]
        .calories,
    };

    dispatch(addProduct(newProduct));
    createNotifySuccess('Product added successfully');
    setProduct('');
    setWeight('');
    setSelectedOption('');
    setOptions([]);
  };

  const handleWeight = ({ target }) => {
    const { value } = target;
    setErrorWeight(false);
    setWeight(value);
  };

  return (
    <div>
      <ContainerForm onSubmit={addNewProduct}>
        <Box>
          <Select
            required
            value={selectedOption}
            onChange={handleChange}
            options={options}
            noOptionsMessage={() => 'Product not found'}
            inputValue={product}
            onInputChange={setProduct}
            styles={selectStyles}
            placeholder="Enter product name"
          />
          {errorProduct ? (
            <p style={{ color: 'red' }}>Field "Product" is required</p>
          ) : null}
        </Box>
        {isLoading ? <LoaderDots /> : null}

        <Box>
          <WeightInputStyled
            name="weight"
            value={weight}
            autoComplete="off"
            onChange={handleWeight}
            type="input"
            placeholder="Gramms"
          />
          {errorWeight ? (
            <p style={{ color: 'red' }}>Field "Gramms" is required</p>
          ) : null}
        </Box>
        {width > 767 ? (
          <Button
            type="submit"
            text="+"
            radius="50%"
            w="48px"
            h="48px"
            font="20px"
          />
        ) : (
          <Button type="submit" text="Add" w="176px" h="44px" />
        )}
      </ContainerForm>
    </div>
  );
};
