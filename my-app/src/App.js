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

class App extends Component {	
  render() {
    return (
		<Router>
			<div className="App">					
				
				<Switch>
					<Route path="/" exact component = { Home }/>
					<Route path='/about' component = { About }/>
					<Route component = { NotFound }/>
				</Switch>
			</div>	
		</Router>	
    );
  }
}

export default App;
