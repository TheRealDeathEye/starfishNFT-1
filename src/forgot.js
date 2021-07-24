import React, {useRef,useState} from 'react';
import { Form,Button,Card,Container,Alert } from 'react-bootstrap';
import {useAuth} from './contexts/AuthContext';

export default function Forgot() {
  const emailRef=useRef();
  const {resetPassword} = useAuth();
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage('');
      setError('');
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage('Password Reset Sent to Email');
    } catch {
      setError('Email does not exist');
    }
    setLoading(false);
  }

  return(
    <div style={{paddingTop:'100px'}}>
      <Container className='d-flex align-items-center justify-content-center' style={{minHeight:'100%'}}>
      <div className='w-100' style={{maxWidth:'400px'}}>
      <Card>
        <Card.Body>
          <h2 className='text-center mb-4'>Forgot Password</h2>
          {error && <Alert variant='danger'>{error}</Alert>}
          {message && <Alert variant='success'>{message}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id='email'>
              <Form.Label>Email</Form.Label>
              <Form.Control type='email' ref={emailRef} required />
            </Form.Group>
            <Button disabled={loading} className='w-100 mt-2' type='submit'>Reset Password</Button>
          </Form>
        </Card.Body>
      </Card>
      </div>
      </Container>
    </div>
  );
}