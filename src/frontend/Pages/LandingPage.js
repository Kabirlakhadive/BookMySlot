import React from 'react';

const LandingPage = () => {
  return (
    <div>
      
        <h1>Welcome to BookMySlot</h1>
        <p>Book your slot with ease and convenience</p>
        <button onClick={() => window.location.href = '/login'}>Login</button>
      
    </div>
  );
};

export default LandingPage;
