import { Form as BootstrapForm } from 'react-bootstrap';
import { FieldDefinition } from '../model';
import { BsPrefixProps } from 'react-bootstrap/esm/helpers';
import { FormikConfig, FormikErrors, FormikHelpers, FormikTouched, useFormikContext } from 'formik';

interface Props extends BsPrefixProps {
  field: FieldDefinition;
  touched?: boolean | FormikTouched<any> | FormikTouched<any>[];
  error?: string | string[] | FormikErrors<any> | FormikErrors<any>[];
  onChange: React.ChangeEventHandler;
  onBlur: React.ChangeEventHandler;
  value: any;
}

export const Input: React.FC<Props> = ({ field, touched, error, onChange, onBlur, value }) => {
  return (
    <BootstrapForm.Group key={field.name + 'Group'} className='mb-2'>
      <BootstrapForm.Label>{field.label}</BootstrapForm.Label>
      <BootstrapForm.Control
        name={field.name}
        className={touched ? (error ? 'is-invalid' : 'is-valid') : ''}
        type={field.type}
        autoComplete={field.autocomplete}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
      <div className='invalid-feedback'>{error?.toString()}</div>
    </BootstrapForm.Group>
  );
};
