import React from 'react';
import SecondComponent from "./secondComponent";

function Firstcomponent(props) {
    return (
        <div>
            <p>This is my first component</p>
            <p>This is my data from previous page</p>
            <p> name: {props.name}</p>
            <p> age: {props.age}</p>
            <form className={'form-control'}>
                <input placeholder={"What to input"}/>
            </form>
            <button className={'btn btn-primary'} onClick={props.clickbutton}>Click me</button>
            <SecondComponent/>
        </div>
    );
}

export default Firstcomponent;