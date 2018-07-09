import React from "react";
import ToDoListItem from "./ToDoListItem";
import { Button } from "@cdk-uip/react-button";
import { TextFieldIcon } from "@cdk-uip/react-text-field"

class ToDoList extends React.Component {

    constructor(props){
        super(props);
        // const items = [<ToDoListItem/> ];

        this.state = {
        items: [<ToDoListItem/> ]
       
         
        };
    }

    addItem(e){
        
        e.preventDefault();
        const newItem = <ToDoListItem/>;
        this.setState({
            items: [...this.state.items, newItem],
            
        });
    }

    render(){
       
        return(
            
            <div>
                <Button className = "add-btn" raised 
                onClick={(e) => {this.addItem(e)}} >
                    Add Task
                </Button>
                {this.state.items.map((items,index) => {
                    return (
                        <div key = {index}> 
                            {items}  
                            <TextFieldIcon 
                                onClick={() => {
                                    this.setState(state => ({
                                        items: state.items.filter((item, i) => i !== index)
                                    }));
                                }}
                             
                                >
                            clear
                            </TextFieldIcon>
                        </div>);
                })}
              
            </div>
        );
    }
};

export default ToDoList;