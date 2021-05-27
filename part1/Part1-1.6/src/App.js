import React, { useState } from 'react'

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Statistics = ({ Satisfied , neutral, Unsatisfied }) => {
  if (Satisfied === 0 & neutral === 0 & Unsatisfied === 0) {
    return (
      <p>No feedback given</p>
    )
  }
  return (
    <table>
      <tbody>
        <tr><Statistic feedback="Satisfied" value={Satisfied} /></tr>
        <tr><Statistic feedback="neutral" value={neutral} /></tr>
        <tr><Statistic feedback="Unsatisfied" value={Unsatisfied} /></tr>
      </tbody>
    </table>
  )
}

const Statistic = ({ feedback, value }) => {
  return (
    <td>{feedback} {value}</td>
  )
}

const App = () => {
  const [Satisfied, setSatisfied] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [Unsatisfied, setUnsatisfied] = useState(0)

  const handleSatisfiedClick = () =>
    setSatisfied(Satisfied + 1)

  const handleNeutralClick = () =>
    setNeutral(neutral + 1)

  const handleUnsatisfiedClick = () =>
    setUnsatisfied(Unsatisfied + 1)


  return (
    <>
      <h1>give feedback</h1>
      <Button handleClick={handleSatisfiedClick} text="Satisfied" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleUnsatisfiedClick} text="Unsatisfied" />
      <h1>statistics</h1>
      <Statistics Satisfied={Satisfied} neutral={neutral} Unsatisfied={Unsatisfied} />
    </>
  )
}

export default App