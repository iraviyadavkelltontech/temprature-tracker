import * as yup from 'yup';


export const schema = yup
  .object({
    firstName: yup
      .string()
      .min(5, 'Length should be 5')
      .required('First Name is required'),
      lastName: yup
      .string()
      .min(5, 'Length should be 5')
      .required('Last Name is required'),
      phoneNumber: yup
      .number()
      .min(10, 'Phone Number should be minimum 10 digits')
      .max(10, 'Phone Number should be minimum 10 digits')
      .required('Phone Number is required')
  })