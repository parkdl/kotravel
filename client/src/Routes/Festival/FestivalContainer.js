import React from "react";
import FestivalPresenter from "./FestivalPresenter";
import axios from "axios";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      festival: [],
      pager: {}
    };
  }

  componentDidMount() {
    this.getFestival();
  }

  componentDidUpdate() {
    const params = new URLSearchParams(window.location.search);
    const page = parseInt(params.get("page"));
    if (this.state.pager.current !== page) this.getFestival();
  }

  getFestival = async () => {
    const params = new URLSearchParams(window.location.search);
    const page = parseInt(params.get("page")) || 1;
    const path = this.props.match.path;

    if (page !== this.state.pager.currentPage) {
      const festivalList = await axios(`${path}?page=${page}`);

      this.setState({
        festival: festivalList.data.pageOfItems,
        pager: festivalList.data.pager
      });
    }
  };

  render() {
    console.log(this.state.festival);
    return <FestivalPresenter festival={this.state.festival} pager={this.state.pager} />;
  }
}
