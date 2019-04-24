import React, { Component } from "react";
import fire from '../../config/FirebaseLogin';
import MenageGuest from '../ManageGuests/ManageGuests'
import { Form, Button } from 'react-bootstrap';

class StaffLogin extends Component {
  constructor(props) {
    super(props);

    this.state = {
			user: {},
			email: '',
			password: '',
		};
	}

	componentDidMount = () => {
	
	}


	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	onSubmitForm = (event) => {
		event.preventDefault();

		
	}

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
							<Form.Control onChange={this.handleChange} name="email" type="email" placeholder="Enter email" />
						</Form.Group>
						<Form.Group controlId="formGroupPassword">
							<Form.Label>Password</Form.Label>
							<Form.Control onChange={this.handleChange} name="password" type="password" placeholder="Password" />
						</Form.Group>

						<Button onClick={this.onSubmitForm} type="submit" variant="light">Log In</Button>
					</Form>
			</div>
    );
  }
}

export default StaffLogin;
