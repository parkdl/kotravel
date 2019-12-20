import React from "react";
import axios from "axios";
import CulturalPresenter from "./CulturalPresenter";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cultural: [],
      pager: {}
    };
  }

  componentDidMount() {
    this.getCultural();
  }

  componentDidUpdate() {
    const params = new URLSearchParams(window.location.search);
    const page = parseInt(params.get("page"));
    if (this.state.pager.current !== page) this.getCultural();
  }

  getCultural = async () => {
    const params = new URLSearchParams(window.location.search);
    const page = parseInt(params.get("page")) || 1;

    if (page !== this.state.pager.currentPage) {
      const culturalList = await axios(`/cultural?page=${page}`);

      this.setState({
        cultural: culturalList.data.pageOfItems,
        pager: culturalList.data.pager
      });
    }
  };

  render() {
    console.log(this.state.cultural);
    return <CulturalPresenter cultural={this.state.cultural} pager={this.state.pager} />;
  }
}
