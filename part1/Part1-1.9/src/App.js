import React, { useState } from 'react'

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Statistics = ({ Satisfied, Neutral, Unsatisfied, all, average, positive }) => {
  if (Satisfied === 0 & Neutral === 0 & Unsatisfied === 0) {
    return (
      <p>No feedback given</p>
    )
  }
  return (
    <table>
      <tbody>
        <tr><Statistic feedback="Satisfied" value={Satisfied} /></tr>
        <tr><Statistic feedback="Neutral" value={Neutral} /></tr>
        <tr><Statistic feedback="Unsatisfied" value={Unsatisfied} /></tr>
        <tr><Statistic feedback="all" value={all} /></tr>
        <tr><Statistic feedback="average" value={average} /></tr>
        <tr><Statistic feedback="positive" value={positive + '%'} /></tr>
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

    const all = Satisfied + Neutral + Unsatisfied
    const average = ((Satisfied - Unsatisfied) / all) 
    const positive = (Satisfied / all) * 100


  return (
    <>
      <h1>give feedback</h1>
      <Button handleClick={handleSatisfiedClick} text="Satisfied" />
      <Button handleClick={handleNeutralClick} text="Neutral" />
      <Button handleClick={handleUnsatisfiedClick} text="Unsatisfied" />
      <h1>statistics</h1>
      <Statistics Satisfied={Satisfied} Neutral={Neutral} Unsatisfied={Unsatisfied} all={all} average={average} positive={positive} />
    </>
  )
}

export default App