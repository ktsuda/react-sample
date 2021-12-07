import React, {Component} from "react";

export default class Product extends Component {
  render() {
    return (
      <li>
        Product #{this.props.id},
        {this.props.productName},
        {this.props.price},
        {this.props.quantity}
      </li>
    )
  }
}
