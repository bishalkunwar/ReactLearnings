// list and keys basics converting list to the map.

import React from "react";
import ReactDOM from "react-dom";

const strings = ['hello', 'world', 'what', 'the', 'fuck'];
const newStrings = strings.map((strings) => < li > { strings } < /li>);

        ReactDOM.render( <
            newStrings / > , document.getElementById('root')
        );