import React from "react";
import HomePresenter from "./HomePresenter";
import Axios from "axios";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: "",
      code: null,
      type: null,
      area: null,
      category: null,
      loading: true
    };
  }

  componentDidUpdate = async () => {
    const {
      location: { pathname }
    } = this.props;

    if (this.state.lang !== pathname) {
      try {
        await this.getHome();
      } finally {
        this.setState({
          loading: false
        });
      }
    }
  };

  componentDidMount = async () => {
    try {
      await this.getHome();
    } finally {
      this.setState({
        loading: false
      });
    }
  };

  getHome = async () => {
    const {
      location: { pathname }
    } = this.props;

    if (pathname === "/" || pathname === "/kor") {
      const homeDatas = await Axios("/kor");
      this.setState({
        code: homeDatas.data.areaCode,
        type: homeDatas.data.korType,
        area: homeDatas.data.areaArray,
        category: homeDatas.data.categoryArray,
        lang: pathname
      });
    } else {
      const homeDatas = await Axios(`${pathname}`);
      this.setState({
        code: homeDatas.data.areaCode,
        type: homeDatas.data.mulType,
        area: homeDatas.data.areaArray,
        category: homeDatas.data.categoryArray,
        lang: pathname
      });
    }
  };

  render() {
    const {
      location: { pathname }
    } = this.props;

    const { lang, code, type, area, category, loading } = this.state;
    return (
      <HomePresenter
        lang={lang}
        pathname={pathname}
        code={code}
        type={type}
        area={area}
        category={category}
        loading={loading}
      />
    );
  }
}
