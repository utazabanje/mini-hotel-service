import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import Fire from "../../config/FirebaseLogin";

class StaffLogin extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			password: ""
		};
	}

	handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	login = event => {
		event.preventDefault();

		Fire
			.auth()
			.signInWithEmailAndPassword(this.state.email, this.state.password)
			.then(res => {})
			.catch(err => {
				console.log(err);
			});
	};

	render() {
		return (
			<div className="staff-login-page">
				<h2 className="staff-login-page-title">Staff Login</h2>
				<p className="staff-login-page-subtitle">
					login as staff member so you can manage guests
				</p>

				<Form className="staff-login-form">
					<Form.Group controlId="formGroupEmail">
						<Form.Label>Email address</Form.Label>
						<Form.Control
							onChange={this.handleChange}
							name="email"
							type="email"
							placeholder="Enter email"
						/>
					</Form.Group>
					<Form.Group controlId="formGroupPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control
							onChange={this.handleChange}
							name="password"
							type="password"
							placeholder="Password"
						/>
					</Form.Group>

					<Button onClick={this.login} type="submit" variant="light">
						Log In
					</Button>
				</Form>
			</div>
		);
	}
}

export default StaffLogin;
