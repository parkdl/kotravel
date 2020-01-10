import React from "react";
import ShoppingPresenter from "./ShoppingPresenter";
import axios from "axios";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shopping: [],
      pager: {}
    };
  }

  componentDidMount() {
    this.getShopping();
  }

  componentDidUpdate() {
    const params = new URLSearchParams(window.location.search);
    const page = parseInt(params.get("page"));
    if (this.state.pager.current !== page) this.getShopping();
  }

  getShopping = async () => {
    const params = new URLSearchParams(window.location.search);
    const page = parseInt(params.get("page")) || 1;
    const path = this.props.match.path;

    if (page !== this.state.pager.currentPage) {
      const shoppingList = await axios(`${path}?page=${page}`);

      this.setState({
        shopping: shoppingList.data.pageOfItems,
        pager: shoppingList.data.pager
      });
    }
  };

  render() {
    console.log(this.state.shopping);
    return <ShoppingPresenter shopping={this.state.shopping} pager={this.state.pager} />;
  }
}
