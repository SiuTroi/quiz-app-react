import React from 'react';
import styled from 'styled-components';
import Time from './Time';

const Question = ({ currentQuestion, time, questions, handleSubmit }) => {
  return (
    <MainQuestion>
        <Time 
          time={time}
          handleSubmit={handleSubmit}
        ></Time>
        <p style={{color: "var(--primary-color)", fontSize: 18}}>
          Question <span style={{fontWeight: "bold"}}>{currentQuestion+1}</span>/{questions.length}
        </p>
        <p style={{fontSize: 20, fontWeight: 700}}>{questions[currentQuestion].question_content}</p>
    </MainQuestion>
  )
}

const MainQuestion = styled.div`
  background-color: white;
  max-width: 720px;
  height: 160px;
  padding: 64px 16px 0;
  white-space: wrap;
  width: 100%;
  border-radius: 4px;
  margin: 64px auto 40px;
  position: relative;
`

export default Question