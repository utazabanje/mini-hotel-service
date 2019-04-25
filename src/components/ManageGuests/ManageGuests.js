import React, { Component } from "react";
import Fire from "../../config/FirebaseLogin";
import { Button } from "react-bootstrap";

class ManageGuest extends Component {
	constructor(props) {
		super(props);

		this._isMounted = false;

		this.state = {
			guests: []
		};
	}

	componentDidMount = () => {
		this._isMounted = true;
		const guestsRef = Fire.database().ref("guests");

		guestsRef.on("value", snapshot => {
			let guests = snapshot.val();
			console.log(guests);
			let newGuestState = [];
			for (let guest in guests) {
				newGuestState.push({
					id: guest,
					name: guests[guest].name,
					lastname: guests[guest].lastname,
					email: guests[guest].email,
					address: guests[guest].address,
					city: guests[guest].city,
					zip: guests[guest].zip
				});
			}
			this._isMounted && this.setState({
				guests: newGuestState
			});
		});
	};

	componentWillUnmount = () => {
		this._isMounted = false;
	}

	logout = () => {
		Fire.auth().signOut();
	};

	render() {
		return (
			<div>
				<h1>Menage guest page</h1>

				<Button onClick={this.logout} variant="light">
					Log Out
				</Button>

				<div>
					{this.state.guests.map(guest => {
						return (
							<React.Fragment>
								<p>
									{guest.name} | {guest.id}
								</p>
								<p>
									{guest.lastname} | {guest.id}
								</p>
								<p>
									{guest.email} | {guest.id}
								</p>
								<p>
									{guest.address} | {guest.id}
								</p>
								<p>
									{guest.city} | {guest.id}
								</p>
								<p>
									{guest.zip} | {guest.id}
								</p>
							</React.Fragment>
						);
					})}
				</div>
			</div>
		);
	}
}

export default ManageGuest;
