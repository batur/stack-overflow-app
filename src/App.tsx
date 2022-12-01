import { Routes, Route } from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <Routes>
      <Route path='/' element={<div>Home</div>} />
      <Route path='/list' element={<div>List</div>} />
    </Routes>
  );
}

export default App;
