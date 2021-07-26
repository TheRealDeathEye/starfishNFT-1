import React from 'react';
import Sidebar from './components/sidebar';

function Home() {
  return(
    <div>
      <Sidebar />
      <div id="listings"style={{width:'85%',float:'right'}}>
        <div id='nftDisplay'/>
      </div>
    </div>
  );
}

export default Home;