import React from 'react'

const Results = ({ result, handleRestart }) => {
    return (
        <>
            <h2>Your Result:</h2>
            <p>{result}</p>
            <button onClick={handleRestart}>Restart</button>
        </>
    )
}

export default Results