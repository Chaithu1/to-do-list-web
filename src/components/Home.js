import React from "react";
import { LayoutGrid, LayoutGridCell } from "@cdk-uip/react-layout-grid";
import {
  Card,
  CardHeader,
  CardTitle,
  CardSubtitle,
  CardText,
  CardActions,
  CardActionButton
} from "@cdk-uip/react-card";
import { FormattedMessage, FormattedHTMLMessage } from "react-intl";
import { LinkContainer } from "react-router-bootstrap";

const Home = () => (
  <LayoutGrid>
    <LayoutGridCell span={12}>
      <Card>
        <CardHeader>
          <CardTitle large>
            <FormattedMessage
              id="Card.title"
              defaultMessage="Welcome to React"
            />
          </CardTitle>
          <CardSubtitle>
            <FormattedMessage
              id="Card.subtitle"
              defaultMessage="With Material Design"
            />
          </CardSubtitle>
        </CardHeader>
        <CardText>
          <FormattedHTMLMessage
            id="Card.text"
            defaultMessage="To get started, edit <code>src/Home.js</code> and save to reload."
          />
        </CardText>
        <CardActions>
          <LinkContainer to="/sample" activeClassName="">
            <CardActionButton>
              <FormattedMessage
                id="Card.sample"
                defaultMessage="Redux sample page"
              />
            </CardActionButton>
          </LinkContainer>
          <LinkContainer to="/intl" activeClassName="">
            <CardActionButton>
              <FormattedMessage id="Card.intl" defaultMessage="Localisation" />
            </CardActionButton>
          </LinkContainer>
        </CardActions>
      </Card>
    </LayoutGridCell>
  </LayoutGrid>
);

export default Home;
