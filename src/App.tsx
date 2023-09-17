import './style/main.scss';
import { Header, Menu } from "./containers/layout"; 
import { LocationView, LoginView } from "./views"; 
import { useSelector, useDispatch } from "react-redux";
import { RootState, CoreActions } from "./store";
import { useEffect } from 'react';
function App() {
  
  const dispatch = useDispatch();
  const initialized = useSelector((state: RootState) => state.core.initialized);
  
  const authenticated = useSelector(
    (state: RootState) => state.auth.authenticated,
  );

  useEffect(() => {
    !initialized && dispatch(CoreActions.initialize());
  });

 return (
  <>
  {!authenticated && 
    <LoginView/> }
  
  {authenticated && 
    <>
    <Header/>
    <Menu/>

    <div className="content"><LocationView/></div></>}
  </>
)
}
export default App;
