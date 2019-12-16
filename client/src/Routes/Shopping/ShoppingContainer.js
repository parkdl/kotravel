import React from "react";
import Pagination from "rc-pagination";
import { api } from "api";
import ShoppingPresenter from "./ShoppingPresenter";

export default class extends React.Component {
  state = {
    pageNo: 1,
    numOfRows: 12,
    totalCount: 1,
    shopping: null
  };

  componentDidMount() {
    this.getShopping();
  }

  getShopping = async () => {
    const shoppingList = await api.get("areaBasedList", {
      params: {
        contentTypeId: 38,
        arrange: "P",
        pageNo: this.state.pageNo,
        numOfRows: this.state.numOfRows
      }
    });
    this.setState({
      shopping: shoppingList.data.response.body.items.item,
      totalCount: shoppingList.data.response.body.totalCount
    });
  };

  onChange = page => {
    this.setState({ pageNo: page }, () => {
      this.getShopping();
    });
  };

  render() {
    console.log(this.state.shopping);
    return (
      <>
        <ShoppingPresenter shopping={this.state.shopping} />
        <Pagination
          onChange={this.onChange}
          total={this.state.totalCount}
          current={this.state.pageNo}
          pageSize={this.state.numOfRows}
        ></Pagination>
      </>
    );
  }
}
