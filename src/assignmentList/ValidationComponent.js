import React from 'react';

function ValidationComponent(props) {
    const lenText=props.length<5? "Text too short": "Text long enough"
  return (
    <div>
    {lenText} 
    </div>
  );
}

export default ValidationComponent;
