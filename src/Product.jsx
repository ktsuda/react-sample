import React, { Component } from "react";

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
            <li className="list-group-item">
              <span className="float-start fw-bold">Unit price:</span>
              <span className="float-end">USD {this.state.product.price}</span>
            </li>
          </ul>
          <div className="card-footer">
            <div className="float-start">
              <span className="fw-bold me-3">Quantity:</span>
              <span className="badge bg-secondary p-3 me-3">{this.state.product.quantity}</span>
              <div className="btn-group">
                <button className="btn btn-outline-success">+</button>
                <button className="btn btn-outline-success">-</button>
              </div>
            </div>
            <div className="float-end">{this.props.children}</div>
          </div>
        </div>
      </div>
    )
  }
}
