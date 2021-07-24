import React from 'react';

function Home() {
  return(
    <div>
      <div class="w3-sidebar w3-bar-block" style={{width:'15%',backgroundColor:'#313639'}} id="sidebar">
          <h5 style={{fontSize:'25px',fontWeight:'bold',paddingBottom:'10px'}}>Filters</h5>
          <h5>Price</h5>
          <div class="row">
            <div class="col">
              <div class="form-group" style={{paddingLeft:'10px'}}>
                <input type="number" class="form-control" id="minPrice" placeholder="Min"/>
              </div>
            </div>
            <div class="col">
              <div class="form-group" style={{paddingRight:'10px'}}>
                <input type="number" class="form-control" id="maxPrice" placeholder="Max"/>
              </div>
            </div>
          </div>
          <hr class="solid"/>
          <h5>Date of Listing</h5>
          <div class="row"style={{paddingLeft:'10px',paddingRight:'10px'}}>
            <div class="col">
              <div class="form-group">
                <label for="date"style={{color:'#FFFAF1',paddingLeft:'10px'}}>From:</label>
                <input type="date" class="form-control" id="minDate" placeholder="From"/>
              </div>
            </div>
            <div class="col">
              <div class="form-group">
                <label for="date"style={{color:'#FFFAF1',paddingLeft:'10px'}}>To:</label>
                <input type="date" class="form-control" id="maxDate" placeholder="To"/>
              </div>
            </div>
          </div>
          <hr class="solid"/>
          <h5>Category</h5>
          <div class="form-group"style={{paddingLeft:'10px',paddingRight:'10px'}}>
            <select class="form-control" id="catSelect">
              <option>All</option>
              <option>Fine Art</option>
              <option>Generated Art</option>
              <option>Animals</option>
              <option>Music</option>
              <option>Sports</option>
            </select>
          </div>
          <hr class="solid"/>
          <div class="row"style={{paddingLeft:'10px',paddingRight:'10px'}}>
            <div class="col text-center">
              <button type="button" class="btn"style={{background:'#FFFAF1'}} id="resetButton">Reset</button>
            </div>
            <div class="col text-center">
              <button type="button" class="btn"style={{background:'#FFFAF1'}}>Apply</button>
            </div>
          </div>
        </div>
      <div id="listings"style={{width:'85%',float:'right'}}>
        <div id='nftDisplay'/>
      </div>
    </div>
  );
}

export default Home;