import { Navbar, Dropdown, Button, ButtonGroup } from 'react-bootstrap';
import { Logo } from '../../assets/Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { IUser } from '../../model';
import { UIActions, CoreActions, AuthActions, useAppSelector, useAppDispatch } from '../../store';
import { useNavigate } from 'react-router-dom';

interface Props { 
  user: IUser; 
  onToggleSidebar: () => void; 
  onLogout: () => void; 
}

export const Header: React.FC<Props> = ({onToggleSidebar, onLogout, user}) => {

  const dispatch = useAppDispatch();
  const navigate = useNavigate(); 

  function logOut() { 
    dispatch(AuthActions.logout()); 
    navigate("/"); 
  }

  return (
    <Navbar id='Header' fixed='top' expand='sm' className='justify-content-between'>

      <Navbar.Brand className='d-flex align-items-center p0'>
        <FontAwesomeIcon className='ps-3 d-block d-sm-none' icon={faBars} onClick={onToggleSidebar} />
        <Logo className='ps-3' />
        <div className='ps-3 d-none d-sm-block'>micro farming intelligence</div>
      </Navbar.Brand>

      <Dropdown as={ButtonGroup} className='ms-auto' drop='down-centered'>
        <Button>
          <FontAwesomeIcon icon={faUser} className='pe-1' /> {user?.username}
        </Button>
        <Dropdown.Toggle />
        <Dropdown.Menu>
          <Dropdown.Item onClick={logOut}>
            <FontAwesomeIcon className='pe-2' icon={faSignOut} />
            Logout
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Navbar>
  );
};
