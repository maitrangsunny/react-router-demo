import React, { Component } from 'react';
import { Route, Link} from 'react-router-dom';

const menus = [
	{
		label: "Home",
		to: "/",
		exact: true
	},
	{
		label: "Product List",
		to: "/products",
		exact: false
	},
	{
		label: "About",
		to: "/about",
		exact: false
	},
	{
		label: "Login",
		to: "/login",
		exact: false
	}
]

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
	return (
		<Route path ={to} exact = { activeOnlyWhenExact } children = {({ match})=>{
			var active  = match ? 'active xyz' : '';
			return (
				<li className={ active }>
					<Link exact to={to}>{ label }</Link>
				</li>
			)
		}}/>
	)
}

class Menu extends Component {	
	showMenu = (menus) => {
		var result = null;
		if(menus.length > 0) {
			result = menus.map((menu,index)=>{
				return (
					<MenuLink key = {index} label={menu.label} to={menu.to} activeOnlyWhenExact={menu.exact}/>	
				)
			})
		}
		return result;
	}
  	render() {
		return (		
			<nav className="navbar navbar-inverse">
				<ul className="nav navbar-nav">		
					{this.showMenu(menus)}			
				</ul>
			</nav>
		);
  }
}

export default Menu;
