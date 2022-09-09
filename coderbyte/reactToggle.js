import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Toggle() {
  const [clicked, setClicked] = useState(true);
  function handleClick() {
    if (clicked) {
      setClicked(false);
    } else {
      setClicked(true);
    }
  }
  
  return (
    <div>
    {clicked && <button onClick={handleClick}>ON</button> }
    {!clicked && <button onClick={handleClick}>OFF</button> }
    </div>
  );
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);