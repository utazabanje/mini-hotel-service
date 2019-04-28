import React, { Component } from "react";
import { Form, Col, Button } from 'react-bootstrap';
import Fire from "../../config/FirebaseLogin";

class CheckIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      guests: [],
      currentName: '',
      currentLastName: '',
      currentEmail: '',
      currentAddress: '',
      currentCity: '',
      currentDate: Date.now(),
      currentZip: '',
    };
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  }
 
  handleSubmit = (e) => {
    e.preventDefault();

    const guestsRef = Fire.database().ref('guests');
    const guest = {
      name: this.state.currentName,
      lastname: this.state.currentLastName,
      email: this.state.currentEmail,
      address: this.state.currentAddress,
      city: this.state.currentCity,
      zip: this.state.currentZip,
      date: this.state.currentDate,
    }
    guestsRef.push(guest);
    
    this.setState({
      currentName: '',
      currentLastName: '',
      currentEmail: '',
      currentAddress: '',
      currentCity: '',
      currentDate: Date.now(),
      currentZip: '',
    });
  }

  render() {
    return (
      <div className="checkin-page">
        <h1 className="checkin-page-title">Check In</h1>

        <Form className="checkin-login-form"
          onSubmit={this.handleSubmit}>
          <Form.Row>
            <Form.Group as={Col} sm="12" md="6" controlId="validateName">
              <Form.Label>First Name</Form.Label>
              <Form.Control value={this.state.currentName} onChange={this.handleChange} name="currentName" type="text" placeholder="First Name" required/>
              <Form.Control.Feedback type="invalid">
                Please enter your name.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} sm="12" md="6" controlId="validateLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control value={this.state.currentLastName} onChange={this.handleChange} name="currentLastName" type="text" placeholder="Last Name" required/>
              <Form.Control.Feedback type="invalid">
                Please enter your last name.
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} sm="12" md="6" controlId="validateEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control value={this.state.currentEmail} onChange={this.handleChange} name="currentEmail" type="email" placeholder="Enter email" required/>
              <Form.Control.Feedback type="invalid">
                Please enter your email.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} sm="12" md="6" controlId="validateAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control value={this.state.currentAddress} onChange={this.handleChange} name="currentAddress" type="text" placeholder="1234 Main St" required/>
              <Form.Control.Feedback type="invalid">
                Please enter your address.
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} sm="12" md="6" controlId="validateCity">
              <Form.Label>City</Form.Label>
              <Form.Control value={this.state.currentCity} onChange={this.handleChange} name="currentCity" type="text" placeholder="City" required/>
              <Form.Control.Feedback type="invalid">
                Please enter your city.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} sm="12" md="6" controlId="validateZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control value={this.state.currentZip} onChange={this.handleChange} name="currentZip" type="number" placeholder="zip" required/>
              <Form.Control.Feedback type="invalid">
                Please enter your zip code.
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>

          <Button variant="light" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default CheckIn;
