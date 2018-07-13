import React from "react";
import {Checkbox} from "@cdk-uip/react-checkbox";
import { TextField } from "@cdk-uip/react-text-field";

import { TextFieldIcon } from "@cdk-uip/react-text-field"


class ToDoListItem extends React.Component{
  

    render() {
        

        return (
            <span>
             
                    <Checkbox
                        checked={this.props.item.checked}
                        value={this.props.item.value}
                        onChange={e => this.props.updateCheck(this.props.index, e.target.checked)}
                    />
                
              
                <TextField
                    label="Your Task"
                    value={this.props.item.value}
                    disabled = { this.props.item.disabled}
                    onChange={e =>this.props.updateV(this.props.index, e.target.value)}
                   
                />
                <TextFieldIcon 
                    onClick={e => this.props.delete(this.props.index)}
                >
                        clear
                </TextFieldIcon>

          </span>
        );
    }
};


export default ToDoListItem;