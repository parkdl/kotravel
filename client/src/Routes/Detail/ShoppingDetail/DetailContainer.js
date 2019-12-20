import React from "react";
import axios from "axios";
import DetailPresenter from "./DetailPresenter";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      common: null,
      image: null,
      info: null,
      intro: null,
      loading: true
    };
  }

  componentDidMount = async () => {
    try {
      await this.getDetail();
    } finally {
      this.setState({ loading: false });
    }
  };

  getDetail = async () => {
    const {
      location: { pathname }
    } = this.props;

    await axios(pathname).then(response =>
      this.setState({
        common: response.data.common,
        image: response.data.image,
        info: response.data.info,
        intro: response.data.intro
      })
    );
  };

  render() {
    const { common, image, info, intro, loading } = this.state;
    console.log(this.state);
    return (
      <DetailPresenter loading={loading} common={common} image={image} info={info} intro={intro} />
    );
  }
}
