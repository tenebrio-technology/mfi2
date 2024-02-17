import './style/main.scss';
import { Header, Menu } from './views/components';
import { LoginView, LocationView, HabitatView, HomeView } from './views';
import { UIActions, CoreActions, AuthActions, useAppSelector, useAppDispatch } from './store';
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { services } from "./services"; 

function App() {

  const dispatch = useAppDispatch();
  const initialized = useAppSelector(state => state.core.initialized);
  const authenticated = useAppSelector(state => state.auth.authenticated);
  const user = useAppSelector(state => state.auth.user); 
  const showSidebar = useAppSelector(state => state.ui.showMenubar); 

  useEffect(() => {
    
    !initialized && dispatch(CoreActions.initialize());

    (async () => { 
      if(!authenticated) {
        const token = await services.auth.getToken();
        if(token) {
          dispatch(AuthActions.verifyToken(token)); 
        }
      }
    })(); 

  }, []);

  return (
    <>
      {!authenticated && <LoginView />}

      {authenticated && 
      <BrowserRouter>
        <Header onToggleSidebar={() => dispatch(UIActions.toggleMenubar())} 
                onLogout={() => dispatch(AuthActions.logout())} 
                user={user!} />
        <Menu show={showSidebar} />

          <div className='content'>
            <Routes>
              <Route path="/" element={<HomeView/>} />
              <Route path="/locations" element={<LocationView/>} />
              <Route path="/habitats" element={<HabitatView/>} />
              </Routes>
          </div>
      </BrowserRouter>
      }
    </>
  );
}
export default App;
