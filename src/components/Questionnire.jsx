import Results from './Results';

const Questionnire = ({ data, start, currentQuestionInd, onAnswerSelect, score, showResult, onRestart }) => {

    const currentQuestion = data.questions[currentQuestionInd];

    const getFinalResult = () => {
        const maxScoreType = Object.keys(score).reduce((a, b) =>
            score[a] > score[b] ? a : b
        );
        return data.results[maxScoreType].message;
    };

    return (
        <>
            {!start ? null : (
                <div>
                    <h1>{data.quizTitle}</h1>
                    {!showResult ? (
                        <div>
                            <h2>Question {currentQuestionInd + 1}: {currentQuestion.questionText}</h2>
                            <ul>
                                {Object.entries(currentQuestion.options).map(([key, option]) => (
                                    <li key={key}>
                                        <button onClick={() => onAnswerSelect(option.effect)}>
                                            {option.text}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ) : (
                        <Results result={getFinalResult()} handleRestart={onRestart} />
                    )}
                </div>
            )
            }
        </>
    );
};

export default Questionnire;
