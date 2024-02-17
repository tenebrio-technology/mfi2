import { Container, Row, Col, Alert } from 'react-bootstrap';
import { AuthActions, useAppSelector, useAppDispatch } from '../../store';
import { loginFormSchema, LoginFormEntry } from '../../model/forms/login.schema';
import './loginview.scss';
import { Form } from '../../components';
import { Logo } from '../../assets/Logo';


export const LoginView: React.FC = () => {
  const dispatch = useAppDispatch();

  const authenticationFailed = useAppSelector(state => state.auth.authenticationFailed); 
  const lastError = useAppSelector(state => state.auth.lastError);

  async function submit({ username, password }: LoginFormEntry) {
    dispatch(AuthActions.login({ username, password }));
  }

  return (
    <>
      <Container className='fluid vh-100 position-absolute splash w-100'>
        <Logo />
      </Container>

      <Container className='fluid vh-100 '>
        <Row className='h-100 fluid w-100'>
          <Col xs={9} className='p-0 m-0' />
          <Col xs={3} className='sign-in-col h-100 align-items-center justify-content-center p-3'>
            <h3 className='w-100 p-0'>Sign in</h3>
            { authenticationFailed && <Alert variant="danger">{lastError}</Alert> }
          <Form
              onSubmit={submit}
              schema={loginFormSchema}              
          /> 
          </Col>
        </Row>
      </Container>
    </>
  );
};
