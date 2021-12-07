import React, {Component} from "react";

export default class Product extends Component {
  state = {
    product: this.props.product,
  }

  render() {
    return (
      <div className="col-lg-6">
        <div className="card m-2">
          <div className="card-body">
            <div className="text-muted"># {this.state.product.id}</div>
            <h5 className="card-ttile">{this.state.product.productName}</h5>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">$ {this.state.product.price}</li>
            <li className="list-group-item">{this.state.product.quantity}</li>
          </ul>
        </div>
      </div>
    )
  }
}
