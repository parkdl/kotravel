import React from "react";
import { touristApi } from "api";
import TouristPresenter from "./TouristPresenter";

export default class extends React.Component {
  state = {
    tourist: null,
    loading: true
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
    const { tourist, error, loading } = this.state;
    return <TouristPresenter tourist={tourist} error={error} loading={loading} />;
  }
}
