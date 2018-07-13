import React from "react";
import ToDoListItem from "./ToDoListItem";
import { Button } from "@cdk-uip/react-button";


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
        itm[index].value = newValue;
        this.setState({items: itm})
    }

    onChecked(index, newChecked){

        let itm = this.state.items;
        itm[index].checked = newChecked;
        itm[index].disabled = newChecked;
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
                onClick={e =>this.addItem()} 
                >
                    Add Task
                </Button>
                {this.state.items.map((item,index) => (<div key = {index}>
                <ToDoListItem index = {index} item = {item} updateV = {this.onValueChange} updateCheck ={this.onChecked} delete={this.deleteItem}   />
                </div>))}
                </div>
        );
    }
};

export default ToDoList;