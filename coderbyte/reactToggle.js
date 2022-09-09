import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Toggle() {
  const [clicked, setClicked] = useState()
  function handleClick() {
    // todo
  }
  
  return (
    <button>ON</button>
  );
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);