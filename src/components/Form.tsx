import * as Yup from 'yup';
import { FormikHelpers, useFormik } from "formik";
import { Alert, Form as BootstrapForm, Button, Spinner} from "react-bootstrap"; 


interface Props { 
  schema: Yup.AnyObject,
  cancel?: boolean, 
  submitText?: string, 
  onSubmit: (values:any, formik: FormikHelpers<any>) => void; 
}

/**
 * Provides a form based upon a passed definition. 
 */
export const Form: React.FC<Props> = ({schema, onSubmit, submitText, cancel}) => {

  const initialValues = schema.describe().default; 

  Object.keys(initialValues).map(key => !initialValues[key] && (initialValues[key] = '')); 
  const { status, errors, touched, isSubmitting, isValid, handleSubmit, handleChange, handleBlur, values} = useFormik({initialValues, onSubmit, validationSchema: schema}); 
  const meta = Object.entries(schema.describe().fields).reduce<Record<string, Yup.CustomSchemaMetadata | undefined>>( (x, [s, v]) => { x[s] = (v as Yup.SchemaDescription).meta; return x}, {}); 

  return (
    <BootstrapForm onSubmit={handleSubmit}>

      {status && <Alert variant="danger">{status}</Alert>}
      {Object.keys(meta).map((field) => (
        <BootstrapForm.Group key={field + 'Group'} className='mb-2'>
          <BootstrapForm.Label>{field}</BootstrapForm.Label>
          <BootstrapForm.Control
            name={field}
            className={
              touched[field] ? (errors[field] ? 'is-invalid' : 'is-valid') : ''
            }
            type={meta[field] ? meta[field]?.type : "text"}
            autoComplete={meta[field] ? meta[field]?.autocomplete : ""}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values[field]}
          />
          <div className='invalid-feedback'>
            {errors[field]?.toString()}
          </div>
        </BootstrapForm.Group>
      ))}
      <hr/>
      <BootstrapForm.Group className='d-flex justify-content-end'>
        <Button disabled={!isValid || isSubmitting} type='submit'>
          {submitText ? submitText : "submit"}
          {isSubmitting && (
            <Spinner
              as='span'
              animation='border'
              size='sm'
              role='status'
              aria-hidden='true'
              className='ms-2'
            />
          )}
        </Button>
      </BootstrapForm.Group>
    </BootstrapForm>
  );   
}

