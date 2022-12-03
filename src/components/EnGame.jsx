import React from 'react';
import Answer from './Answer';
import ReviewGame from './ReviewGame';
import styled from 'styled-components';

const EnGame = ({
    answerData,
    questions,
    currentQuestion,
    setCurrentQuestion,
    totalCorrect,
    setSubmit,
    setTotalCorrect,
    reviewGame,
    setReviewGame,
    setAnswerChoose
}) => {
    const handleResetGame = () => {
        setSubmit(true)
        setCurrentQuestion(currentQuestion * 0);
        setTotalCorrect((totalCorrect *= 0))
    }
    
    const handleReviewGame = () => {
        setReviewGame(false);
        setCurrentQuestion(currentQuestion * 0);  

    }

    const handleWrong = () => {
        for(let i=0;i<questions[currentQuestion].answers.length;i++) {
            if(answerData[currentQuestion].answers[i].correct == true) {
                answerData[currentQuestion].answers[i].right = true;
            }
            if (answerData[currentQuestion].answers[i].hasOwnProperty('active')) {
				if (
					answerData[currentQuestion].answers[i].correct ==
					answerData[currentQuestion].answers[i].active
				) {
					answerData[currentQuestion].answers[i].wrong = false;
				} else {
					answerData[currentQuestion].answers[i].wrong = true;
				}
			}
        }
    }
    handleWrong()
  return (
    <>
        {reviewGame ? (
            <div>
                <H1>Your Score is: <span>{totalCorrect}</span></H1>
                <div>
                    <ResetBtn className="btn" onClick={handleResetGame}>Try again</ResetBtn>
                    <ReviewBtn className="btn" onClick={handleReviewGame}>Review</ReviewBtn>
                </div>
            </div>
        ) : (
            <>
                <ReviewGame
                    handleResetGame={handleResetGame}
                    questions={questions}
                    currentQuestion={currentQuestion}
                    setCurrentQuestion={setCurrentQuestion}
                ></ReviewGame>
                <Answer
                    setTotalCorrect={setTotalCorrect}
                    setCurrentQuestion={setCurrentQuestion}
                    setAnswerChoose={setAnswerChoose}
                    answerData={answerData}
                    currentQuestion={currentQuestion}
                ></Answer>
            </>

        ) }
    </>
  )
}

const ResetBtn = styled.button`
    background-color: var(--primary-btn-color);

    &:hover {
      background-color: var(--primary-btn-color-hover);
      color: white;
    }
`
const ReviewBtn = styled.button`    
    background-color: var(--wrong-color);
    color: white;

    &:hover {
      background-color: var(--reset-btn-hover-color);
    }
`
const H1 = styled.h1`
    font-size: 30px;
    margin: 0;
    font-weight: 400;
    padding: 64px 0 24px;
    color: #fff;
`


export default EnGame