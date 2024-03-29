import { FormikValues } from 'formik';
import * as Yup from 'yup';

export const habitatSchema = Yup.object().shape({
  id: Yup.number().label('id').meta({ autocreate: true }),
  name: Yup.string()
    .required('You need to enter a name for your habitat.')
    .label('Name')
    .meta({ autocomplete: 'email', type: 'text' }),
});

export interface HabitatValues extends Yup.InferType<typeof habitatSchema>, FormikValues {}
