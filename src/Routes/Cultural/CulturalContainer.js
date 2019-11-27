import React from "react";
import Pagination from "rc-pagination";
import { api } from "api";
import CulturalPresenter from "./CulturalPresenter";

export default class extends React.Component {
  state = {
    pageNo: 1,
    numOfRows: 12,
    totalCount: 1,
    cultaral: null
  };

  componentDidMount() {
    this.getCultural();
  }

  getCultural = async () => {
    const culturalList = await api.get("areaBasedList", {
      params: {
        contentTypeId: 14,
        arrange: "P",
        pageNo: this.state.pageNo,
        numOfRows: this.state.numOfRows
      }
    });
    this.setState({
      cultural: culturalList.data.response.body.items.item,
      totalCount: culturalList.data.response.body.totalCount
    });
  };

  onChange = page => {
    this.setState({ pageNo: page }, () => {
      this.getCultural();
    });
  };

  render() {
    console.log(this.state.cultural);
    return (
      <>
        <CulturalPresenter cultural={this.state.cultural} />
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
