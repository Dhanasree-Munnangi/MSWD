import React, { useState } from 'react'

const Button = ({ hadClick, text }) => {
  return (
    <button onClick={hadClick}>
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
        <StatisticLine text="Satisfied" value={Satisfied} />
        <StatisticLine text="Neutral" value={Neutral} />
        <StatisticLine text="Unsatisfied" value={Unsatisfied} />
        <StatisticLine text="all" value={all} />
        <StatisticLine text="average" value={average} />
        <StatisticLine text="positive" value={positive + '%'} />
      </tbody>
    </table>
  )
}

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
    <td>{text} </td> 
    <td>{value} </td>
    </tr>
  )
}

const App = () => {
  const [Satisfied, setSatisfied] = useState(0)
  const [Neutral, setNeutral] = useState(0)
  const [Unsatisfied, setUnsatisfied] = useState(0)

  const hasatisClick = () =>
    setSatisfied(Satisfied + 1)

  const haneuClick = () =>
    setNeutral(Neutral + 1)

  const haunsaClick = () =>
    setUnsatisfied(Unsatisfied + 1)

    const all = Satisfied + Neutral + Unsatisfied
    const average = ((Satisfied - Unsatisfied) / all) 
    const positive = (Satisfied / all) * 100


  return (
    <>
      <h1>give feedback</h1>
      <Button hadClick={hasatisClick} text="Satisfied" />
      <Button hadClick={haneuClick} text="Neutral" />
      <Button hadClick={haunsaClick} text="Unsatisfied" />
      <h1>statistics</h1>
      <Statistics Satisfied={Satisfied} Neutral={Neutral} Unsatisfied={Unsatisfied} all={all} average={average} positive={positive} />
    </>
  )
}

export default App
