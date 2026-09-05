import React from 'react';
import Student from './Student';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Student Profiles</h1>
      <Student
        name="Sameer Ranjan"
        course="B.Tech Computer Science & Engineering"
        college="GIET University, Gunupur"
      />
      <Student
        name="Ananya Sharma"
        course="B.Tech Electronics"
        college="GIET University, Gunupur"
      />
    </div>
  );
}

export default App;
