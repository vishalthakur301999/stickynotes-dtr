import React, {Component} from 'react';
import {Card, Grid, Text} from "@geist-ui/core";

class CardComponent extends Component {
    render() {
        return (
            <Grid justify="center">
                <Card shadow width="400px">
                    <Text h4 my={0}>{this.props.title}</Text>
                    <Text>{this.props.description}</Text>
                    <Card.Footer>Load Time - {this.props.time}</Card.Footer>
                </Card>
            </Grid>
        );
    }
}

export default CardComponent;
