import { useDispatch } from 'react-redux';
import { removeProduct } from 'redux/diary/diaryOperations';
import { ProductTitle, ProductProp, ExitBtn, Unit } from './DiaryItem.styled';
import sprite from 'images/icons.svg';
import { useAdaptivString } from 'hooks/useAdaptivString';

export const DiaryItem = ({ product }) => {
  const dispatch = useDispatch();
  const title = useAdaptivString(product.product);
  const handleDelete = () => {
    dispatch(removeProduct(product._id));
  };

  return (
    <>
      <ProductTitle>{title}</ProductTitle>
      <ProductProp>
        {product?.weight}
        <span> g</span>
      </ProductProp>
      <ProductProp>
        {Math.round(product?.calories)}
        <Unit> kcal</Unit>
      </ProductProp>

      <ExitBtn type="button" onClick={handleDelete}>
        <svg width="12px" height="12px">
          <use href={sprite + '#icon-cross_delete_12x12'} />
        </svg>
      </ExitBtn>
    </>
  );
};
