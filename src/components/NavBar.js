import * as React from 'react';
import { Navbar, NavItem, MenuItem, NavDropdown, Nav } from 'react-bootstrap';
import { Timer } from './Timer';
import {PrimaryButton} from 'office-ui-fabric-react';

export class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          seconds: '00',
          minutes: '20',
          isTestStarted: false
        }
    
        this.secondsOnStop = 0;
        this.secondsRemaining = this.secondsRemaining;
        this.intervalHandle = this.intervalHandle;
        this.startCountDown = this.startCountDown.bind(this);
        this.stopCountDown = this.stopCountDown.bind(this);
        this.tick = this.tick.bind(this);
    }
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">React-Bootstrap</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem eventKey={1} href="/register">
                       Register
                    </NavItem>
                    <NavItem eventKey={3} href="/login">
                       Login
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                        Logout
                    </NavItem>
                    <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                        <MenuItem eventKey={3.1}>Action</MenuItem>
                        <MenuItem eventKey={3.2}>Another action</MenuItem>
                        <MenuItem eventKey={3.3}>Something else here</MenuItem>
                    </NavDropdown>
                    <NavItem onClick={this.startCountDown} disabled={this.state.isTestStarted}
                    className={"startButton"} href="/test">
                        Start Test
                    </NavItem>
                    <NavItem onClick={this.stopCountDown} disabled={!this.state.isTestStarted}
                    className={"stopButton"}>
                        Stop Test
                    </NavItem>
                    <NavItem>
                        <Timer minutes={this.state.minutes} seconds={this.state.seconds} />
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }

    tick() {
        var min = Math.floor(this.secondsRemaining / 60);
        var sec = this.secondsRemaining - (min * 60);
        this.setState({
          minutes: min,
          seconds: sec
        })
        if (sec < 10) {
          this.setState({
            seconds: "0" + this.state.seconds,
          })
        }
        if (min < 10) {
          this.setState({
            value: "0" + min,
          })
        }
        if (min === 0 & sec === 0) {
          clearInterval(this.intervalHandle);
        }
        this.secondsRemaining--
      }
      startCountDown() {
        this.setState({
          isTestStarted: true,
        });
        this.intervalHandle = setInterval(this.tick, 1000);
        let time = this.state.minutes;
        this.secondsRemaining = time * 60 + this.secondsOnStop;
      }
    
      stopCountDown() {
        this.setState({
          isTestStarted: false,
        });
        var min = Math.floor(this.secondsRemaining / 60);
        this.secondsOnStop = this.secondsRemaining - (min * 60);
        clearInterval(this.intervalHandle);
      }
}