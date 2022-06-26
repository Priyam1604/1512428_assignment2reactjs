import React from 'react';
import {MyContext} from "./ContextSetter";

function ContextGetter2(props) {
    return (
        <div>
            <h1> Context Getter 2</h1>
            <MyContext.Consumer>
            <p>{data => {
                return(<p>{data} </p>)
            }}</p>
            </MyContext.Consumer>
        </div>
    );
}

export default ContextGetter2;