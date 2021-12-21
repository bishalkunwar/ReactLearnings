import React from 'react';
import ReactDOM from 'react-dom';
// simport App from './App';
import './index.css';
//import App from './App';
//import dateToday from './dateToday';
import reportWebVitals from './reportWebVitals';


// function formatName(user) {
//     return user.firstName + ' ' + user.lastName;
// }

// const user = {
//     firstName: "Bishal",
//     lastName: "Kunwar"
// };

// const element = ( <
//     h1 > Hello, { formatName(user) }! < /h1> 
// );


function Welcome(props) {
    return <h1 > Hello, guys { props.name } { props.status } { props.name1 } < /h1>;
};



function App() {
    return ( <
        div > < Welcome name = "MRS. simoli"
        status = "Fucks"
        name1 = "Mr. Khaatey Aakash" / >
        <
        Welcome name = "Jytoi thapa magar"
        status = "fucks"
        name1 = "Who?, maybe her new mate at PO" / > < /div>
    );
};

ReactDOM.render( <
    App / > ,
    document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();