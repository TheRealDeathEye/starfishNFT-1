import React, {useState} from 'react';

export default function Username(){
  const [title, setTitle] = useState('');

  const handleOnChange = (e) => {
    setTitle(e.target.value);
  }
  return (
    <div class="form-group">
      <label for="username">Username</label>
      <input type="text" class="form-control" id="username" onChange={handleOnChange} value={title}/>
    </div>
  );
}