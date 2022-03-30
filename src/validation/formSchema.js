import * as yup from 'yup';

const formSchema = yup.object().shape({
    username: yup
    .string()
    .trim()
    .required("Username Required")
    .min(3, 'name must be 3 chars long'),
    email: yup
    .string()
    .email('Must be valid Email')
    .required('Email is Required'),
    password: yup
    .string()
    .required('password Required')
    .min(6, 'Password must be 6 chars long'),
    tos: yup
        .boolean()
        .oneOf([true], "Must Accept TOS")
})

export default formSchema;