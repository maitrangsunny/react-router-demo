import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";
import NotFound from "./components/NotFound";

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
	return (
		<Route path ={to} exact = { activeOnlyWhenExact } children = {({ match})=>{
			var active  = match ? 'active xyz' : '';
			return (
				<li className={ active }>
					<NavLink exact to={to}>{ label }</NavLink>
				</li>
			)
		}}/>
	)
}

class Menu extends Component {	
  render() {
    return (
		<Router>				
            <nav className="navbar navbar-inverse">
					<ul className="nav navbar-nav">					
						<MenuLink label="Home" to="/" activeOnlyWhenExact={true}/>
						<MenuLink label="About" to="/about" activeOnlyWhenExact={false}/>					
					</ul>
			</nav>
		</Router>	
    );
  }
}

export default Menu;
