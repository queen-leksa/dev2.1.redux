import {Component} from "react";
import {Card, Button, Badge} from "react-bootstrap";
import {HandThumbsDown, HandThumbsUp, Person} from "react-bootstrap-icons";

export default class Vizitka extends Component {
    render() {
        return (
            <Card>
                <Card.Body>
                    <div className="display-1"><Person/></div>
                    <Card.Title>Person</Card.Title>
                </Card.Body>
                <Card.Footer>
                    <Button variant="outline-danger"><HandThumbsDown/></Button>
                    <Badge className="text-dark">0</Badge>
                    <Button variant="outline-success"><HandThumbsUp/></Button>
                </Card.Footer>
            </Card>
        )
    }
}
