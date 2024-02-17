import { FormikValues } from 'formik';
import * as Yup from 'yup';

export const habitatSchema = Yup.object().shape({
  name: Yup.string()
    .required('You need to enter a name for your habitat.')
    .meta({autocomplete: 'email', type: 'text'})
});

export interface HabitatValues extends Yup.InferType<typeof habitatSchema>, FormikValues {};