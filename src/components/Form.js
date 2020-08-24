import React from 'react';

export default class Form extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            nameValue: '',
            description: 'some initial text',
            fruit: 'coconut'
        }
    }

    handleChange = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        alert(`A name was submitted: ${this.state.nameValue}, ${this.state.description}, ${this.state.fruit}`);
    }

    render () {
        return (
            <form className="form" onSubmit={this.handleSubmit}>
                <label>
                    Name
                    <input
                        name="nameValue"
                        type="text"
                        value={this.state.nameValue}
                        onChange={this.handleChange}
                    />
                </label>
                <input
                    type="submit"
                    value="Submit"
                />
                <textarea
                    name="description"
                    value={this.state.description}
                    onChange={this.handleChange}
                />
                <select
                    name="fruit"
                    value={this.state.fruit}
                    onChange={this.handleChange}
                >
                    <option value="grapefruit">Grapefruit</option>
                    <option value="lime">Lime</option>
                    <option value="coconut">Coconut</option>
                    <option value="mango">Mango</option>
                </select>
            </form>
        );
    }
}