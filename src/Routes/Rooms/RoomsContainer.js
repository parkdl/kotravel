import React from "react";
import Pagination from "rc-pagination";
import { api } from "api";
import RoomsPresenter from "./RoomsPresenter";

export default class extends React.Component {
  state = {
    pageNo: 1,
    numOfRows: 12,
    totalCount: 1,
    rooms: null
  };

  componentDidMount() {
    this.getRooms();
  }

  getRooms = async () => {
    const roomsList = await api.get("areaBasedList", {
      params: {
        contentTypeId: 32,
        arrange: "P",
        pageNo: this.state.pageNo,
        numOfRows: this.state.numOfRows
      }
    });
    this.setState({
      rooms: roomsList.data.response.body.items.item,
      totalCount: roomsList.data.response.body.totalCount
    });
  };

  onChange = page => {
    this.setState({ pageNo: page }, () => {
      this.getRooms();
    });
  };

  render() {
    console.log(this.state.rooms);
    return (
      <>
        <RoomsPresenter rooms={this.state.rooms} />
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
