//Example of lifting state at real time with the example of temprature and condition to boil water check

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p > The water would boil. < /p>
    }
    return <p > The water would not boil. < /p>
}


class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = { temperature: '' };
    }

    handleChange(e) {
        this.setState({ temprature: e.target.value });
    };

    render() {
        const temperature = this.state.temperature;

        return ( <
            fieldset >
            <
            legend > Enter temperature in Celsius: < /legend> <
            input value = { temperature }
            onChange = { this.handleChange } >
            <
            /input> <
            BoilingVerdict celsius = { parseFloat(temperature) }
            /> < /
            fieldset >
        );
    }

};


ReactDOM.render( <
    Calculator / > , document.getElementById('root');
);