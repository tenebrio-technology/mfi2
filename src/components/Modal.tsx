import { ReactNode } from 'react';
import { Modal as BootstrapModal, Button } from 'react-bootstrap';

export interface ModalButton {
  label: string;
  variant?: string;
  action: () => void;
}
interface Props {
  show: boolean;
  title?: string;
  children: ReactNode;
  buttons: ModalButton[];
}
export const Modal: React.FC<Props> = ({ show = true, title, children, buttons }) => (
  <BootstrapModal show={show}>
    {title && <BootstrapModal.Header>{title}</BootstrapModal.Header>}
    <BootstrapModal.Body>{children}</BootstrapModal.Body>

    {buttons && (
      <BootstrapModal.Footer>
        {buttons.map((button, idx) => (
          <Button key={'button-' + idx} variant={button.variant} onClick={button.action}>
            {button.label}
          </Button>
        ))}
      </BootstrapModal.Footer>
    )}
  </BootstrapModal>
);
