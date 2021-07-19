import React from 'react';

function Gallery() {
  return(
      <div align="center">
        <h1 style={{paddingTop:'25px',textAlign:'center',color:'white'}}>My Gallery</h1>
        <br/><br/>
        <div class="box" align="center" id="animation">
          <div class="box" align="center" id="portraits">
            <div class="row">
              <div class="col"><img alt="" src="/imgs/logo1.png"/><a href="#">Listing 1</a></div>
              <div class="col"><img alt="" src="/imgs/logo1.png"/><a href="#">Listing 1</a></div>
              <div class="col"><img alt="" src="/imgs/logo1.png"/><a href="#">Listing 1</a></div>
              <div class="col"><img alt="" src="/imgs/logo1.png"/><a href="#">Listing 1</a></div>
              <div class="col"><img alt="" src="/imgs/logo1.png"/><a href="#">Listing 1</a></div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Gallery;