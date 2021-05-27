import React, { useState } from 'react'

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Statistics = ({ Satisfied , Neutral, Unsatisfied }) => {
  if (Satisfied === 0 & Neutral === 0 & Unsatisfied === 0) {
    
  }
  return (
    <table>
      <tbody>
        <tr><Statistic feedback="Satisfied" value={Satisfied} /></tr>
        <tr><Statistic feedback="Neutral" value={Neutral} /></tr>
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
  const [Neutral, setNeutral] = useState(0)
  const [Unsatisfied, setUnsatisfied] = useState(0)

  const handleSatisfiedClick = () =>
    setSatisfied(Satisfied + 1)

  const handleNeutralClick = () =>
    setNeutral(Neutral + 1)

  const handleUnsatisfiedClick = () =>
    setUnsatisfied(Unsatisfied + 1)


  return (
    <>
      <h1>give feedback</h1>
      <Button handleClick={handleSatisfiedClick} text="Satisfied" />
      <Button handleClick={handleNeutralClick} text="Neutral" />
      <Button handleClick={handleUnsatisfiedClick} text="Unsatisfied" />
      <h1>statistics</h1>
      <Statistics Satisfied={Satisfied} Neutral={Neutral} Unsatisfied={Unsatisfied} />
    </>
  )
}

export default App