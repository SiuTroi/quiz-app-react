import { useState } from "react";
import InGame from "./components/InGame";
import StartGame from "./components/StartGame";
import styled from 'styled-components'


function App() {
  const [startGame, setStartGame] = useState(false);
  const [answerData, setAnswerData] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
	const [totalCorrect, setTotalCorrect] = useState(0);
  const [answerChoose, setAnswerChoose] = useState(false);
  const [submit, setSubmit] = useState(true);
  const [reviewGame, setReviewGame] = useState(true);



  return (
    <Main>
      {startGame 
      ? <InGame 
        answerData={answerData}
        setAnswerData={setAnswerData}
        currentQuestion={currentQuestion}
        setCurrentQuestion={setCurrentQuestion}
        totalCorrect={totalCorrect}
        setTotalCorrect={setTotalCorrect}
        answerChoose={answerChoose}
        setAnswerChoose={setAnswerChoose}
        submit={submit}
        setSubmit={setSubmit}
        reviewGame={reviewGame}
        setReviewGame={setReviewGame}
      /> 
      : <StartGame setStartGame={setStartGame} />}
    </Main>
  );
}

const Main = styled.div`
  background-color: #A5B4FC;
  max-width: 100vw;
  text-align: center;
  height: 100vh;
`
export default App;
