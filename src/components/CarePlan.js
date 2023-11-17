import React from 'react';

export const CarePlan = () => {
  const handleClick = () => {
    // Handle the button click here
    alert('Button clicked!');
  };

  return (
    <div>
      <div>CarePlan</div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}
export default CarePlan;

