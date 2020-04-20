import React from "react";
import AreaPresenter from "./AreaPresenter";
import Axios from "axios";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      areaData: [],
      pager: {},
      lang: "",
      areaCode: "",
      addedType: "",
      areaTitle: "",
      code: null,
      type: null,
      area: null,
      category: null,
      loading: true,
    };
  }

  componentDidMount = async () => {
    try {
      await this.getAreaData();
    } finally {
      this.setState({ loading: false });
    }
  };

  componentDidUpdate = async () => {
    const params = new URLSearchParams(window.location.search);
    const page = parseInt(params.get("page"));
    const area = parseInt(params.get("area"));
    const type = parseInt(params.get("type"));

    /*if (this.state.pager.current !== page) this.getAreaData();
    if (this.state.areaCode !== area) this.getAreaData();*/
    if (isNaN(type)) {
      console.log("type is null");
    } else if (
      this.state.type !== type ||
      this.state.pager.current !== page ||
      this.state.areaCode !== area
    ) {
      try {
        await this.getAreaData();
      } finally {
        this.setState({ loading: false });
      }
    }
  };

  getAreaData = async () => {
    const params = new URLSearchParams(window.location.search);
    const page = parseInt(params.get("page"));
    const type = parseInt(params.get("type")) || null;

    const path = this.props.match.path;

    if (page !== this.state.pager.currentPage) {
      const areaDataList = await Axios(`${path}?${params}`);

      this.setState({
        areaData: areaDataList.data.pageOfItems,
        pager: areaDataList.data.pager,
        lang: areaDataList.data.allItems.lang,
        areaCode: areaDataList.data.allItems.addedAreaCode,
        addedType: type,
        areaTitle: areaDataList.data.allItems.title,
        code: areaDataList.data.allItems.areaCode,
        type: areaDataList.data.allItems.typeArray,
        area: areaDataList.data.allItems.areaArray,
        category: areaDataList.data.allItems.categoryArray,
      });
    }
  };

  render() {
    const path = this.props.match.path;
    const {
      areaData,
      pager,
      lang,
      areaCode,
      addedType,
      areaTitle,
      code,
      type,
      area,
      category,
      loading,
    } = this.state;

    return (
      <AreaPresenter
        areaData={areaData}
        pager={pager}
        path={path}
        lang={lang}
        areaCode={areaCode}
        title={areaTitle}
        addType={addedType}
        code={code}
        type={type}
        area={area}
        category={category}
        loading={loading}
      />
    );
  }
}
