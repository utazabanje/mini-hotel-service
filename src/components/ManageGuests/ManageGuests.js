import React, { Component } from "react";
import Fire from "../../config/FirebaseLogin";
import { Button, Spinner } from "react-bootstrap";
import GuestList from "./ManageGuestList";
import DatePicker from "react-datepicker";
import moment from 'moment';

import "react-datepicker/dist/react-datepicker.css";

class ManageGuest extends Component {
	constructor(props) {
		super(props);

		this._isMounted = false;

		this.state = {
			guests: [],
			startDate: new Date(),
			filterByDate: false,
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
			newGuestState.sort((a, b) => b.date - a.date)
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

	onHandleFilter = () => {
		this.setState({
			filterByDate: true,
		})
	}

	onHandleCancelFilter = () => {
		this.setState({
			filterByDate: false,
			// clear datepicker value
		})
	}

	render() {
		let guests = this.state.guests;

		if(this.state.filterByDate) {
			guests = guests.filter(guest => moment(guest.date).format('YYYY-MM-DD') === moment(this.state.startDate).format('YYYY-MM-DD'));

		}
		

		return (
			<div className="manage-guests-page">
				{this._isMounted ? null : (
					<Spinner animation="border" variant="light" />
				)}

				<Button className="logout-btn" onClick={this.logout} variant="light">
					Log Out
				</Button>
				<h1 className="manage-guests-title">Manage guest page</h1>

				<div className="datepicker-filter-wrapper">
					<p className="datepicker-title">Pick a date:</p>
					<DatePicker
						selected={this.state.startDate}
						onChange={this.handleChange}
					/>

					<div className="filter-wrapper">
						<Button onClick={this.onHandleFilter} className={this.state.filterByDate ? 'applied' : 'btn-apply-filter' } variant="primary">Apply Filter</Button>
						<Button onClick={this.onHandleCancelFilter} variant="danger btn-show-all">Show all guests</Button>
					</div>
				</div>

				<div className="card-wrapper">
					{guests.map((guest, idx) => {
						
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
