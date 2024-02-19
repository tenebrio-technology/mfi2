import { Card as BootstrapCard } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { ReactNode } from 'react';

interface Props {
  title: string;
  children: ReactNode;
}

export const Card: React.FC<Props> = ({ title, children }) => (
  <BootstrapCard className='closable'>
    <BootstrapCard.Body>
      <BootstrapCard.Title>
        {title}
        <FontAwesomeIcon className='float-end close' icon={faClose} />
      </BootstrapCard.Title>
      {children}
    </BootstrapCard.Body>
  </BootstrapCard>
);
