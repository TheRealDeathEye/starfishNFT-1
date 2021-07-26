import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import {useAuth} from '../contexts/AuthContext';

function Navbar() {
  const {logout} = useAuth();
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      history.push('/');
      await logout();
      document.getElementById('logoutToggle').style.display='none';
      document.getElementById('galleryToggle').style.display='none';
      document.getElementById('profileToggle').style.display='none';
      document.getElementById('signInToggle').style.display='block';
    } catch {
      console.log('Failed to logout');
    }
  }

    return (
      <div>
        <header className="site-header fixed-top">
            <nav style={{borderBottom: '1px solid white'}} className="navbar main-nav navbar-expand-lg navbar-dark" aria-label="Main navigation">
                <div className="container-fluid" style={{paddingRight:'0px'}}>
                    <div className="row d-none d-md-flex">
                        <Link style={{ textDecoration: 'none' }} to='/'>
                            <div style={{display: "flex", alignItems:"center"}}><img height="75" src="imgs/starfish_logo.png" alt=""/> </div>
                        </Link>
                    </div>
                    <div className="d-flex d-md-none">
                    <a className="navbar-brand" href="index.html" style={{border:'none'}}>
                        <div style={{display: 'flex', alignItems:'center'}}> <img height="50" src="imgs/starfish_logo.png" alt=""/> </div>
                    </a>
                    
                    </div>
                <ul className="navbar-nav d-none d-lg-flex" id="navFont">
                    <li className="nav-item">
                        <a className="nav-link active" href="https://charts.bogged.finance/?token=0x652Ebb7B1A44Db09258a2C386b3E46E6D9c2B2f1">Chart</a>
                    </li>
                    <li className="nav-item" style={{display:'none'}} id='galleryToggle'>
                      <Link className= "nav-link active" style={{ textDecoration: 'none' }} to='/gallery'>Gallery</Link>
                    </li>
                    <li className="nav-item" style={{display:'none'}} id='profileToggle'>
                      <Link className= "nav-link active" style={{ textDecoration: 'none' }} to='/profile'>Profile</Link>
                    </li>
                    <li className="nav-item" id='signInToggle'>
                      <Link className= "nav-link active" style={{ textDecoration: 'none' }} to='/signIn'>Sign In</Link>
                    </li>
                    <li className="nav-item" style={{display:'none'}} id='logoutToggle'>
                      <Link className= "nav-link active" onClick={handleSubmit} style={{ textDecoration: 'none'}} to='/'>Logout</Link>
                    </li>
                </ul>
                <ul style={{marginRight: '10px'}} className="navbar-nav d-none d-lg-flex">
                    <li className="nav-item">
                        <a href="https://t.me/starfishmarinelife"><img width="35" height="35" src="imgs/telegram.png" alt=""/></a>
                    </li>
                    <li>
                        <div style={{width:'10px'}}></div>
                    </li>
                    <li className="nav-item">
                        <a href="https://twitter.com/StarfishCoin"><img width="35" height="35" src="imgs/twitter.png" alt=""/></a>
                    </li>
                </ul>
                <a id="openMenu" href="index.html" className="btn btn-primary d-flex d-lg-none" style={{background:'transparent', border:'none', height:'100%'}}><i> className="material-icons">menu</i></a>
                </div>
            </nav>
        </header>
    </div>
    );
}

export default Navbar;