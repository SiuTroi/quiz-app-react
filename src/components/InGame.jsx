import React, {useState} from 'react';
import { questionData } from "../questionData";
import styled from "styled-components";
import Question from './Question';
import Answer from './Answer';
import EnGame from './EnGame';


const InGame = ({
    answerData,
    setAnswerData,
    currentQuestion,
    setCurrentQuestion,
    totalCorrect,
    setTotalCorrect,
    answerChoose,
    setAnswerChoose,
    submit,
    setSubmit,
    reviewGame,
    setReviewGame
}) => {
    const questions = questionData;
    const [change, setChange] = useState(1);
    const [time, setTime] = useState(true);

    const handlePriviousAnswer = () => {
        if(currentQuestion <= 0) return;
        setCurrentQuestion(currentQuestion - 1);
    }

    const handleNextAnswer = () => {
        if(currentQuestion >= questions.length - 1) return;
        setCurrentQuestion(currentQuestion + 1);
    }

    const handleSubmit =() => {
        setReviewGame(true);
		setSubmit(false);
        for(let i=0; i < questions.length; i++) {
            answerData[i].answers.map((item) => {
                if(item.hasOwnProperty('active') && 
                item.correct == item.active) {
                    setTotalCorrect((totalCorrect += 1));
                }
            })
        }
    }


    return (
        <>
            {submit ? (
                <>
                    <div style={{paddingTop: "32px"}}>
                        <PriviousBtn className={`btn ${currentQuestion <= 0 ? "privious-disabled" : ""}`} onClick={handlePriviousAnswer}>Privious</PriviousBtn>
                        <NextBtn className={`btn ${currentQuestion === (questions.length - 1) ? "privious-disabled" : ""}`} onClick={handleNextAnswer}>Next</NextBtn>
                        {currentQuestion === (questions.length - 1) && (
                            <SubmitBtn className='btn' onClick={handleSubmit}>
                                Submit
                            </SubmitBtn>
                        )}
                    </div>
                    <Question
                        time={time}
                        currentQuestion={currentQuestion}
                        questions={questions}
                        handleSubmit={handleSubmit}
                    ></Question>
                    <Answer
                        change={change}
                        setChange={setChange}
                        answerData={answerData}
                        setAnswerData={setAnswerData}
                        setAnswerChoose={setAnswerChoose}
                        currentQuestion={currentQuestion}
                    ></Answer>
                </>
            ) : (
                <EnGame
                    answerData={answerData}
                    questions={questions}
                    currentQuestion={currentQuestion}
                    setCurrentQuestion={setCurrentQuestion}
                    totalCorrect={totalCorrect}
                    setSubmit={setSubmit}
                    setTotalCorrect={setTotalCorrect}
                    reviewGame={reviewGame}
                    setReviewGame={setReviewGame}

                    setAnswerChoose={setAnswerChoose}
                ></EnGame>
            )}
        </>
  )
}


export const PriviousBtn = styled.button`
    background-color: var(--previous-btn-color);
    color: #fff;

    &:hover {
        background-color: rgb(229 231 235);
    }
`

export const NextBtn = styled.button`
    background-color: var(--primary-btn-color);


    &:hover {
        background-color: var(--primary-btn-color-hover);
        color: #fff;
    }
`
export const SubmitBtn = styled.button`
    background-color: var(--submit-btn-color);
    color: #fff;

    &:hover {
        background: var(--submit-btn-hover-color);
    }
`

export default InGame