import React, { useState } from 'react';

const [correct, setCorrect] = useState(0);
const [incorrect, setIncorrect] = useState(0);

const handleCorrect = (id) => {
    if (id === c) {
        setCorrect(correct+1)   
    } else {
        setIncorrect(incorrect+1)
    }
    
}

export default handleCorrect;