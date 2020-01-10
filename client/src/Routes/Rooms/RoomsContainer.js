import React from "react";
import RoomsPresenter from "./RoomsPresenter";
import axios from "axios";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [],
      pager: {}
    };
  }

  componentDidMount() {
    this.getRooms();
  }

  componentDidUpdate() {
    const params = new URLSearchParams(window.location.search);
    const page = parseInt(params.get("page"));
    if (this.state.pager.current !== page) this.getRooms();
  }

  getRooms = async () => {
    const params = new URLSearchParams(window.location.search);
    const page = parseInt(params.get("page")) || 1;
    const path = this.props.match.path;

    if (page !== this.state.pager.currentPage) {
      const roomsList = await axios(`${path}?page=${page}`);

      this.setState({
        rooms: roomsList.data.pageOfItems,
        pager: roomsList.data.pager
      });
    }
  };

  render() {
    console.log(this.state.rooms);
    return <RoomsPresenter rooms={this.state.rooms} pager={this.state.pager} />;
  }
}
