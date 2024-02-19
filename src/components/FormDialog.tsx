import * as Yup from 'yup';
import { Dialog, DialogProps } from "."; 
import { FormikHelpers } from 'formik';

interface Props { 
  title?: string; 
  show: boolean; 
  schema: Yup.AnyObject; 
  onSubmit: (values: any, formik: FormikHelpers<any>) => void;
  onCancel: () => void; 
}

export const FormDialog: React.FC<Props> = ({show, title}) => 
  <Dialog title={title} show={show} >here</Dialog>