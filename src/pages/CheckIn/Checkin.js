import React, { Component } from "react";
import { Form, Col, Button } from 'react-bootstrap';
import Fire from "../../config/FirebaseLogin";

class CheckIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentName: '',
      currentLastName: '',
      currentEmail: '',
      currentAddress: '',
      currentCity: '',
      // currentDate: new Date,
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
      // date: this.state.currentDate,
    }
    guestsRef.push(guest);
    console.log(guest);
    this.setState({
      currentName: '',
      currentLastName: '',
      currentEmail: '',
      currentAddress: '',
      currentCity: '',
      // currentDate: new Date,
      currentZip: '',
    });
  }

  render() {
    return (
      <div className="checkin-page">
        <h1>CheckIn page</h1>

        <Form className="checkin-login-form" >
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>First Name</Form.Label>
              <Form.Control value={this.state.currentName} onChange={this.handleChange} name="currentName" type="text" placeholder="First Name" />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Last Name</Form.Label>
              <Form.Control value={this.state.currentLastName} onChange={this.handleChange} name="currentLastName" type="text" placeholder="Last Name" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control value={this.state.currentEmail} onChange={this.handleChange} name="currentEmail" type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control value={this.state.currentAddress} onChange={this.handleChange} name="currentAddress" type="text" placeholder="1234 Main St" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control value={this.state.currentCity} onChange={this.handleChange} name="currentCity" type="text" placeholder="City" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control value={this.state.currentZip} onChange={this.handleChange} name="currentZip" type="text" placeholder="zip" />
            </Form.Group>
          </Form.Row>

          <Button onClick={this.handleSubmit} variant="light" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default CheckIn;
