import * as Yup from 'yup';

const calculatorSchema = Yup.object().shape({
  height: Yup.number()
    .min(100, 'Very little...')
    .typeError('Height must be a number!')
    .positive()
    .integer('Put your height in a number')
    .max(250, 'A lot...')
    .required('Fill all the fields!'),
  age: Yup.number()
    .min(18, 'Very little...')
    .typeError('Age must be a number!')
    .positive()
    .integer()
    .max(100, 'A lot...')
    .required('Fill all the fields!'),
  curWeight: Yup.number()
    .min(20, 'Very little...')
    .typeError('Weight must be a number!')
    .positive()
    .integer()
    .max(500, 'A lot...')
    .required('Fill all the fields!'),
  desWeight: Yup.number()
    .min(20, 'Very little...')
    .typeError('Desired weight must be a number!')
    .positive()
    .integer()
    .max(500, 'A lot...')
    .required('Fill all the fields!'),
  bloodType: Yup.string().required('Choose your blood type!')
});

export default calculatorSchema;