import React, { useState } from 'react';

const ButtonHandler = ({ title, items, initialState }) => {
    const [state, setState] = useState(initialState);

    const handleClick = (event) => {
        const text = event.target.innerText;
        if (state.includes(text)) {
            setState((prevState) => prevState.filter(item => item !== text));
        } else {
            setState((prevState) => [...prevState, text]);
        }
    };

    const val = document.getElementsByClassName("result")[0];
    return (
        <div className="section">
            <h2>{title}</h2>
            {items.map((item, index) => (
                <button
                    key={index}
                    onClick={handleClick}
                    disabled={state.includes(item)}
                >
                    {item}
                </button>
            ))}
            {/*{val.innerHTML += <p>{title}: {state.join(', ')}</p>}*/}
            <div className="result">
                <p>{title}: {state.join(', ')}</p>
            </div>
        </div>
    );
};

export default ButtonHandler;
