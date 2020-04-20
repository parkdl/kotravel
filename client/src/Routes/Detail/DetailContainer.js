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
      lang: "",
      loading: true,
      path: null,
      type: null,
      area: null,
      category: null,
      code: null,
      weatherCode: null,
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
      location: { pathname },
    } = this.props;

    await axios(pathname).then((response) =>
      this.setState({
        common: response.data.common,
        image: response.data.image,
        info: response.data.info,
        intro: response.data.intro,
        lang: response.data.allItems.lang,
        path: response.data.allItems.typePath,
        type: response.data.allItems.typeArray,
        area: response.data.allItems.areaArray,
        category: response.data.allItems.categoryArray,
        code: response.data.allItems.areaCode,
        weatherCode: response.data.allItems.weather,
      })
    );
  };

  render() {
    const {
      common,
      image,
      info,
      intro,
      loading,
      lang,
      path,
      type,
      code,
      area,
      category,
      weatherCode,
    } = this.state;
    console.log(this.state);
    return (
      <DetailPresenter
        lang={lang}
        loading={loading}
        common={common}
        image={image}
        info={info}
        intro={intro}
        path={path}
        type={type}
        area={area}
        code={code}
        category={category}
        weatherCode={weatherCode}
      />
    );
  }
}
