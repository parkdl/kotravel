import React from "react";
import CategoryPresenter from "./CategoryPresenter";
import axios from "axios";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryData: [],
      pager: {},
      lang: "",
      addAreaCode: "",
      typePath: this.props.match.path,
      typeTitle: "",
      code: null,
      type: null,
      area: null,
      category: null,
      loading: true,
    };
  }

  componentDidMount = async () => {
    try {
      await this.getCategoryDatas();
    } finally {
      this.setState({
        loading: false,
      });
    }
  };

  componentDidUpdate = async () => {
    const params = new URLSearchParams(window.location.search);
    const page = parseInt(params.get("page"));
    const area = parseInt(params.get("area"));
    /*if (this.props.match.path !== this.state.typePath) this.getCategoryDatas();
    if (this.state.pager.current !== page) this.getCategoryDatas();*/
    if (isNaN(area)) {
      console.log("areaCode is null");
    } else if (
      this.state.areaCode !== area ||
      this.props.match.path !== this.state.typePath ||
      this.state.pager.current !== page
    ) {
      try {
        await this.getCategoryDatas();
      } finally {
        this.setState({
          loading: false,
        });
      }
    }
  };

  getCategoryDatas = async () => {
    const params = new URLSearchParams(window.location.search);
    const page = parseInt(params.get("page"));
    const path = this.props.match.path;

    if (page !== this.state.pager.currentPage) {
      const categoryDataArray = await axios(`${path}?${params}`);
      this.setState({
        categoryData: categoryDataArray.data.pageOfItems,
        pager: categoryDataArray.data.pager,
        lang: categoryDataArray.data.allItems.lang,
        addAreaCode: categoryDataArray.data.allItems.addedAreaCode,
        typeTitle: categoryDataArray.data.allItems.title,
        code: categoryDataArray.data.allItems.areaCode,
        area: categoryDataArray.data.allItems.areaArray,
        type: categoryDataArray.data.allItems.typeArray,
        category: categoryDataArray.data.allItems.categoryArray,
        typePath: path,
      });
    }
  };

  render() {
    console.log(this.state);
    const {
      categoryData,
      pager,
      lang,
      addAreaCode,
      typePath,
      typeTitle,
      code,
      type,
      area,
      category,
      loading,
    } = this.state;
    console.log(this.state);
    return (
      <CategoryPresenter
        categoryData={categoryData}
        pager={pager}
        path={typePath}
        lang={lang}
        title={typeTitle}
        addArea={addAreaCode}
        code={code}
        type={type}
        area={area}
        category={category}
        loading={loading}
      />
    );
  }
}
