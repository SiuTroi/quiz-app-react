import React, {useEffect} from "react";
import { questionData } from "../questionData";
import styled from "styled-components";
import axios from "axios";


const Answer = ({
  answerData,
  setAnswerData,
  setAnswerChoose,
  currentQuestion,
  change,
  setChange
}) => {
  let questions = [...answerData];

  useEffect(() => {
		const fetchData = async () => {
			const res = await axios.get(
				'http://127.0.0.1:5173/src/data.json'
			);
			await setAnswerData(res.data);
		};
		fetchData();
	}, [setChange]);

  const handleSaveAnswerChoosen = (e) => {
    let idxClick = e.target.parentNode.getAttribute('index')
    
    let valClick = questions[currentQuestion].answers[idxClick].answer_content;

    for(let i=0;i<questions[currentQuestion].answers.length;i++){
      if(questions[currentQuestion].answers[i].answer_content === valClick){
        questions[currentQuestion].answers[i].active = true;
        setAnswerChoose(questions[currentQuestion].answers[i].correct);
        setAnswerData(questions)
      } else {
        delete questions[currentQuestion].answers[i]?.active;
        setAnswerData(questions)
      }

      setChange(change+1)
    }
  };
  return (
    <MainAnswer>
      {answerData.length > 0 &&
        answerData[currentQuestion].answers.map((item, index) => {
          return (
          <div key={index} index={index}>
            <ItemAnswer
              index={index}
              id={questions[currentQuestion].id}
              onClick={handleSaveAnswerChoosen}
              className={`
              ${item.active ? 'primary-color' : ''}
              ${item.right ? 'correct-color' : ''}
              ${item.wrong? 'wrong-color' : ''}
              `}
            >
                {index + 1}) {item.answer_content}
            </ItemAnswer>
          </div>)
        })}
    </MainAnswer>
  );
};

const MainAnswer = styled.div`
  max-width: 640px;
  margin: 0 auto;
`

const ItemAnswer = styled.div`
  margin-top: 20px;
  text-align: left;
  padding: 16px 10px;
  background-color: white;
  border-radius: 6px;
  border: 2px solid #fff;
  font-weight: 500;

  &:hover {
    cursor: pointer;
    background-color: var(--primary-color);
    color: #fff;
  }
`

export default Answer;
