import React from 'react'
import styled from 'styled-components'

export default function Die(props) {
  return <Dice className={`fas fa-dice-${props.face}`} />
}

const Dice = styled.i`
  font-size: 160px;
  padding: 50px;
  color: teal;
`
