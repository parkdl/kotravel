import React from "react";
import Pagination from "rc-pagination";
import { api } from "api";

import FestivalPresenter from "./FestivalPresenter";

export default class extends React.Component {
  state = {
    pageNo: 1,
    numOfRows: 12,
    totalCount: 1,
    festival: null
  };

  componentDidMount() {
    this.getFestival();
  }

  getFestival = async () => {
    const festivalList = await api.get("areaBasedList", {
      params: {
        contentTypeId: 15,
        arrange: "P",
        pageNo: this.state.pageNo,
        numOfRows: this.state.numOfRows
      }
    });
    this.setState({
      festival: festivalList.data.response.body.items.item,
      totalCount: festivalList.data.response.body.totalCount
    });
  };

  onChange = page => {
    this.setState({ pageNo: page }, () => {
      this.getFestival();
    });
  };

  render() {
    console.log(this.state.festival);
    return (
      <>
        <FestivalPresenter festival={this.state.festival} />
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
