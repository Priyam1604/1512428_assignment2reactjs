import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class ClassComponent2 extends PureComponent {


    render() {
        return (
            <div>
                <hr/>
                <p>I will show state here</p>
                <p>FirstName: {this.state.firstname}</p>
                <p>LastName: {this.state.lastname}</p>
                <button onClick={this.clickMe}>Click me</button>

            </div>
        );
    }
}

ClassComponent2.propTypes = {};

export default ClassComponent2;