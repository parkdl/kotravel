import React from "react";
import TrafficPresenter from "./TrafficPresenter";
import axios from "axios";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      traffic: [],
      pager: {}
    };
  }

  componentDidMount() {
    this.getTraffic();
  }

  componentDidUpdate() {
    const params = new URLSearchParams(window.location.search);
    const page = parseInt(params.get("page"));
    if (this.state.pager.current !== page) this.getTraffic();
  }

  getTraffic = async () => {
    const params = new URLSearchParams(window.location.search);
    const page = parseInt(params.get("page")) || 1;
    const path = this.props.match.path;

    if (page !== this.state.pager.currentPage) {
      const trafficList = await axios(`${path}?page=${page}`);

      this.setState({
        traffic: trafficList.data.pageOfItems,
        pager: trafficList.data.pager
      });
    }
  };

  render() {
    console.log(this.props);
    return <TrafficPresenter traffic={this.state.traffic} pager={this.state.pager} />;
  }
}
