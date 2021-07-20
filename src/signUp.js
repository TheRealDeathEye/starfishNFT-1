import React from 'react';
import Email from './components/email';
import Username from './components/username';

function SignUp() {
  return(
    <div align="center" style={{color:'white'}}>
      <h1 style={{paddingTop:'150px',paddingBottom:'20px',textAlign:'center'}}>Sign Up</h1>
      <button type="button" class="btn"><img style={{height:'50px',width:'50px'}} src="/imgs/google.png" alt=""/></button>
      <button type="button" class="btn"><img style={{height:'50px',width:'50px'}} src="/imgs/facebook.webp" alt=""/></button>
      <button type="button" class="btn"><img style={{height:'50px',width:'50px'}} src="/imgs/twitter.png" alt=""/></button>
      <Email />
      <Username />
      <div class="form-group">
        <label for="password">Password</label>
        <input type="text" class="form-control" id="password"/>
      </div>
      <br/>
      <button type="button" class="btn"style={{background:'#313639',color:'#FFFAF1'}}>Sign Up</button>
    </div>
  );
}

export default SignUp;