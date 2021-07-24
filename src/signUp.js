import React, {useRef,useState} from 'react';
import { Form,Button,Card,Container,Alert } from 'react-bootstrap';
import {useAuth} from './contexts/AuthContext';
import {Link,useHistory} from 'react-router-dom';

export default function SignUp() {
  const emailRef=useRef();
  const passwordRef=useRef();
  const passwordConfirmRef=useRef();
  const {signup} = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if(passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match');
    }

    try {
      setError('');
      setLoading(true);
      await signup(emailRef.current.value,passwordRef.current.value);
      document.getElementById('logoutToggle').style.display='block';
      document.getElementById('galleryToggle').style.display='block';
      document.getElementById('profileToggle').style.display='block';
      document.getElementById('signInToggle').style.display='none';
      history.push('/');
    } catch {
      setError('Failed to create an account')
    }
    setLoading(false);
  }

  return(
    <div style={{paddingTop:'100px'}}>
      <Container className='d-flex align-items-center justify-content-center' style={{minHeight:'100%'}}>
      <div className='w-100' style={{maxWidth:'400px'}}>
      <Card>
        <Card.Body>
          <h2 className='text-center mb-4'>Sign Up</h2>
          {error && <Alert variant='danger'>{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id='email'>
              <Form.Label>Email</Form.Label>
              <Form.Control type='email' ref={emailRef} required />
            </Form.Group>
            <Form.Group id='password'>
              <Form.Label>Password</Form.Label>
              <Form.Control type='password' ref={passwordRef} required />
            </Form.Group>
            <Form.Group id='password-confirm'>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type='password' ref={passwordConfirmRef} required />
            </Form.Group>
            <Button disabled={loading} className='w-100 mt-2' type='submit'>Sign Up</Button>
          </Form>
        </Card.Body>
      </Card>
      <div className='w-100 text-center mt-2'>
        Already have an account? <Link to='/signIn'>Sign In</Link>
      </div>
      </div>
      </Container>
    </div>
  );
}