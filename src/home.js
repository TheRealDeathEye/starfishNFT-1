import React from 'react';
import Filterbar from './components/filterbar';
import NftDisplay from './components/nftDisplay';

function Home() {
  return(
    <div>
      <Filterbar />
      <NftDisplay />
    </div>
  );
}

export default Home;