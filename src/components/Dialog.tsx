import { ReactNode } from 'react';
import { Modal, ModalButton } from '.';

export interface DialogProps {
  title?: string;
  onOk?: () => void;
  onCancel?: () => void;
  show: boolean;
  children: ReactNode;
}

export const Dialog: React.FC<DialogProps> = ({ show, children, title, onOk, onCancel }) => {
  const buttons: ModalButton[] = [];
  if (onOk) buttons.push({ label: 'Ok', action: onOk });
  if (onCancel) buttons.push({ label: 'Cancel', action: onCancel, variant: 'warning' });

  return (
    <Modal show={show} title={title} buttons={buttons}>
      {children}
    </Modal>
  );
};
