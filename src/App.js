import React from 'react';

import Calendar from './components/Calendar'

function App() {
  return (
    <div className="container mt-5">
      <h1>Simple React App </h1>
      <h4>Use Axios to read data from Firebase Database</h4>
      <hr />
      <Calendar />
    </div>
  );
}

export default App;
