import React, {useRef,useState} from 'react';
import { Card,Container,Form,Button } from 'react-bootstrap';

export default function NftCreate() {
  const titleRef=useRef();
  const descriptionRef=useRef();
  const [loading] = useState(false);
  
  return(
    <div style={{paddingTop:'50px'}}>
      <Container className='d-flex align-items-center justify-content-center' style={{minHeight:'100%'}}>
      <div className='w-100'>
      <Card>
        <Card.Body>
          <h2 className='text-center mb-4'>NFT Create</h2>
          <img src="imgs/white_logo.png" alt="" style={{height:'auto',width:'auto',maxHeight:'300px'}}/>
          <Form.Group id='nftTitle'>
            <Form.Label>NFT Title</Form.Label>
            <Form.Control type='text' ref={titleRef} required />
          </Form.Group>
          <Form.Group id='nftDescript'>
            <Form.Label>NFT Description</Form.Label>
            <Form.Control type='text' ref={descriptionRef} required />
          </Form.Group>
          <Button disabled={loading} className='w-100 mt-2' type='submit'>Upload Nft</Button>
        </Card.Body>
      </Card>
      </div>
      </Container>
    </div>
  );
}