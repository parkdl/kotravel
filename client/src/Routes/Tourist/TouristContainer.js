import React from "react";
import TouristPresenter from "./TouristPresenter";
import axios from "axios";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tourist: [],
      pager: {}
    };
  }

  componentDidMount() {
    this.getTourist();
  }

  /*componentDidUpdate() {
    const params = new URLSearchParams(window.location.search);
    const page = parseInt(params.get("page"));
    if(this.state.pager.current !== page)
    this.getTourist();
  }*/

  getTourist = async () => {
    const params = new URLSearchParams(window.location.search);
    const page = parseInt(params.get("page")) || 1;

    if (page !== this.state.pager.currentPage) {
      const touristList = await axios(`/tourist?page=${page}`);

      this.setState({
        tourist: touristList.data.pageOfItems,
        pager: touristList.data.pager
      });
    }
  };

  render() {
    console.log(this.state.tourist);
    return <TouristPresenter tourist={this.state.tourist} pager={this.state.pager} />;
  }
}
