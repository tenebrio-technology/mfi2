import { Container, Row, Col } from 'react-bootstrap';
import { RootState, AuthActions } from '../../store';
import { loginFormSchema, LoginFormEntry } from '../../model/forms/login.schema';
import './loginview.scss';
import { Form, InputsCfg } from '../../controls/Form';
import { Logo } from '../../assets/Logo';
import { useSelector, useDispatch } from 'react-redux';

export const LoginView: React.FC = () => {
  const dispatch = useDispatch();

  const authenticating = useSelector((state: RootState) => state.auth.authenticating);
  const lastError = useSelector((state: RootState) => state.auth.lastError);

  const initialValues = {
    username: '',
    password: '',
  };

  const inputCfg: InputsCfg = {
    username: { type: 'text', autoComplete: 'email' },
    password: { type: 'password', autoComplete: 'password' },
  };

  function submit({ username, password }: LoginFormEntry) {
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
          <Col xs={3} className='sign-in-col h-100 align-items-center justify-content-center p-0'>
            <h3 className='w-100'>Sign in</h3>
            <Form
              className='sign-in-form w-100 p-3'
              initialValues={initialValues}
              inputCfg={inputCfg}
              onSubmit={submit}
              submitting={authenticating}
              error={lastError}
              validationSchema={loginFormSchema}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};
