import React, { Component } from 'react'
import Item from './Item'
import NewItemForm from './NewItemForm'
// librarry to generate IDs (Node module)
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
        this.updateItem = this.updateItem.bind(this);
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

    // 
    updateItem(id, updatedText) {
        const updatedTodos = this.state.items.map(
            item => {
                if(item.id === id) {
                    // will return existing item, but with updated task 
                    // (it will overwrite the task)
                    return {...item, content: updatedText}
                }
                return item; // otherwise it will return unchanged "item"
            });
            // we make the new arry and set it tobe "items" array...
            this.setState({items: updatedTodos}); 
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

                        key={item.id} 
                        id={item.id} 
                        content={item.content} 
                        updateItem = {this.updateItem}
                    />
                ))}
            </div> 
        )
    }
    
    render() {
        return (
            <div>
                <h2>Todo List</h2>
                <NewItemForm addItem={this.addItem} />
                <ul>
                    {this.renderItems()}
                </ul>
            </div>

        )
    }
}

export default ItemList;