import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class NftDesign extends Component {
  render() {
    return (
      <div className="col-sm-12 col-md-4 col-lg-3 bio">
        <div className='row' style={{paddingBottom:'20px'}}>
          <img src="imgs/white_logo.png" alt="" style={{height:'auto',width:'auto'}}/>
          <Link to="/nftView" style={{width:'100%'}}>Listing</Link>
        </div>
      </div>
    );
  }
}

export default NftDesign;