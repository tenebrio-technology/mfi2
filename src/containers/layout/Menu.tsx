import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapLocationDot, faLayerGroup } from '@fortawesome/free-solid-svg-icons';

export const Menu = () => (
  <Navbar expand='sm' className='navbar-vertical d-none d-sm-block'>
    <Navbar.Collapse>
      <Nav className='pt-3 px-3'>
        <Nav.Link>
          <FontAwesomeIcon className='pe-2' icon={faMapLocationDot} />
          Locations
        </Nav.Link>
        <Nav.Link>
          <FontAwesomeIcon className='pe-2' icon={faLayerGroup} />
          Habitats
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
