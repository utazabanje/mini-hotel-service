import React from "react";
import { Card, Button } from "react-bootstrap";

const GuestList = props => {
	return (
		<React.Fragment>
			<Card>
				<Card.Header as="h6">Hotel Guest</Card.Header>
				<Card.Body>
					<Card.Title>
						{props.name} {props.lastname}
					</Card.Title>
					<Card.Text>Email: {props.email}</Card.Text>
					<Card.Text>Address: {props.address}</Card.Text>
					<Card.Text>City: {props.city}</Card.Text>
					<Card.Text>Zip: {props.zip}</Card.Text>
          <Button
            onClick={props.onRemove}
            variant="danger">X</Button>
				</Card.Body>
			</Card>
		</React.Fragment>
	);
};

export default GuestList;
