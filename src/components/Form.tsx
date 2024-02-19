import * as Yup from 'yup';
import { FormikHelpers, useFormik } from 'formik';
import { Alert, Form as BootstrapForm, Spinner } from 'react-bootstrap';
import { getFields } from '../model';
import { Input, Button } from '.';
import { ReactNode } from 'react';

interface Props {
  schema: Yup.AnyObject;
  submitText?: string;
  onSubmit: (values: any, formik: FormikHelpers<any>) => void;
  onCancel?: () => void;
  InputWrapper?: React.ComponentType<{children: ReactNode}>; 
  ButtonWrapper?: React.ComponentType<{children: ReactNode}>; 
}

/**
 * Provides a form based upon a passed definition.
 */
export const Form: React.FC<Props> = ({ schema, onSubmit, submitText, onCancel, InputWrapper, ButtonWrapper }) => {
  const initialValues = schema.describe().default;
  Object.keys(initialValues).map((key) => !initialValues[key] && (initialValues[key] = ''));
  const formik = useFormik({ initialValues, onSubmit, validationSchema: schema });
  const {
    status,
    errors,
    touched,
    isSubmitting,
    isValid,
    handleSubmit,
    handleChange,
    handleBlur,
    values,
  } = formik;

  const fields = getFields(schema);

  const inputs = fields.filter((field) => !field.autocreate)
  .map((field) => (
    <Input
      key={'input-' + field.name}
      field={field}
      onChange={handleChange}
      onBlur={handleBlur}
      value={values[field.name]}
      touched={touched[field.name]}
      error={errors[field.name]}
    />
  ));

  const buttons = <BootstrapForm.Group>
                    { onCancel && <Button text="Cancel" onMouseDown={onCancel} variant="warning" /> }
                    <Button disabled={!isValid || isSubmitting} type='submit' text={submitText} isSubmitting={isSubmitting} />
                  </BootstrapForm.Group>


  return (
    <BootstrapForm onSubmit={handleSubmit}>
      {status && <Alert variant='danger'>{status}</Alert>}
      {InputWrapper 
        ? <InputWrapper>{inputs}</InputWrapper>
        : inputs
      }
      {ButtonWrapper
        ? <ButtonWrapper>{buttons}</ButtonWrapper>
        : buttons
      }
    </BootstrapForm>
  );
};
