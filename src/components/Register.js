import * as React from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import * as $ from 'jquery';
const BASE_URL = 'https://baas.kinvey.com/';
const APP_KEY = 'kid_BJBvw973m';
const APP_SECRET = '0124023985794985884ec19bb56eb471';
const AUTH_HEADERS = { 'Authorization': "Basic " + btoa(APP_KEY + ":" + APP_SECRET) };

export class Register extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleChange = this.handleChange.bind(this);
        this.registerUser = this.registerUser.bind(this);
        this.handleAjaxError = this.handleAjaxError.bind(this);
        this.signInUser = this.signInUser.bind(this);

        this.state = {
            value: '',
            passwordValue: '',
        };
    }

    getValidationState() {
        const length = this.state.value.length;
        if (length > 10) return 'success';
        else if (length > 5) return 'warning';
        else if (length > 0) return 'error';
        return null;
    }

    handleChange(e, value) {
        debugger;
        if (value === "pass") {
            this.setState({ passwordValue: e.target.value });
        } else {
            this.setState({ value: e.target.value });
        }
    }
    render() {
        return (
            <div>
                <form>
                    <FormGroup
                        controlId="formBasicText"
                        validationState={this.getValidationState()}
                    >
                        <ControlLabel>Username</ControlLabel>
                        <FormControl
                            type="text"
                            value={this.state.value}
                            placeholder="Enter username"
                            onChange={(e) => this.handleChange(e, "username")}
                        />
                        <FormControl.Feedback />
                        <ControlLabel>Password</ControlLabel>
                        <FormControl
                            type="password"
                            value={this.state.passwordValue}
                            placeholder="Enter password"
                            onChange={(e) => this.handleChange(e, "pass")}
                        />
                        <FormControl.Feedback />
                        <ControlLabel>Repeat Password</ControlLabel>
                        <FormControl
                            type="password"
                          
                            placeholder="Repeat password"
                            
                        />
                        <FormControl.Feedback />
                        <Button bsStyle="default" id={"submitButton"}
                            onClick={() => this.registerUser(this.state.value,
                                this.state.passwordValue)}>Register</Button>
                    </FormGroup>
                </form>
            </div>
        );
    }

    registerUser(username, password) {
        $.ajax({
            method: 'POST',
            url: BASE_URL + 'user/' + APP_KEY + '/',
            headers: AUTH_HEADERS,
            data: { username, password }
        }).then((res) => {
            this.signInUser(res, 'Registration successful.');
        }).catch(this.handleAjaxError);
    }

    handleAjaxError(response) {
        let errorMsg = JSON.stringify(response);
        if (response.readyState === 0)
            errorMsg = "Cannot connect due to network error.";
        if (response.responseJSON && response.responseJSON.description)
            errorMsg = response.responseJSON.description;
        console.log(errorMsg);
    }

    signInUser(res, message) {
        sessionStorage.setItem('username', res.username);
        sessionStorage.setItem('authToken', res._kmd.authtoken);
        sessionStorage.setItem('userId', res._id);
    }
}