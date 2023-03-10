import { useState } from 'react';

const Button = ({ handler, buttonText }) => {
  return <button onClick={() => handler((prevValue) => prevValue + 1)}> {buttonText} </button>;
};

const StatisticsLine = ({ text, value }) => {
  return (
    // <p>

    //   {text} : {value}
    // </p>

    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const avg = (good - bad) / all;
  const positive = `${(good / all) * 100} %`;
  return (
    <section>
      <h2>Statistics</h2>
      {!all ? (
        <p>No feedback given</p>
      ) : (
        <table>
          <tbody>
            <StatisticsLine text={'Good'} value={good} />
            <StatisticsLine text={'Neutral'} value={neutral} />
            <StatisticsLine text={'Bad'} value={bad} />
            <StatisticsLine text={'Average'} value={avg} />
            <StatisticsLine text={'Positive'} value={positive} />
          </tbody>
        </table>
      )}
    </section>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <main>
      <h1>Give Feedback</h1>
      <Button buttonText={'Good'} handler={setGood} />
      <Button buttonText={'Neutral'} handler={setNeutral} />
      <Button buttonText={'Bad'} handler={setBad} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </main>
  );
};

export default App;
