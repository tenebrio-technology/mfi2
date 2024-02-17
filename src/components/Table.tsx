import * as Yup from 'yup';
import { FormikHelpers, useFormik } from "formik";
import { Alert, Form as BootstrapForm, Button, Spinner} from "react-bootstrap"; 

interface Props { 
  schema: Yup.AnyObject,
  data: any
}

/**
 * Provides a table based upon the passed schema
 */
export const Table: React.FC<Props> = ({schema, data}) => {

  return (

    <div>{JSON.stringify(data)}</div>

  );   
}

