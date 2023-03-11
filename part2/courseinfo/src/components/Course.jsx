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

export const Course = ({ course }) => {
  const sum = course.parts.map((part) => part.exercises).reduce((acc, value) => acc + value);

  return (
    <section>
      <Header courseName={course.name} />
      <Content parts={course.parts} />
      <Total sum={sum} />
    </section>
  );
};
