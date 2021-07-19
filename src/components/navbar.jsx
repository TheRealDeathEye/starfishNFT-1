import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
    return (
      <div>
        <header class="site-header fixed-top">
            <nav style={{borderBottom: '1px solid white'}} class="navbar main-nav navbar-expand-lg navbar-dark" aria-label="Main navigation">
                <div class="container-fluid" style={{paddingRight:'0px'}}>
                    <div class="row d-none d-md-flex">
                        <Link style={{ textDecoration: 'none' }} to='/'>
                            <div style={{display: "flex", alignItems:"center"}}><img height="75" src="imgs/starfish_logo.png" alt=""/> </div>
                        </Link>
                    </div>
                    <div class="d-flex d-md-none">
                    <a class="navbar-brand" href="index.html" style={{border:'none'}}>
                        <div style={{display: 'flex', alignItems:'center'}}> <img height="50" src="imgs/starfish_logo.png" alt=""/> </div>
                    </a>
                    
                    </div>
                <ul class="navbar-nav d-none d-lg-flex" id="navFont">
                    <li class="nav-item">
                        <a class="nav-link active" href="https://charts.bogged.finance/?token=0x652Ebb7B1A44Db09258a2C386b3E46E6D9c2B2f1">Chart</a>
                    </li>
                    <li class="nav-item">
                      <a class= "nav-link active"><Link style={{ textDecoration: 'none' }} to='/gallery'>Gallery</Link></a>
                    </li>
                    <li class="nav-item">
                      <a class= "nav-link active"><Link style={{ textDecoration: 'none' }} to='/profile'>Profile</Link></a>
                    </li>
                    <li class="nav-item">
                      <a class= "nav-link active"><Link style={{ textDecoration: 'none' }} to='/signIn'>Sign In</Link></a>
                    </li>
                </ul>
                <ul style={{marginRight: '10px'}} class="navbar-nav d-none d-lg-flex">
                    <li class="nav-item">
                        <a href="https://t.me/starfishmarinelife"><img width="35" height="35" src="imgs/telegram.png" alt=""/></a>
                    </li>
                    <li>
                        <div style={{width:'10px'}}></div>
                    </li>
                    <li class="nav-item">
                        <a href="https://twitter.com/StarfishCoin"><img width="35" height="35" src="imgs/twitter.png" alt=""/></a>
                    </li>
                </ul>
                <a id="openMenu" href="index.html" class="btn btn-primary d-flex d-lg-none" style={{background:'transparent', border:'none', height:'100%'}}><i> class="material-icons">menu</i></a>
                </div>
            </nav>
        </header>
    </div>
    );
}

export default Navbar;