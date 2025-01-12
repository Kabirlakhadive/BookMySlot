import React from 'react';
import Login from './Pages/Login';

const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </Router>
  );
};

export default App;
