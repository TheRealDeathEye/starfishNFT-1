import React from 'react';
import { Card,Container,Form } from 'react-bootstrap';

export default function NftView() {
  return(
    <div style={{paddingTop:'100px'}}>
      <Container className='d-flex align-items-center justify-content-center' style={{minHeight:'100%'}}>
      <div className='w-100'>
      <Card>
        <Card.Body>
          <img src="imgs/white_logo.png" alt="" style={{height:'auto',width:'auto'}}/>
          <Form.Group id='nftTitle'>
            <Form.Label>NFT Title</Form.Label>
            <Form.Control type='text' ref={emailRef} required />
          </Form.Group>
          <Form.Group id='nftDescript'>
            <Form.Label>NFT Description</Form.Label>
            <Form.Control type='text' ref={passwordRef} required />
          </Form.Group>
          <Button disabled={loading} className='w-100 mt-2' type='submit'>Upload Nft</Button>
        </Card.Body>
      </Card>
      </div>
      </Container>
    </div>
  );
}