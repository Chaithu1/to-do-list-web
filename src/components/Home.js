import React from "react";
import { LayoutGrid, LayoutGridCell } from "@cdk-uip/react-layout-grid";
import {
  Card,
  CardHeader,
  CardTitle,
  // CardSubtitle,
  CardText


} from "@cdk-uip/react-card";

import ToDoList from "./ToDoList";





const Home = () => (
  <LayoutGrid>
    <LayoutGridCell span={12}>
      <Card>
        <CardHeader>
          <CardTitle large>
          To Do List: 
          </CardTitle>
        </CardHeader>

        <CardText>
         <ToDoList/>
        </CardText>      
      </Card>
    </LayoutGridCell>
  </LayoutGrid>
  
);

export default Home;
