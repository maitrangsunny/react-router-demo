import React, { Component } from 'react';
import {NavLink, Route} from 'react-router-dom';
import ProductItem from './ProductItem';

class Products extends Component {	
  	render() {
		var list = [
			{
				id: 1,
				name: "IPhone 6S Plus",
				price: "580",
				slug: "iphone"
			},
			{
				id: 2,
				name: "SamSung Note 9",
				price: "1000",
				slug: "samsung"
			},
			{
				id: 3,
				name: "Oppo F1",
				price: "300",
				slug: "oppo"
			},
		]
		var {match, location} = this.props;
		var url = match.url;
		var result = list.map((product, index)=>{
			return(
				//  push params to url
				<NavLink to = {`${url}/${product.slug}`} key={index} >
					<li className="list-group-item">{product.id} - {product.name} - {product.price}</li>
				</NavLink>
			)
		});
		console.log(location);


		return (
			<div className="container">
				<h1>List</h1>				
				<div className="row">					
					<ul className="list-group">
						{result}
					</ul>
				</div>				
				{/* get param from url */}
				<div className="row">
					<Route path="/products/:name" component = {ProductItem}>
					</Route>
				</div>
			</div>
		);
  	}
}
export default Products;
