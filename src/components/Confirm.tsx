import { ReactNode, useState } from 'react';
import { Modal } from '.';
import { Dialog } from './Dialog';

interface Props {
  onClick: () => void;
  className: string;
  message?: string;
  children: ReactNode;
}
export const Confirm: React.FC<Props> = ({ children, className, message, onClick }) => {
  const [called, setCalled] = useState(false);

  return (
    <>
      <Dialog
        show={called}
        onOk={() => {
          onClick();
          setCalled(false);
        }}
        onCancel={() => setCalled(false)}
      >
        {message ? message : 'are you sure?'}
      </Dialog>
      <div onClick={() => setCalled(true)} className={className}>
        {children}
      </div>
    </>
  );
};
