import React from 'react';

const Spinner = (props) => {
    return (
        <div className="ui active dimmer">
            <div className="ui big text loader">
                {props.message}
                {/* {props.message || 'Loading'} - Another way with or expression*/}
            </div>
        </div>
    );
};

Spinner.defaultProps = {
    message: 'Loading...'
};

export default Spinner;