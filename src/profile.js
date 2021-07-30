import React, {useRef,useState} from 'react';
import { Form,Button,Card,Container,Alert } from 'react-bootstrap';
import {useAuth} from './contexts/AuthContext';

export default function Profile() {
  const usernameRef=useRef();
  const emailRef=useRef();
  const passwordRef=useRef();
  const passwordConfirmRef=useRef();
  const {currentUser, updateEmail, updatePassword, updateUserData} = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if(passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match');
    }

    const promises = [];

    if (usernameRef.current.value !== currentUser.displayName){
      promises.push(updateUserData(usernameRef.current.value));
    }
    if (emailRef.current.value !== currentUser.email){
      promises.push(updateEmail(emailRef.current.value));
    }
    if (passwordRef.current.value !== currentUser.password && passwordRef.current.value.length > 6){
      promises.push(updatePassword(passwordRef.current.value));
    }

    try {
      setError('');
      setLoading(true);
      await Promise.all(promises);
      document.getElementById('usernameText').innerHTML=currentUser.displayName;
    } catch {
      setError('Failed to update')
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
            <Form.Group id='username'>
              <Form.Label>Username</Form.Label>
              <Form.Control type='text' ref={usernameRef} defaultValue={currentUser.displayName}/>
            </Form.Group>
            <Form.Group id='email'>
              <Form.Label>Email</Form.Label>
              <Form.Control type='email' ref={emailRef} defaultValue={currentUser.email}/>
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