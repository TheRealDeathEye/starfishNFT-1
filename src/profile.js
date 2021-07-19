import React from 'react';

function Profile() {
  return(
    <div align="center" class="row">
      <h1 style={{paddingTop:'125px',paddingBottom:'20px',textAlign:'center',color:'white'}}>My Profile</h1>
      <div class="col"align="right">
        <img style={{height:'200px',width:'200px',background:'#313639'}} type="button" class="btn" src="/imgs/logo1.png" alt=""></img>
      </div>
      <div class="col"align="left">
        <div class="form-group"style={{width:'25%'}}>
          <input type="text" class="form-control" id="username" placeholder="New Username"/>
        </div>
        <br/>
        <button type="button" class="btn"style={{background:'#313639',color:'#FFFAF1'}}>Change Username</button>
        <br/><br/>
        <div class="form-group"style={{width:'25%'}}>
          <input type="text" class="form-control" id="oldPassword" placeholder="Old Password"/>
        </div>
        <div class="form-group"style={{width:'25%', paddingTop:'10px'}}>
          <input type="text" class="form-control" id="newPassword" placeholder="New Password"/>
        </div>
        <div class="form-group"style={{width:'25%', paddingTop:'10px'}}>
          <input type="text" class="form-control" id="confirmPassword" placeholder="Confirm New Password"/>
        </div>
        <br/>
        <button type="button" class="btn" style={{background:'#313639',color:'#FFFAF1'}}>Change Password</button>
      </div>
    </div>
  );
}

export default Profile;