import React from 'react';
import {MyContext} from './ContextSetter'
function ContextGetter1(props) {
    return (
        <div>
            <h1> Context Header 1</h1>
            <MyContext.Consumer>
                {
                    data => {
                        return <p> {data}</p>
                    }
                }

            </MyContext.Consumer>
        </div>
    );
}

export default ContextGetter1;