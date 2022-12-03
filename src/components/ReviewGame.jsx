import React from 'react';
import Question from './Question';
import { PriviousBtn, NextBtn, SubmitBtn } from "./InGame";
import styled from 'styled-components';


const ReviewGame = ({
    handleResetGame,
    questions,
    currentQuestion,
    setCurrentQuestion
}) => {
    const handleNext = () => {
		if (currentQuestion > questions.length - 2) return;
		setCurrentQuestion(currentQuestion + 1);
	};
	const handlePrev = () => {
		if (currentQuestion <= 0) return;
		setCurrentQuestion(currentQuestion - 1);
	};
  return (
    <div style={{paddingTop: 64}}>
        <div>
            <PriviousBtn className='btn' onClick={handlePrev}>Privious</PriviousBtn>
            <NextBtn className='btn' onClick={handleNext}>Next</NextBtn>
            <SubmitBtn className='btn' onClick={handleResetGame}>Restart</SubmitBtn>
        </div>
        <div>
            <Question 
                questions={questions}
                currentQuestion={currentQuestion}
            />
        </div>
    </div>
  )
}



export default ReviewGame