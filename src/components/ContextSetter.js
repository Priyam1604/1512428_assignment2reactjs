import React from 'react';
import ContextGetter1 from "./ContextGetter1";
import ContextGetter2 from "./ContextGetter2";

export const MyContext = React.createContext();
function ContextSetter(props) {



    return (
        <div>
            <MyContext.Provider value={"This is data from context setter"}>
                <ContextGetter1/>
                <ContextGetter2/>

            </MyContext.Provider>
        </div>

    );
}

export default ContextSetter;