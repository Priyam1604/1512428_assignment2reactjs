import React, {useState} from 'react';

function UseStateExample(props) {

    const [counter] = useState(0);
    return (
        <div>
            <h2> {counter}</h2>
            <button>+</button>
            <button>-</button>
        </div>
    );
}

export default UseStateExample;