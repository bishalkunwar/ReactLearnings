// Example of state and lifecycle, just simply copy and paste it over the index.js or extend this method and call it through index file.


function Clock(props) {
    return ( <
        div >
        <
        h1 > Hello World! < /h1> <
        h2 > It is { props.date.toLocaleTimeString() }. < /h2> < /
        div >
    );
};

function tick() {
    ReactDOM.render( < Clock date = { new Date() }
        />, document.getElementById('root'))
    };

    setInterval(tick, 1000);