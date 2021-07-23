import React from 'react';

function SignIn() {
  return(
    <div align="center" style={{color:'white'}}>
      <h1 style={{paddingTop:'150px',paddingBottom:'20px',textAlign:'center'}}>Sign In</h1>
      <button type="button" class="btn"><img style={{height:'50px',width:'50px'}} src="/imgs/google.png" alt=""/></button>
      <button type="button" class="btn"><img style={{height:'50px',width:'50px'}} src="/imgs/facebook.webp" alt=""/></button>
      <button type="button" class="btn"><img style={{height:'50px',width:'50px'}} src="/imgs/twitter.png" alt=""/></button>
      <div class="form-group"style={{width:'20%'}}>
        <label for="username"style={{paddingTop:'20px',paddingBottom:'10px'}}>Username</label>
        <input type="text" class="form-control" id="username"/>
      </div>
      <div class="form-group"style={{width:'20%'}}>
        <label for="password"style={{paddingTop:'10px',paddingBottom:'10px'}}>Password</label>
        <input type="text" class="form-control" id="password"/>
      </div>
      <br/>
      <button type="button" class="btn"style={{background:'#313639',color:'#FFFAF1'}}>Sign In</button>
    </div>
  );
}

export default SignIn;