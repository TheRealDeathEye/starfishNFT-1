import React, {Component} from 'react';

class NftDisplay extends Component {
  state = {};

  render() {
    return (
      <div class="row">
        <div class="col"><img src="imgs/white_logo.png" alt=""/><a href="#">Listing 1</a></div>
        <div class="col"><img src="imgs/white_logo.png" alt=""/><a href="#">Listing 1</a></div>
        <div class="col"><img src="imgs/white_logo.png" alt=""/><a href="#">Listing 1</a></div>
        <div class="col"><img src="imgs/white_logo.png" alt=""/><a href="#">Listing 1</a></div>
      </div>
    );
  }
}

export default NftDisplay;