import React, { Component } from "react"

export class CustomersList extends Component {
  state = {
    pageTitle: "Customers",
    customersCount: 0,
    customers: [
      { id: 1, photo: "https://picsum.photos/id/1010/60", name: "Scott", phone: "123-456", address: { city: "New Delhi" } },
      { id: 2, photo: "https://picsum.photos/id/1011/60", name: "Jones", phone: "982-014", address: { city: "New York" } },
      { id: 3, photo: "https://picsum.photos/id/1012/60", name: "Allen", phone: "889-921", address: { city: "New Jersy" } },
      { id: 4, photo: "https://picsum.photos/id/1013/60", name: "James", phone: "", address: { city: "London" } },
      { id: 5, photo: "https://picsum.photos/id/1014/60", name: "John", phone: "", address: { city: "Tokyo" } },
    ],
  }

  render() {
    return (
      <React.StrictMode>
        <h4 className="border-bottom m-1 p-2">
          {this.state.pageTitle}
          <span className="ms-2">
            {this.state.customersCount}
          </span>
          <button className="btn btn-info pt-0 pb-0 ms-2" onClick={this.onRefreshClick}>
            Refresh
          </button>
        </h4>

        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Photo</th>
              <th>Customer Name</th>
              <th>Phone</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {this.getCustomerRow()}
          </tbody>
        </table>
      </React.StrictMode>
    )
  }

  onRefreshClick = () => {
    this.setState({
      customersCount: this.state.customers.length,
    })
  }

  getPhoneToRender = (phone) => {
    if (phone) {
      return phone
    } else {
      return <div className="bg-warning p-2 text-center">No Phone</div>
    }
  }

  getCustomerRow = () => {
    return (
      this.state.customers.map((cust, index) => {
        return (
          <tr key={cust.id}>
            <td>{cust.id}</td>
            <td>
              <img src={cust.photo} alt={cust.name} />
              <button className="btn btn-sm btn-secondary" onClick={() => {
                this.onChangePictureClick(cust, index)
              }}>Change Picture</button>
            </td>
            <td>{cust.name}</td>
            <td>{this.getPhoneToRender(cust.phone)}</td>
            <td>{cust.address.city}</td>
          </tr>
        )
      })
    )
  }

  onChangePictureClick = (_, index) => {
    var custArr = this.state.customers
    custArr[index].photo = "https://picsum.photos/id/104/60"
    this.setState(custArr)
  }
}

export default CustomersList
