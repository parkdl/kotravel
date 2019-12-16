import React from "react";
import Pagination from "rc-pagination";
import { api } from "api";

import FoodPresenter from "./FoodPresenter";

export default class extends React.Component {
  state = {
    pageNo: 1,
    numOfRows: 12,
    totalCount: 1,
    food: null
  };

  componentDidMount() {
    this.getFood();
  }

  getFood = async () => {
    const foodList = await api.get("areaBasedList", {
      params: {
        contentTypeId: 39,
        arrange: "P",
        pageNo: this.state.pageNo,
        numOfRows: this.state.numOfRows
      }
    });
    this.setState({
      food: foodList.data.response.body.items.item,
      totalCount: foodList.data.response.body.totalCount
    });
  };

  onChange = page => {
    this.setState({ pageNo: page }, () => {
      this.getFood();
    });
  };

  render() {
    console.log(this.state.food);
    return (
      <>
        <FoodPresenter food={this.state.food} />
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
