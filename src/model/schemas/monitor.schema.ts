import { FormikValues } from 'formik';
import * as Yup from 'yup';

export const monitorSchema = Yup.object().shape({
  id: Yup.number().label('id').meta({ autocreate: true }),
  name: Yup.string()
    .required('You need to enter a name for the monitor.')
    .label('Name')
    .meta({ autocomplete: 'email', type: 'text' }),
});

export interface MonitorValues extends Yup.InferType<typeof monitorSchema>, FormikValues {}
