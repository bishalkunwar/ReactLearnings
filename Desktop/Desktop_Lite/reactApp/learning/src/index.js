import React from 'react';
import ReactDOM from 'react-dom';
// simport App from './App';
import './index.css';
//import App from './App';
//import dateToday from './dateToday';
//import reportWebVitals from './reportWebVitals';


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


// function Welcome(props) {
//     return <h1 > Hello, guys { props.name } { props.status } { props.name1 } < /h1>;
// };


// Example of learning props and passing different parameters.

// function App() {
//     return ( <
//         div > < Welcome name = "MRS. simoli"
//         status = "Fucks"
//         name1 = "Mr. Khaatey Aakash" / >
//         <
//         Welcome name = "Jytoi thapa magar"
//         status = "fucks"
//         name1 = "Who?, maybe her new mate at PO" / > < /div>
//     );
// };



// ReactDOM.render( <
//     App / > ,
//     document.getElementById('root')
// );



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

//reportWebVitals();


// Example of Components State and Lifecycle.

// function Clock(props) {
//     return ( <
//         div >
//         <
//         h1 > Hello World! < /h1> <
//         h2 > It is { props.date.toLocaleTimeString() }. < /h2> < /
//         div >
//     );
// };

// function tick() {
//     ReactDOM.render( < Clock date = { new Date() }
//         />, document.getElementById('root'))
//     };

//     setInterval(tick, 1000);

// Example of using state of a components on a real time example of code snippest.

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    };

    componentWillUnmount() {
        clearInterval(this.timerID);
    };

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return ( <
            div >
            <
            h1 > Hello World! < /h1> <
            h2 > It is { this.state.date.toLocaleTimeString() }. < /h2> < /
            div >
        );
    };
};



ReactDOM.render( < Clock /
    >
    , document.getElementById('root'));