import React, { Component } from 'react';
import { Prompt } from 'react-router-dom';

class About extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isCheck: false
		}
	}
	onClick = (check) => {
		this.setState({
			isCheck: check
		});
	}
  	render() {
		return (
		<div className>
			This is a about page!        
			
			<button type="button" class="btn btn-danger" onClick={()=>{this.onClick(false)}}>button1</button>
			<button type="button" class="btn btn-default" onClick={()=>{this.onClick(true)}}>button2</button>
			<Prompt
				when={this.state.isCheck}
				//message="Are you sure you want to leave?"
				message = {location => (`Are you sure ${location.pathname}`)}
			/>
		</div>
		);	
  }
}
export default About;
