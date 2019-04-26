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
					<Card.Text>Email: <span>{props.email}</span></Card.Text>
					<Card.Text>Address: <span>{props.address}</span></Card.Text>
					<Card.Text>City: <span>{props.city}</span></Card.Text>
					<Card.Text>Zip: <span>{props.zip}</span></Card.Text>
          <Card.Text>Check In Date: <span>{props.date}</span></Card.Text>
          <Button
            onClick={props.onRemove}
            variant="danger">X</Button>
				</Card.Body>
			</Card>
		</React.Fragment>
	);
};

export default GuestList;
