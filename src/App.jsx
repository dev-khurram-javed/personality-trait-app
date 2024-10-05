import { useState } from "react";
import Questionnire from "./components/Questionnire"
import Start from "./components/Start"
import quizData from './data.json';
import './App.css';

function App() {
    const initialScore = { extrovert: 0, introvert: 0, neutral: 0 };

    const [start, setStart] = useState(false);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(initialScore);
    const [showResult, setShowResult] = useState(false);

    // Function to handle answer selection
    const handleAnswerSelect = (effect) => {
        console.log(effect);
        // Update the score based on the selected answer's effect
        setScore(prevScore => ({
            ...prevScore,
            [effect]: prevScore[effect] + 1
        }));

        // Move to the next question or show results if it's the last question
        if (currentQuestionIndex < quizData.questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setShowResult(true);
        }
    };

    // Restart
    const restart = () => {
        setShowResult(false);
        setCurrentQuestionIndex(0);
        setScore(initialScore);
        setStart(false);
    }

    return (
        <>
            {!start ? <Start handleClick={() => setStart(true)} /> : ''}
            <Questionnire
                data={quizData}
                start={start}
                currentQuestionInd={currentQuestionIndex}
                onAnswerSelect={handleAnswerSelect}
                score={score}
                showResult={showResult}
                onRestart={restart}
            />
        </>
    )
}

export default App
