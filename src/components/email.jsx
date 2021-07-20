import React, {useState} from 'react';

export default function Email(){
  const [title, setTitle] = useState('');

  const handleOnChange = (e) => {
    setTitle(e.target.value);
  }
  return (
    <div>
      <input type='email' onChange={handleOnChange} />
    </div>
  );
}