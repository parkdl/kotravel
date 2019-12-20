import React from "react";
import TravelCoursePresenter from "./TravelCoursePresenter";
import axios from "axios";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      travelCourse: [],
      pager: {}
    };
  }

  componentDidMount() {
    this.getTravelCourse();
  }

  componentDidUpdate() {
    const params = new URLSearchParams(window.location.search);
    const page = parseInt(params.get("page"));
    if (this.state.pager.current !== page) this.getTravelCourse();
  }

  getTravelCourse = async () => {
    const params = new URLSearchParams(window.location.search);
    const page = parseInt(params.get("page")) || 1;

    if (page !== this.state.pager.currentPage) {
      const travelCourseList = await axios(`/travelCourse?page=${page}`);

      this.setState({
        travelCourse: travelCourseList.data.pageOfItems,
        pager: travelCourseList.data.pager
      });
    }
  };

  render() {
    console.log(this.state.travelCourse);
    return <TravelCoursePresenter travelCourse={this.state.travelCourse} pager={this.state.pager} />;
  }
}
