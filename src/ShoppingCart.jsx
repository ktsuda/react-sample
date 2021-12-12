import React, { Component } from "react";
import Product from "./Product";

export default class ShoppingCart extends Component {
  constructor(props) {
    // console.log('constructor - ShoppingCart')
    super(props)

    this.state = {
      products: []
    }
  }

  render() {
    // console.log('render - ShoppingCart')
    return (
      <React.StrictMode>
        <h4 className="m-1 p-2 border-bottom">Shopping Cart</h4>
        <div className="row">
          {this.state.products.map((prod) => {
            return (
              <Product key={prod.id}
                product={prod}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                onDelete={this.handleDelete}
              >
                <button className="btn btn-primary">Buy Now</button>
              </Product>
            )
          })}
        </div>
      </React.StrictMode>
    )
  }

  componentDidMount = async () => {
    // console.log('componentDidMount - ShoppingCart')
    var resp = await fetch("http://localhost:5000/products", { method: "GET" })
    var prods = await resp.json()
    this.setState({ products: prods })
  }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log('componentDidUpdate - ShoppingCart',
  //     prevProps, prevState, this.props, this.state)
  // }

  // componentWillUnmount() {
  //   console.log('componentWillUnmount - ShoppingCart')
  // }

  // componentDidCatch(error, info) {
  //   console.log('componentDidCatch - ShoppingCart')
  //   console.log(error, info)
  //   localStorage.lastError = `${error}\n${JSON.stringify(info)}`
  // }

  handleIncrement = (prod, maxValue) => {
    let allProducts = [...this.state.products] // copy the array
    let index = allProducts.indexOf(prod)
    if (allProducts[index].quantity < maxValue) {
      allProducts[index].quantity++
    }
    this.setState({ products: allProducts })
  }

  handleDecrement = (prod, minValue) => {
    let allProducts = [...this.state.products] // copy the array
    let index = allProducts.indexOf(prod)
    if (allProducts[index].quantity > minValue) {
      allProducts[index].quantity--
    }
    this.setState({ products: allProducts })
  }

  handleDelete = (prod) => {
    let allProducts = [...this.state.products] // copy the array
    let index = allProducts.indexOf(prod)
    allProducts.splice(index, 1)
    this.setState({ products: allProducts })
  }
}
