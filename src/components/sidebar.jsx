import React from 'react';

function Filterbar() {
    return (
      <nav style={{borderRight: '1px solid white'}} className="navbar main-nav navbar-expand-lg navbar-dark" aria-label="filter">
        <div className="container-fluid" style={{paddingRight:'0px'}}>
          <ul style={{marginRight: '10px'}} className="navbar-nav d-none d-lg-flex">
            <li className="nav-item">
              <h1 href="https://t.me/starfishmarinelife"><img width="35" height="35" src="imgs/telegram.png" alt=""/></h1>
            </li>
          </ul>
          <p id="openFilter" className="btn btn-primary d-flex d-lg-none" style={{background:'transparent', border:'none', height:'100%'}}><i> class="material-icons">menu</i></p>
        </div>
      </nav>
    );
}

export default Filterbar;