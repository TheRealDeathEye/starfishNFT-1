import React from 'react';
import { Card,Container } from 'react-bootstrap';

export default function NftView() {
  return(
    <div style={{paddingTop:'100px'}}>
      <Container className='d-flex align-items-center justify-content-center' style={{minHeight:'100%'}}>
      <div className='w-100'>
      <Card>
        <Card.Body>
          <img src="imgs/white_logo.png" alt="" style={{height:'auto',width:'auto'}}/>
          <h2 className='text-center mb-4'>Nft Name</h2>
          <h5 className='text-center mb-4'>Nft Author</h5>
          <h5 className='text-center mb-4'>Nft Description</h5>
        </Card.Body>
      </Card>
      </div>
      </Container>
    </div>
  );
}