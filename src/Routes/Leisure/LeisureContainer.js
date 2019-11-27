import React from "react";
import Pagination from "rc-pagination";
import { api } from "api";
import LeisurePresenter from "./LeisurePresenter";

export default class extends React.Component {
  state = {
    pageNo: 1,
    numOfRows: 12,
    totalCount: 1,
    leisure: null
  };

  componentDidMount() {
    this.getLeisure();
  }

  getLeisure = async () => {
    const leisureList = await api.get("areaBasedList", {
      params: {
        contentTypeId: 28,
        arrange: "P",
        pageNo: this.state.pageNo,
        numOfRows: this.state.numOfRows
      }
    });
    this.setState({
      leisure: leisureList.data.response.body.items.item,
      totalCount: leisureList.data.response.body.totalCount
    });
  };

  onChange = page => {
    this.setState({ pageNo: page }, () => {
      this.getLeisure();
    });
  };

  render() {
    console.log(this.state.leisure);
    return (
      <>
        <LeisurePresenter leisure={this.state.leisure} />
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
