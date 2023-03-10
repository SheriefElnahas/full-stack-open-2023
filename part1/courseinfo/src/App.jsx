import React from 'react';
function Header(props) {
  return <h1>{props.name}</h1>;
}

function Part(props) {
  return (
    <p>
      {props.part.name} {props.part.exercises}{' '}
    </p>
  );
}
function Content(props) {
  return (
    <section>
      {props.parts.map((part) => {
        return <Part key={part.name} part={part} />;
      })}
    </section>
  );
}

function Total(props) {
  return <p>{props.parts.reduce((acc, { exercises }) => acc + exercises, 0)}</p>;
}
function App() {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14,
      },
    ],
  };

  return (
    <main>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </main>
  );
}

export default App;
