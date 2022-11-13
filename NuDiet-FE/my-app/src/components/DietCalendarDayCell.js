

import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    startSelection: PropTypes.func.isRequired,
};


class DietCalendarDayCell extends React.Component {
    handleMouseDown = (e) => {
        console.log("mouse doowwwnnn",e)
        if (e.button === 0) {
            this.props.startSelection();
        }
    }

    render() {
        return (
            <div onMouseDown={this.handleMouseDown} className="dayCell" role="presentation">
                &nbsp;
            </div>);
    }
}

DietCalendarDayCell.propTypes = propTypes;
export default DietCalendarDayCell;