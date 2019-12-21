import React, { Component } from 'react'
import Item from './Item'
import NewItemForm from './NewItemForm'
// librarry to generate IDs
import uuid from 'uuid/v4';

class ItemList extends Component {
    constructor(props){
        super(props);
        this.state = { 
            items: []
        };
        this.addItem = this.addItem.bind(this);
        // when using arrow f-ion, don't need this binding
        this.removeItem = this.removeItem.bind(this);
    }

    addItem(item){
        let newItem = {...item, id: uuid()};
        this.setState(st => ({
            items: [...st.items, newItem] //  "existing 'boxes' == [...st.boxes] " + newBox
        }));

        // another legit version of this would be:
        // this.setState({
        //     boxes: [...this.state.boxes, newBox]
        // });
    }
    
    removeItem(itemId) {
        this.setState(st => ({
            // removing boxes that NOT contain passed boxId
            items: st.items.filter(item => item.id !== itemId)
        }));
    }

    renderItems() {
        return (
            <div>
                {this.state.items.map(item => (
                    <Item
                        remove={this.removeItem}

                        // #v2 passing removeBox() method using arrow function,
                        // and creating a NEW function inline:
                        // remove={() => this.removeBox(box.id)}

                        id={item.id} 
                        key={item.id} 
                        content={item.content} 
                    />
                ))}
            </div> 
        )
    }
    
    render() {
        return (
            <div className="ItemList">
                <h2>Todo List</h2>
                <NewItemForm addItem={this.addItem} />
                {this.renderItems()}
            </div>

        )
    }
}

export default ItemList;