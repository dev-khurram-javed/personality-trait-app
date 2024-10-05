import React, { useState } from 'react'

const Start = ({ handleClick }) => {
    return (
        <>
            <h1>Start Personality Trait Test</h1>
            <button onClick={handleClick}>Start</button>
        </>
    )
}

export default Start