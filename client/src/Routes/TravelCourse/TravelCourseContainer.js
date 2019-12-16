import React from "react";
import Pagination from "rc-pagination";
import { api } from "api";
import TravelCoursePresenter from "./TravelCoursePresenter";

export default class extends React.Component {
  state = {
    pageNo: 1,
    numOfRows: 12,
    totalCount: 1,
    travelCourse: null
  };

  componentDidMount() {
    this.getTravelCourse();
  }

  getTravelCourse = async () => {
    const travelCourseList = await api.get("areaBasedList", {
      params: {
        contentTypeId: 25,
        arrange: "P",
        pageNo: this.state.pageNo,
        numOfRows: this.state.numOfRows
      }
    });
    this.setState({
      travelCourse: travelCourseList.data.response.body.items.item,
      totalCount: travelCourseList.data.response.body.totalCount
    });
  };

  onChange = page => {
    this.setState({ pageNo: page }, () => {
      this.getTravelCourse();
    });
  };

  render() {
    console.log(this.state.travelCourse);
    return (
      <>
        <TravelCoursePresenter travelCourse={this.state.travelCourse} />
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
