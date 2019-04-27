import React, { Component } from "react";
import Fire from "../../config/FirebaseLogin";
import { Button, Spinner } from "react-bootstrap";
import GuestList from "./ManageGuestList";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

class ManageGuest extends Component {
	constructor(props) {
		super(props);

		this._isMounted = false;

		this.state = {
			guests: [],
			startDate: new Date()
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
					zip: guests[guest].zip,
					date: guests[guest].date
				});
			}
			this._isMounted &&
				this.setState({
					guests: newGuestState
				});
		});
	};

	componentWillUnmount = () => {
		this._isMounted = false;
	};

	removeGuest(guestId) {
		const guestRef = Fire.database().ref(`/guests/${guestId}`);
		guestRef.remove();
	}

	logout = () => {
		Fire.auth().signOut();
	};

	handleChange = date => {
		this.setState({
			startDate: date
		});
	};

	render() {
		return (
			<div className="manage-guests-page">
				<Button onClick={this.logout} variant="light">
					Log Out
				</Button>
				<h1 className="manage-guests-title">Manage guest page</h1>

				{this._isMounted ? null : (
					<Spinner animation="border" variant="light" />
				)}

				<p className="datepicker-title">Pick a date:</p>
				<DatePicker
					selected={this.state.startDate}
					onChange={this.handleChange}
				/>

				<div className="card-wrapper">
					{this.state.guests.filter(guest => guest.date <= this.state.startDate).map((guest, idx) => {

							const dateOptions = {
								year: "numeric",
								month: "2-digit",
								day: "numeric"
							};

							const date = guest.date;
							const dateRef = date && new Date(parseInt(date)).toLocaleString("en-US", dateOptions);

							return (
								<React.Fragment key={idx}>
									<GuestList
										name={guest.name}
										lastname={guest.lastname}
										email={guest.email}
										address={guest.address}
										city={guest.city}
										zip={guest.zip}
										date={dateRef}
										onRemove={() => this.removeGuest(guest.id)}
									/>
								</React.Fragment>
							);
						})}
					<div className="clearfix" />
				</div>
			</div>
		);
	}
}

export default ManageGuest;
