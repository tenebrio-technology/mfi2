
import { Navbar, Dropdown, NavItem, NavLink, Button, ButtonGroup } from "react-bootstrap"; 
import { Logo } from "../../assets/Logo"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser, faSignOut, faBell } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from "react-redux";
import { UIActions, RootState, AuthActions } from "../../store";
export const Header = () => {

  const dispatch = useDispatch();
  
  return (
    <Navbar id='Header' fixed="top" expand="sm" className="d-flex"> 

  <Navbar.Brand className="d-flex align-items-center p0">
    <FontAwesomeIcon className="ps-3 d-block d-sm-none" icon={faBars}/>
    <Logo className="ps-3"/>
      <div className="ps-3 d-none d-sm-block">
      micro farming intelligence
      </div>
  </Navbar.Brand>


  <Dropdown as={ButtonGroup} className="pe-5 ms-auto" drop="down-centered">
      <Button><FontAwesomeIcon icon={faUser} className="pe-1" /> username</Button>
      <Dropdown.Toggle />
      <Dropdown.Menu>
        <Dropdown.Item 
        onClick={() => dispatch(AuthActions.logout())}>
          <FontAwesomeIcon className="pe-2" icon={faSignOut} />Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
</Navbar>)
}
