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
      loading: true
    };
  }

  componentDidMount = async () => {
    try {
      await this.getSearchData();
    } finally {
      this.setState({ loading: false });
    }
  };

  componentDidUpdate() {
    const params = new URLSearchParams(window.location.search);
    const page = parseInt(params.get("page"));
    if (this.state.pager.current !== page) this.getSearchData();
  }

  getSearchData = async () => {
    const search = new URLSearchParams(window.location.search);
    const page = parseInt(search.get("page")) || 1;
    const getSearch = search.get("keyword");

    if (page !== this.state.pager.currentPage) {
      const searchList = await axios(`/search?keyword=${getSearch}&page=${page}`);

      this.setState({
        searchItem: searchList.data.pageOfItems,
        pager: searchList.data.pager,
        searchTerm: getSearch
      });
    }
  };

  render() {
    const { searchItem, loading, pager, searchTerm } = this.state;

    return <SearchPresenter term={searchTerm} data={searchItem} loading={loading} pager={pager} />;
  }
}
