function Blog(props) {

    const header = ( <
        ul > {
            props.posts.map((post) =>
                <
                li key = { post.id } > { post.title } <
                /li>
            )
        } <
        /ul>

    );

    const content = props.posts.map((post) =>
        <
        div key = { post.id } >
        <
        h3 > { post.title } < /h3> <
        h2 > { post.content } < /h2> < /
        div >


    );


    return ( <
        div > { header } <
        hr / > { content } <
        /div>
    );


};

const posts = [
    { id: '1', title: 'hello world', content: 'this is a hello world try.' },
    { id: '2', title: 'hello sarkar', content: 'this is a hello sarkar try.' }
];

ReactDOM.render( <
    Blog posts = { posts }
    />, document.getElementById('root')
);