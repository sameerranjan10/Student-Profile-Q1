import React from 'react';

// Functional component that receives student info via props
function Student(props) {
  return (
    <div className="student-card">
      <h2>{props.name}</h2>
      <p><strong>Course:</strong> {props.course}</p>
      <p><strong>College:</strong> {props.college}</p>
    </div>
  );
}

export default Student;
