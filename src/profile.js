import React, {useRef,useState} from 'react';
import { Form,Button,Card,Container,Alert } from 'react-bootstrap';
import {useAuth} from './contexts/AuthContext';
import {Link} from 'react-router-dom';

export default function Profile() {
  const emailRef=useRef();
  const passwordRef=useRef();
  const passwordConfirmRef=useRef();
  const {currentUser, updateEmail, updatePassword} = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if(passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match');
    }

    const promises = [];
    setLoading(true);
    setError('');
    
    if (emailRef.current.value !== currentUser.email){
      promises.push(updateEmail(emailRef.current.value));
    }
    if (passwordRef.current.value !== currentUser.password){
      promises.push(updatePassword(passwordRef.current.value));
    }

    Promise.all(promises).then();

    try {
      setError('');
      setLoading(true);
      //await login(emailRef.current.value,passwordRef.current.value);
      history.push('/');
    } catch {
      setError('Failed to sign in')
    }
    setLoading(false);
  }

  return(
    <div style={{paddingTop:'100px'}}>
      <Container className='d-flex align-items-center justify-content-center' style={{minHeight:'100%'}}>
      <div className='w-100' style={{maxWidth:'400px'}}>
      <Card>
        <Card.Body>
          <h2 className='text-center mb-4'>Profile</h2>
          {error && <Alert variant='danger'>{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id='email'>
              <Form.Label>Email</Form.Label>
              <Form.Control type='email' ref={emailRef} required defaultValue={currentUser.email}/>
            </Form.Group>
            <Form.Group id='password'>
              <Form.Label>Change Password</Form.Label>
              <Form.Control type='password' ref={passwordRef} />
            </Form.Group>
            <Form.Group id='password'>
              <Form.Label>Change Password Confirm</Form.Label>
              <Form.Control type='password' ref={passwordConfirmRef} />
            </Form.Group>
            <Button disabled={loading} className='w-100 mt-2' type='submit'>Update Profile</Button>
          </Form>
        </Card.Body>
      </Card>
      </div>
      </Container>
    </div>
  );
}