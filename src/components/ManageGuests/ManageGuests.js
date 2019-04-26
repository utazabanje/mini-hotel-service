import React, { Component } from "react";
import Fire from "../../config/FirebaseLogin";
import { Button, Spinner } from "react-bootstrap";
import GuestList from "./ManageGuestList";

class ManageGuest extends Component {
	constructor(props) {
		super(props);

		this._isMounted = false;

		this.state = {
			guests: [],
		};
	}

	componentDidMount = () => {
		this._isMounted = true;
		const guestsRef = Fire.database().ref("guests");

		guestsRef.on("value", snapshot => {
			let guests = snapshot.val();
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

	removeGuest(guestId) {
		const guestRef = Fire.database().ref(`/guests/${guestId}`);
		guestRef.remove();
	}

	logout = () => {
		Fire.auth().signOut();
	};

	render() {
		return (
			<div className="manage-guests-page">
				<h1 className="manage-guests-title">Manage guest page</h1>

					<Button onClick={this.logout} variant="light">
						Log Out
					</Button>

				
					{this._isMounted ? null : 
						<Spinner animation="border" variant="light" />
					}
					<div className="card-wrapper">
					{this.state.guests.map((guest, idx) => {
						return (
							<React.Fragment key={idx}>
								<GuestList
									name={guest.name}
									lastname={guest.lastname}
									email={guest.email}
									address={guest.address}
									city={guest.city}
									zip={guest.zip}
									onRemove={() => this.removeGuest(guest.id)}
								/>
							</React.Fragment>
						);
					})}
					<div className="clearfix"></div>
					</div>
			</div>
		);
	}
}

export default ManageGuest;
