import React, {Fragment} from 'react';

function ListComponent(props) {
    return (
        <div>
            <ul>
                <li>List 1</li>
                <li>List 2</li>
                <Fragment />
            <li>List 5</li>
            </ul>
        </div>
    );
}

export default ListComponent;