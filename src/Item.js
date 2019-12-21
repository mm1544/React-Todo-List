import React, { Component } from 'react'

class Item extends Component {
    constructor(props){
        super(props);
        this.handleRemove = this.handleRemove.bind(this);
    }

    handleRemove(evt) {
        this.props.remove(this.props.id);
    }

    render() {
        return (
            <div>
                <div className="Item">{this.props.content}</div>
                <button onClick={this.handleRemove}>X</button>
                {/* #v2 When using arrow function to pass a method removeItem() */}
                {/* <button onClick={this.props.remove}>X</button> */}
            </div>
        )
    }
}

export default Item;