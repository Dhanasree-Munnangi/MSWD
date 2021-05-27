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
        <tr><StatisticLine text="Satisfied" value={Satisfied} /></tr>
        <tr><StatisticLine text="Neutral" value={Neutral} /></tr>
        <tr><StatisticLine text="Unsatisfied" value={Unsatisfied} /></tr>
        <tr><StatisticLine text="all" value={all} /></tr>
        <tr><StatisticLine text="average" value={average} /></tr>
        <tr><StatisticLine text="positive" value={positive + '%'} /></tr>
      </tbody>
    </table>
  )
}

const StatisticLine = ({ text, value }) => {
  return (
  
    <td>{text}  {value} </td>
    
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