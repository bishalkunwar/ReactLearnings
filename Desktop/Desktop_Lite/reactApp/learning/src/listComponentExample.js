import React from "react";
import ReactDOM from "react-dom";

function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) => < li > { number } < /li>);

        return ( <
            ul > { listItems } < /ul>;
        );


    };


    number = [1, 2, 3, 4, 5];
    ReactDOM.render( <
        NumberList numbers = { numbers }
        />, document.getElementById('root');
    );