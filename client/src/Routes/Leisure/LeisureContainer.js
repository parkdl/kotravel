import React from "react";
import LeisurePresenter from "./LeisurePresenter";
import axios from "axios";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leisure: [],
      pager: {}
    };
  }

  componentDidMount() {
    this.getLeisure();
  }

  componentDidUpdate() {
    const params = new URLSearchParams(window.location.search);
    const page = parseInt(params.get("page"));
    if (this.state.pager.current !== page) this.getLeisure();
  }

  getLeisure = async () => {
    const params = new URLSearchParams(window.location.search);
    const page = parseInt(params.get("page")) || 1;

    if (page !== this.state.pager.currentPage) {
      const leisureList = await axios(`/leisure?page=${page}`);

      this.setState({
        leisure: leisureList.data.pageOfItems,
        pager: leisureList.data.pager
      });
    }
  };

  render() {
    console.log(this.state.leisure);
    return <LeisurePresenter leisure={this.state.leisure} pager={this.state.pager} />;
  }
}
