import React from "react";
import PropTypes from "prop-types";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";
import { Nav, NavItem } from "reactstrap";
import AboutUs from "./pages/AboutUs";
import LearnMore from "./pages/LearnMore";
import Home from "./pages/Home";

class App extends React.Component {
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route,
    } = this.props;

    return (
      <Router>
        <h1>This is a React Component</h1>
        {logged_in && (
          <div>
            <a href={sign_out_route}>Sign Out</a>
          </div>
        )}
        {!logged_in && (
          <div>
            <a href={sign_in_route}>Sign In</a>
          </div>
        )}
        <Nav>
          <NavItem>
            <NavLink to="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/about">About Us</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/learn">Learn More</NavLink>
          </NavItem>
        </Nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={AboutUs} />
          <Route path="/learn" component={LearnMore} />
        </Switch>
      </Router>
    );
  }
}

export default App;
