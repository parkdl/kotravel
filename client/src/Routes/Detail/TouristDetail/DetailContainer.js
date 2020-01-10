import React from "react";
import axios from "axios";
import DetailPresenter from "./DetailPresenter";

export default class extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname }
    } = props;
    this.state = {
      common: null,
      image: null,
      info: null,
      intro: null,
      isKor: pathname.includes("/kor/"),
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
    console.log(pathname);
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
    const { common, image, info, intro, loading, isKor } = this.state;
    console.log(this.state);

    return (
      <DetailPresenter
        loading={loading}
        common={common}
        image={image}
        info={info}
        intro={intro}
        kor={isKor}
      />
    );
  }
}
