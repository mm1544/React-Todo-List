import React, { Component } from 'react'

class NewItemForm extends Component {
    constructor(props) {
        super(props);
        this.state = { content: ""};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(evt) {
        evt.preventDefault();
        this.props.addItem(this.state);
        // resetting state to an empty string values
        this.setState({content: ""});
        
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor='content'>Task: </label>
                    <input 
                        type='text'
                        id='content'
                        name='content'
                        value={this.state.content}
                        onChange={this.handleChange}
                    />
                </div>
                <button>Add New Task</button>
            </form>
        )
    }
}

export default NewItemForm;