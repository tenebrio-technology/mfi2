import { Button as BootstrapButton, Spinner } from 'react-bootstrap';

interface Props {
  disabled?: boolean;
  isSubmitting?: boolean;
  text?: string;
  variant?: string; 
  type?: 'button' | 'submit' | 'reset';
  onClick?: React.MouseEventHandler; 
  onMouseDown?: React.MouseEventHandler; 
}
export const Button: React.FC<Props> = ({ type, text, disabled, isSubmitting, onClick, variant, onMouseDown }) => (
  <BootstrapButton type={type || "button"} disabled={isSubmitting || disabled} onMouseDown={onMouseDown} onClick={onClick} variant={variant}>
    {text || 'Submit'}
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
  </BootstrapButton>
);
