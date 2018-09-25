import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Menu from './components/Menu';
import routers from './Routers';

class App extends Component {	
  	render() {
		return (
			<Router>
				<div className="App">		
					<Menu/>					
					<Switch>
						{this.showContentMenu(routers)}
					</Switch>
				</div>	
			</Router>	
		);
	  }
	  	showContentMenu = (route) => {
			var result = null;
			if(route.length > 0) {
				result = route.map((item, index)=>{
					return (
						<Route key= {index} path={item.path} exact={item.exact} component = { item.main }/>
					)
				})
			}
			return result; 
	  }
}
export default App;
