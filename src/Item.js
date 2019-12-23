import React, { Component } from 'react'
import './Item.css'

class Item extends Component {
    constructor(props){
        super(props);
        // need a state, which holds info about whether "edit"
        // button was clicked or not
        this.state = {
            isEditing: false,
            content: this.props.content
        };
        this.handleRemove = this.handleRemove.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleToggleCompletion = this.handleToggleCompletion.bind(this);
    }

    handleRemove(evt) {
        this.props.remove(this.props.id);
    }

    toggleForm() {
        this.setState({isEditing: !this.state.isEditing});
    }

    handleUpdate(evt){
        evt.preventDefault();
        //takes new content of a task and passes up to the parent
        this.props.updateItem(this.props.id, this.state.content);
        this.setState({isEditing: false});
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    handleToggleCompletion(evt){
        this.props.toggleCompletion(this.props.id);
        console.log("Executing handleToggleCompletion ");
    }

    render() {
        let result;
        let buttonsVar = (
            <div className="Todo-buttons">
                <button onClick={this.handleRemove}>
                    <i class='fas fa-trash'></i>
                </button>
                    {/* #v2 When using arrow function to pass a method removeItem() */}
                    {/* <button onClick={this.props.remove}>X</button> */}
                 <button onClick={this.toggleForm}>
                     <i class='fas fa-pen'></i>
                 </button>
            </div>
        )
        {/* depending on whether "edit" button is clicked,
                we will render a task content, or an editing form */}
        if(this.state.isEditing) {
            result = (
                <div className="Todo">
                    <form className="Todo-edit-form" onSubmit={this.handleUpdate}>
                        <input 
                            type="text" 
                            value={this.state.content} 
                            name="content"
                            onChange={this.handleChange}
                        />
                        <button>Save</button>
                    </form>
                </div>
            )
        } else {
            result = (
                <div className="Todo"> 
                    <li 
                        onClick={this.handleToggleCompletion} 
                        className={this.props.completed ? "Todo-task completed" : "Todo-task"}
                    >{this.props.content}</li>
                    {buttonsVar}
                </div>
            )
        }
        
        return result;
    }
}

export default Item;