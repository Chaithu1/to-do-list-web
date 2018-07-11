import React from "react";
import ToDoListItem from "./ToDoListItem";
import { Button } from "@cdk-uip/react-button";
// import { TextFieldIcon } from "@cdk-uip/react-text-field"

class ToDoList extends React.Component {

    constructor(props){
        super(props);
        var items = [];
        items.push({
            index: 0, 
            value: "",
            checked: false,
            disabled: false
        });
        // console.log(items);
        this.state = {
            items: items
        }
        this.onValueChange = this.onValueChange.bind(this);
        this.onChecked = this.onChecked.bind(this);
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    
    onValueChange(index, newValue){
        let itm = this.state.items;
        itm[index] = {index: index, value: newValue, checked: false, disabled: false};
        this.setState({items: itm})
    }

    onChecked(index, newChecked, value){
        // console.log(newChecked);
        let itm = this.state.items;
        itm[index] = {index: index, checked: newChecked, disabled: newChecked, value: value};
        this.setState({items: itm})
    }

    addItem(){
        let itm = this.state.items;
        itm.push({
            index: itm.length, 
            value: "",
            checked: false,
            disabled: false
        })
        // console.log(itm);
        // itm[index] = {index: index, checked: newChecked, disabled: newChecked, value: value};
        this.setState({items: itm})
    }

    deleteItem(index){
       
        let itm = this.state.items;
        itm.splice(index,1);

        this.setState({items: itm})
    }

    render(){
        return(
            <div>
                <Button className = "add-btn" raised 
                onClick={e =>{
                    this.addItem();
                } } >
                    Add Task
                </Button>
                {this.state.items.map((item,index) => {
                    return (
                        <div key = {index}> 
                            <ToDoListItem index = {index} item = {item} updateV = {this.onValueChange} updateCheck ={this.onChecked} delete={this.deleteItem}   />
                          
                        </div>);
                })}
              
            </div>
        );
    }
};

export default ToDoList;