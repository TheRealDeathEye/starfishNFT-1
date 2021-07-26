import React, {Component} from 'react';
import {Container} from 'react-bootstrap';
import NftDesign from './nftDesign';

class NftDisplay extends Component {
  state = {
    nfts: ['tag1','tag2','tag3','tag4','tag5','tag6']
  };

  render() {
    return (
      <Container>
      <div className="row">
        {this.state.nfts.map(nft => <NftDesign key={nft.id} />)}
      </div>
      </Container>
    );
  }
}

export default NftDisplay;