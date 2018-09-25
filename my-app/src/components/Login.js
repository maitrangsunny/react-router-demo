import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			txtusername: "",
			txtpassword: ""
		}
	}
	onChangeInput = (event) =>{
		var target = event.target;
		var name = target.name;
		var value = target.type === "checkbox"? target.checked : target.value;
		this.setState({
			[name] : value
		})
	}
	onSubmitForm = (event) => {
		event.preventDefault();
		var {txtusername,txtpassword} = this.state;
		if(txtusername === "admin" && txtpassword==="123") {
			localStorage.setItem("Info",JSON.stringify({
				username: txtusername,
				password: txtpassword
			}))
		}
	}
  	render() {
		var {txtusername,txtpassword} = this.state;
		var logging = localStorage.getItem("Info");
		var { location } = this.props;
		if(logging !== null) {
			return <Redirect from= "" to={
				{
					pathname : '/products',
					state :	{
						from: location  //get info location of login
					}
				}
			}/>
		}
		return (
		<div className>			
			<form role="form" onSubmit={this.onSubmitForm}>
				<legend>Login</legend>				
				<div className="form-group">
					<label for="">Username: </label>
					<input type="text" 
							className="form-control" 
							id="" placeholder="username" 
							name="txtusername" 
							onChange={this.onChangeInput}/>
				</div>
				<div className="form-group">
					<label for="">Password: </label>
					<input type="password" 
						className="form-control" 
						id="" placeholder="password" 
						name="txtpassword" 
						onChange={this.onChangeInput}/>
				</div>
				<button type="submit" className="btn btn-primary">Submit</button>
			</form>
		</div>
		);	
  }
}
export default Login;
