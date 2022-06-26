import React from 'react';
import {useLocation} from "react-router-dom";

function DetailPost(props) {

    const  location = useLocation()
    const data= location.state;
    return (
        <div>
            <p>Title: {data.title}</p>
            <p>Body: {data.body}</p>

        </div>
    );
}

export default DetailPost;