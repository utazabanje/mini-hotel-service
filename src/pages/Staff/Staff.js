import React, { Component } from "react";
import StaffLogin from "../../components/StaffLogin/StaffLogin";
import ManageGuest from "../../components/ManageGuests/ManageGuests";
import Fire from "../../config/FirebaseLogin";

class Staff extends Component {
	constructor(props) {
		super(props);

		this.state = {
			user: {}
		};
	}

	componentDidMount() {
    this.authListener();
  }

	authListener = () => {
    Fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null })
      }
    })
  }

	render() {
		return (
			<div className="staff-page">
				{this.state.user ? <ManageGuest /> : <StaffLogin />}
			</div>
		);
	}
}

export default Staff;
