import React from 'react';

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

function BoilingMessage(props) {
    if (props.celsius >= 100) {
        return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
}

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

class TemperatureInput extends React.Component {
    render() {
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input
                    name={scale}
                    value={temperature}
                    onChange={this.props.onChange}
                />
            </fieldset>
        );
    }
}

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            temperature: '',
            scale: 'c'
        };
    }

    handleChange = (e) => {
        this.setState({
            temperature: e.target.value,
            scale: e.target.name,
        });
    }

    handleChange = (e) => {
        this.setState({
            temperature: e.target.value,
            scale: e.target.name,
        });
    }

    render() {
        const temperature = this.state.temperature;
        const scale = this.state.scale;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
        return (
            <>
                <TemperatureInput
                    temperature={celsius}
                    scale="c"
                    onChange={this.handleChange}
                />
                <TemperatureInput
                    temperature={fahrenheit}
                    scale="f"
                    onChange={this.handleChange}
                />
                <BoilingMessage celsius={parseFloat(temperature)}/>
            </>
        );
    }
}

export default Calculator;