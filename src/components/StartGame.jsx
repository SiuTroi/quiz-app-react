import React from 'react'
import styled from "styled-components"

const StartGame = ({ setStartGame }) => {
  return (
    <div style={{ textAlign: "center", paddingTop: 64}}>
        <H1>Welcome to React Quiz Game</H1>
        <StartBtn
            className='btn'
            onClick={() => setStartGame(true)}>
            Start
        </StartBtn>
    </div>
  )
}

const StartBtn = styled.button`
    background-color: var(--primary-btn-color);
    padding: 16px 64px;

    &:hover {
      background-color: var(--primary-btn-color-hover);
      color: white;
    }
`
const H1 = styled.h1`
  margin-top: 0;
  color:#fff;
  font-weight: 700;
  font-size: 48px;
  margin-bottom: 24px;
`

export default StartGame