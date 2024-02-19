import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapLocationDot, faLayerGroup, faTowerBroadcast } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

interface Props {
  show: boolean;
}
export const Menu: React.FC<Props> = ({ show }) => (
  <Navbar
    id='left-menu'
    expand='sm'
    className={`navbar-vertical ${show ? '' : 'd-none'} d-sm-block`}
  >
    <Nav className='pt-3 px-3'>
      <Nav.Link as={Link} to='/locations'>
        <FontAwesomeIcon className='pe-2' icon={faMapLocationDot} />
        Locations
      </Nav.Link>
      <Nav.Link as={Link} to='/habitats'>
        <FontAwesomeIcon className='pe-2' icon={faLayerGroup} />
        Habitats
      </Nav.Link>
      <Nav.Link as={Link} to='/monitors'>
        <FontAwesomeIcon className='pe-2' icon={faTowerBroadcast} />
        Monitors
      </Nav.Link>
    </Nav>
  </Navbar>
);
