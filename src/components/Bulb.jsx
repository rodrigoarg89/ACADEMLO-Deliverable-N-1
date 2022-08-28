import React, { useState } from 'react';


const Bulb = ({isBulbOn, setIsBulbOn }) => {


  return (
    <div>
       <div 
          className='bulb' 
          style={{ background: isBulbOn ? 'yellow' : 'gray'}}>
       </div>

       <button onClick={setIsBulbOn}>
          on / off
       </button>
    </div>
  );
};

export default Bulb;

