import * as Yup from 'yup';

export const loginFormSchema = Yup.object().shape({
  username: Yup.string()
    .required('You need to enter your username.')
    .min(6, 'Username must be at least 8 characters long.')
    .label('username')
    .meta({ autocomplete: 'email' }),
  password: Yup.string()
    .required('You need to enter your password.')
    .min(8, 'Password must be at least 8 characters long.'),
});

export type LoginFormEntry = Yup.InferType<typeof loginFormSchema>;
