import React from "react";
import axios from "axios";
import SearchPresenter from "./SearchPresenter";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchItem: null,
      pager: {},
      searchTerm: null,
      loading: true,
      areaCode: "",
      typeCode: "",
      lang: "",
      title: "",
      type: null,
      area: null,
      category: null,
      code: null,
    };
  }

  componentDidMount = async () => {
    try {
      await this.getSearchData();
    } finally {
      this.setState({ loading: false });
    }
  };

  componentDidUpdate = async () => {
    const params = new URLSearchParams(window.location.search);
    const page = parseInt(params.get("page"));
    if (this.state.pager.current !== page)
      try {
        await this.getSearchData();
      } finally {
        this.setState({ loading: false });
      }
  };

  getSearchData = async () => {
    const {
      location: { pathname },
    } = this.props;
    const search = new URLSearchParams(window.location.search);
    const getSearch = search.get("keyword");

    const searchList = await axios(`${pathname}?${search}`);

    this.setState({
      searchItem: searchList.data.pageOfItems,
      pager: searchList.data.pager,
      searchTerm: getSearch,
      lang: searchList.data.allItems.lang,
      title: searchList.data.allItems.title,
      areaCode: searchList.data.allItems.areaValue,
      typeCode: searchList.data.allItems.typeCode,
      type: searchList.data.allItems.typeArray,
      area: searchList.data.allItems.areaArray,
      category: searchList.data.allItems.categoryArray,
      code: searchList.data.allItems.areaCode,
    });
  };

  render() {
    const {
      searchItem,
      loading,
      pager,
      searchTerm,
      lang,
      title,
      areaCode,
      typeCode,
      type,
      area,
      category,
      code,
    } = this.state;
    console.log(this.state);
    return (
      <SearchPresenter
        lang={lang}
        term={searchTerm}
        data={searchItem}
        loading={loading}
        pager={pager}
        title={title}
        areaCode={areaCode}
        typeCode={typeCode}
        type={type}
        area={area}
        code={code}
        category={category}
      />
    );
  }
}
