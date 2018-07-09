import React from "react";
import {Checkbox} from "@cdk-uip/react-checkbox";
import { TextField } from "@cdk-uip/react-text-field";
// import { TextFieldIcon } from "@cdk-uip/react-text-field"


class ToDoListItem extends React.Component{
    constructor (props){
        super(props);
        this.state = { 
            value: "" , 
            checked: false,
            disabled: false 
        };
    }

    render() {
        

        return (
            <span>
             
                    <Checkbox
                        checked={this.state.checked}
                        onChange={e => this.setState({ 
                            checked: e.target.checked,
                            disabled: e.target.checked
                        })}
                    />
                
              
                <TextField
                    label="Your Task"
                    value={this.state.value}
                    disabled = { this.state.disabled}
                    onChange={e => this.setState({ value: e.target.value })}
                    // trailingIcon={
                    
                    // }
                />
                {/* <TextFieldIcon onClick={(e) => {this.removeItem(item)}}>
                        clear
                </TextFieldIcon> */}

          </span>
        );
    }
};


export default ToDoListItem;