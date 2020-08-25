import React from 'react'
import Die from './Die'

export default function Rolldice() {
  const [dice, setDice] = React.useState({ die1: 'two', die2: 'six' })
  let [rolling, setRolling] = React.useState(false)

  const sides = ['one', 'two', 'three', 'four', 'five', 'six']

  const roll = () => {
    const newFace1 = sides[Math.floor(Math.random() * sides.length)]
    const newFace2 = sides[Math.floor(Math.random() * sides.length)]
    setDice({ die1: newFace1, die2: newFace2})
    setRolling(true)
    setTimeout(() => {
      setRolling(false)
    },1000)
  }

  return (
    <div>
      <Die face={dice.die1} />
      <Die face={dice.die2} />
      <button onClick={roll} disabled={rolling}>
        {rolling ? 'Rolling....' : 'Roll Dice'}
      </button>
    </div>
  )
}

