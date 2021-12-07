import React, {Component} from "react";

export default class Product extends Component {
  render() {
    return (
      <div className="col-lg-6">
        <div className="card m-2">
          <div className="card-body">
            <div className="text-muted"># {this.props.id}</div>
            <h5 className="card-ttile">{this.props.productName}</h5>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">$ {this.props.price}</li>
            <li className="list-group-item">{this.props.quantity}</li>
          </ul>
        </div>
      </div>
    )
  }
}
