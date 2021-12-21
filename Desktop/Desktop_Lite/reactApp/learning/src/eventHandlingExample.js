// This is the example of event handling in js, if you want to try this simply render it there to the index js.

import React, { Component } from "react";
import ReactDOM from 'react-dom';

class toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true }

        // The above binding is necessary to make 'this' work in the callback.
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return ( <
            button onClick = { this.handleClick } > { this.state.isToggleOn ? 'ON' : 'OFF' } <
            /button>
        );
    }
}

ReactDOM.render( <
    toggle / > , document.getElementById('root')
);

export default toggle;