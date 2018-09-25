import React, { Component } from 'react';

class ProductItem extends Component {
  render() {
	var { match } = this.props;
	var name = match.params.name;
    return (
		<div>
			Detail : {name}
		</div>
    );
  }
}
export default ProductItem;
