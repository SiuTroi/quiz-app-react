import React from 'react';
import {CountdownCircleTimer} from "react-countdown-circle-timer";
import styled from 'styled-components';

const Time = ({ time, handleSubmit }) => {
    const children = ({ remainingTime }) => {
		const minutes = Math.floor(remainingTime / 60);
		const seconds = remainingTime % 60;

		if (minutes === 0 && seconds === 0) {
			handleSubmit();
		}

		return `${minutes}:${seconds}`;
	};
  return (
    <TimeCountDown>
        <CountdownCircleTimer
            strokeWidth={8}
            isPlaying={time}
            size={90}
            duration={90}
            colors={['rgb(79, 70, 229)', '#F7B801', '#A30000', '#A30000']}
            colorsTime={[7, 5, 2, 0]}
            style={{ width: '5rem', height: '5rem' }}
            rotation={'counterclockwise'}
        >
            {children}
        </CountdownCircleTimer>
    </TimeCountDown>
  )
}

const TimeCountDown = styled.div`
    width: 90px;
    height: 90px;
    position: absolute;
    background-color: #fff;
    border-radius: 50%;
    left: 50%;top: 0;
    transform: translate(-50%, -50%);
    color: rgb(79, 70, 229);
    font-weight: bold;
`
export default Time