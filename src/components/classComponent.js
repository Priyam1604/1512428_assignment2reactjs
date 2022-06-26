import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class ClassComponent extends PureComponent {
    render() {
        return (
            <div>
                <p>This is my class component</p>
            </div>
        );
    }
}

ClassComponent.propTypes = {};

export default ClassComponent;