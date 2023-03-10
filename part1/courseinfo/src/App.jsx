import React from 'react';
function Header(props) {
  return <h1>{props.course}</h1>;
}

function Part(props) {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  );
}
function Content(props) {
  return (
    <section>
      <Part part={props.part1} exercises={props.exercises1} />
      <Part part={props.part2} exercises={props.exercises2} />
      <Part part={props.part3} exercises={props.exercises3} />
    </section>
  );
}

function Total(props) {
  return <p>{props.numOfExercises}</p>;
}
function App() {
  const course = 'Half Stack application development';

  const part1 = 'Fundamentals of React';
  const exercises1 = 10;
  const part2 = 'Using props to pass data';
  const exercises2 = 7;
  const part3 = 'State of a component';
  const exercises3 = 14;

  return (
    <main>
      <Header course={course} />
      <Content part1={part1} exercises1={exercises1}></Content>
      <Content part2={part2} exercises2={exercises2}></Content>
      <Content part3={part3} exercises3={exercises3}></Content>
      <Total numOfExercises={exercises1 + exercises2 + exercises3} />
    </main>
  );
}

export default App;
