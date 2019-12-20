import React from "react";
import FoodPresenter from "./FoodPresenter";
import axios from "axios";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      food: [],
      pager: {}
    };
  }

  componentDidMount() {
    this.getFood();
  }

  componentDidUpdate() {
    const params = new URLSearchParams(window.location.search);
    const page = parseInt(params.get("page"));
    if (this.state.pager.current !== page) this.getFood();
  }

  getFood = async () => {
    const params = new URLSearchParams(window.location.search);
    const page = parseInt(params.get("page")) || 1;

    if (page !== this.state.pager.currentPage) {
      const foodList = await axios(`/food?page=${page}`);

      this.setState({
        food: foodList.data.pageOfItems,
        pager: foodList.data.pager
      });
    }
  };

  render() {
    console.log(this.state.food);
    return <FoodPresenter food={this.state.food} pager={this.state.pager} />;
  }
}
