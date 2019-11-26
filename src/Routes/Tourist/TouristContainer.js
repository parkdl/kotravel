/*import React from "react";
import { touristApi } from "api";
import TouristPresenter from "./TouristPresenter";

export default class extends React.Component {
  state = {
    tourist: null,
    loading: true,
    error: false
  };

  async componentDidMount() {
    try {
      const tourist = await touristApi.tourist();
      this.setState({
        tourist
      });
      console.log(tourist);
    } catch {
      this.setState({
        error: "Can't find movie information."
      });
    } finally {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    const { button, tourist, error, loading } = this.state;
    return <TouristPresenter button={button} tourist={tourist} error={error} loading={loading} />;
  }
}*/

import React from "react";
import Pagination from "rc-pagination";
import { api } from "api";
import TouristPresenter from "./TouristPresenter";

export default class extends React.Component {
  state = {
    pageNo: 1,
    numOfRows: 12,
    totalCount: 1,
    tourist: null
  };

  componentDidMount() {
    this.getTourist();
  }

  getTourist = async () => {
    const touristList = await api.get("areaBasedList", {
      params: {
        contentTypeId: 12,
        arrange: "P",
        pageNo: this.state.pageNo,
        numOfRows: this.state.numOfRows
      }
    });
    this.setState({
      tourist: touristList.data.response.body.items.item,
      totalCount: touristList.data.response.body.totalCount
    });
  };

  onChange = page => {
    this.setState({ pageNo: page }, () => {
      this.getTourist();
    });
  };

  render() {
    console.log(this.state.tourist);
    return (
      <>
        <TouristPresenter tourist={this.state.tourist} />
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
