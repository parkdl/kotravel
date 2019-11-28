import React from "react";
import DetailPresenter from "./DetailPresenter";
import { api } from "../../api";

export default class extends React.Component {
  state = {
    detailCommon: null,
    detailIntro: null,
    detailInfo: null,
    detailImage: null
  };

  componentDidMount() {
    this.getDetailList();
  }

  getDetailList = async () => {
    const {
      match: {
        params: { id }
      }
    } = this.props;
    const common = await api.get("detailCommon", {
      params: {
        contentId: parseInt(id),
        defaultYN: "Y",
        addrinfoYN: "Y",
        overviewYN: "Y"
      }
    });
    const intro = await api.get("detailIntro", {
      params: {
        contentId: parseInt(id)
      }
    });
    this.setState({
      detailCommon: common.data.response.body.items.item,
      detailIntro: intro.data.response.body.items.item
    });
  };

  render() {
    console.log(this.props);
    return <DetailPresenter></DetailPresenter>;
  }
}
