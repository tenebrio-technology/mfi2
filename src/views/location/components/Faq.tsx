import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

export const Faq = () => (
  <Card className='location-faq closable mt-1'>
    <Card.Body>
      <Card.Title>
        Locations faq
        <FontAwesomeIcon className='float-end close' icon={faClose} />
      </Card.Title>
      <ul>
        <li>Use locations to keep track of resources.</li>
        <li>
          Locations can contain other locations, allowing you specify down to a granularity which
          suits your needs.
        </li>
        <li>
          A location can have sensors attached, providing real-time environmental data which is
          automatically attached to all items contained within the location
        </li>
      </ul>
    </Card.Body>
  </Card>
);
