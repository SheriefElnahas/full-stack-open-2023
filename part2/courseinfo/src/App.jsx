const Header = ({ courseName }) => <h2>{courseName}</h2>;

const Total = ({ sum }) => (
  <p>
    <strong>Total Of {sum}</strong>
  </p>
);

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
);

const Content = ({ parts }) => (
  <>
    {parts.map((part) => {
      return <Part key={part.id} part={part} />;
    })}
  </>
);
const Course = ({ course }) => {
  console.log(course);
  // console.log(course.parts);
  const sum = course.parts.map((part) => part.exercises).reduce((acc, value) => acc + value);

  return (
    <section>
      <Header courseName={course.name} />
      <Content parts={course.parts} />
      <Total sum={sum} />
    </section>
  );
};
const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1,
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2,
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3,
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1,
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  return (
    <main>
      <h1>Web Development Curriculum</h1>
      {courses.map((course) => {
        return <Course key={course.id} course={course} />;
      })}
    </main>
  );
};

export default App;
