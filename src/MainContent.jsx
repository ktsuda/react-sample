import React, {Component} from "react";

export class MainContent extends Component {
  state = {
    pageTitle: "Customers",
    customersCount: 5,
  };

  render() {
    return (
      <React.StrictMode>
        <h4 className="border-bottom m-1 p-1">
        {this.state.pageTitle}
        <span className="badge bg-secondary m-2">
          {this.state.customersCount}
        </span>
      <button className="btn btn-info" onClick={this.onRefreshClick}>
        Refresh
      </button>
      </h4>
      </React.StrictMode>
    );
  };

  onRefreshClick = () => {
    this.setState({
      customersCount: 7,
    })
  }
};

export default MainContent;
