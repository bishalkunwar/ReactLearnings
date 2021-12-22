import React from "react";
import ReactDOM from "react-dom";


// const numbers = ['hello', 'world', 'whats', 'up', 'buddy'];
// const listItems = numbers.map((numbers) =>
//     <
//     li > { numbers } < /li>
// );

// ReactDOM.render( <
//     ul > { listItems } < /ul>,
//     document.getElementById('root')
// );

// function Blog(props) {

//     const header = ( <
//         ul > {
//             props.posts.map((post) =>
//                 <
//                 li key = { post.id } > { post.title } <
//                 /li>
//             )
//         } <
//         /ul>

//     );

//     const content = props.posts.map((post) =>
//         <
//         div key = { post.id } >
//         <
//         h3 > { post.title } < /h3> <
//         h2 > { post.content } < /h2> < /
//         div >


//     );


//     return ( <
//         div > { header } <
//         hr / > { content } <
//         /div>
//     );


// };

// const posts = [
//     { id: '1', title: 'hello world', content: 'this is a hello world try.' },
//     { id: '2', title: 'hello sarkar', content: 'this is a hello sarkar try.' }
// ];

// ReactDOM.render( <
//     Blog posts = { posts }
//     />, document.getElementById('root')
// );

import { render } from "ejs";


class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    };

    handleSubmit(event) {
        alert('A name is submitted: ' + this.state.value);
        event.preventDefault();
    };



    render() {
        return ( <
            form onSubmit = { this.handleSubmit } >
            <
            label >
            Name: < input type = "text"
            value = { this.state.value }
            onChange = { this.handleChange } > < /input> < /
            label > <
            input type = "submit"
            value = "submit" > < /input> < /
            form >
        );
    };


};

ReactDOM.render( <
    NameForm / > , document.getElementById('root')
);