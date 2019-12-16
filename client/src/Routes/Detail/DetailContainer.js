/*import React from "react";
import DetailPresenter from "./DetailPresenter";
import { api } from "../../api";

export default class extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname }
    } = this.props;
    this.state = {
      detailCommon: null,
      detailIntro: null,
      detailInfo: null,
      detailImage: null,
      loading: true,
      isCultural: pathname.includes("/cultural/"),
      isTourist: pathname.includes("/tourist/"),
      isFestival: pathname.includes("/tourist/"),
      isFood: pathname.includes("/food/"),
      isRooms: pathname.includes("/rooms/"),
      isLeisure: pathname.includes("/leisure/"),
      isShopping: pathname.includes("/shopping/")
    };
  }

  componentDidMount() {
    this.getDetailList();
  }

  getDetailList = async () => {
    const {
      match: {
        params: { id }
      }
    } = this.props;
    const {
      isCultural,
      isTourist,
      isFestival,
      isFood,
      isRooms,
      isLeisure,
      isShopping
    } = this.state;
    let intro = null;
    let info = null;
    const common = await api.get("detailCommon", {
      params: {
        contentId: parseInt(id),
        defaultYN: "Y",
        addrinfoYN: "Y",
        overviewYN: "Y",
        firstImageYN: "Y"
      }
    });
    const image = await api.get("detailImage", {
      params: {
        contentId: parseInt(id),
        imageYN: "Y",
        subImageYN: "Y"
      }
    });

    try {
      if (isCultural) {
        intro = await api.get("detailIntro", {
          params: {
            contentId: parseInt(id),
            contentTypeId: 14
          }
        });
        info = await api.get("detailInfo", {
          params: {
            contentId: parseInt(id),
            contentTypeId: 14
          }
        });
      } else if (isTourist) {
        intro = await api.get("detailIntro", {
          params: {
            contentId: parseInt(id),
            contentTypeId: 12
          }
        });
        info = await api.get("detailInfo", {
          params: {
            contentId: parseInt(id),
            contentTypeId: 12
          }
        });
      } else if (isFestival) {
        intro = await api.get("detailIntro", {
          params: {
            contentId: parseInt(id),
            contentTypeId: 15
          }
        });
        info = await api.get("detailInfo", {
          params: {
            contentId: parseInt(id),
            contentTypeId: 15
          }
        });
      } else if (isFood) {
        intro = await api.get("detailIntro", {
          params: {
            contentId: parseInt(id),
            contentTypeId: 39
          }
        });
        info = await api.get("detailInfo", {
          params: {
            contentId: parseInt(id),
            contentTypeId: 39
          }
        });
      } else if (isShopping) {
        intro = await api.get("detailIntro", {
          params: {
            contentId: parseInt(id),
            contentTypeId: 38
          }
        });
        info = await api.get("detailInfo", {
          params: {
            contentId: parseInt(id),
            contentTypeId: 38
          }
        });
      } else if (isRooms) {
        intro = await api.get("detailIntro", {
          params: {
            contentId: parseInt(id),
            contentTypeId: 32
          }
        });
        info = await api.get("detailInfo", {
          params: {
            contentId: parseInt(id),
            contentTypeId: 32
          }
        });
      } else if (isLeisure) {
        intro = await api.get("detailIntro", {
          params: {
            contentId: parseInt(id),
            contentTypeId: 28
          }
        });
        info = await api.get("detailInfo", {
          params: {
            contentId: parseInt(id),
            contentTypeId: 28
          }
        });
      } else {
        intro = await api.get("detailIntro", {
          params: {
            contentId: parseInt(id),
            contentTypeId: 25
          }
        });
        info = await api.get("detailInfo", {
          params: {
            contentId: parseInt(id),
            contentTypeId: 25
          }
        });
      }
    } finally {
      this.setState({
        detailCommon: common.data.response.body.items.item,
        detailImage: image.data.response.body.items.item,
        detailIntro: intro.data.response.body.items.item,
        detailInfo: info.data.response.body.items.item,
        loading: false
      });
    }
  };

  getDetail = async () => {
    const {
      match: {
        params: { id }
      }
    } = this.props;
    const {
      isCultural,
      isTourist,
      isFestival,
      isFood,
      isRooms,
      isLeisure,
      isShopping
    } = this.state;
    let intro = null;
    let info = null;
    try {
      if (isCultural) {
        intro = await api.get("detailIntro", {
          params: {
            contentId: parseInt(id),
            contentTypeId: 14
          }
        });
        info = await api.get("detailInfo", {
          params: {
            contentId: parseInt(id),
            contentTypeId: 14
          }
        });
      } else if (isTourist) {
        intro = await api.get("detailIntro", {
          params: {
            contentId: parseInt(id),
            contentTypeId: 12
          }
        });
        info = await api.get("detailInfo", {
          params: {
            contentId: parseInt(id),
            contentTypeId: 12
          }
        });
      } else if (isFestival) {
        intro = await api.get("detailIntro", {
          params: {
            contentId: parseInt(id),
            contentTypeId: 15
          }
        });
        info = await api.get("detailInfo", {
          params: {
            contentId: parseInt(id),
            contentTypeId: 15
          }
        });
      } else if (isFood) {
        intro = await api.get("detailIntro", {
          params: {
            contentId: parseInt(id),
            contentTypeId: 39
          }
        });
        info = await api.get("detailInfo", {
          params: {
            contentId: parseInt(id),
            contentTypeId: 39
          }
        });
      } else if (isShopping) {
        intro = await api.get("detailIntro", {
          params: {
            contentId: parseInt(id),
            contentTypeId: 38
          }
        });
        info = await api.get("detailInfo", {
          params: {
            contentId: parseInt(id),
            contentTypeId: 38
          }
        });
      } else if (isRooms) {
        intro = await api.get("detailIntro", {
          params: {
            contentId: parseInt(id),
            contentTypeId: 32
          }
        });
        info = await api.get("detailInfo", {
          params: {
            contentId: parseInt(id),
            contentTypeId: 32
          }
        });
      } else if (isLeisure) {
        intro = await api.get("detailIntro", {
          params: {
            contentId: parseInt(id),
            contentTypeId: 28
          }
        });
        info = await api.get("detailInfo", {
          params: {
            contentId: parseInt(id),
            contentTypeId: 28
          }
        });
      } else {
        intro = await api.get("detailIntro", {
          params: {
            contentId: parseInt(id),
            contentTypeId: 25
          }
        });
        info = await api.get("detailInfo", {
          params: {
            contentId: parseInt(id),
            contentTypeId: 25
          }
        });
      }
    } finally {
      this.setState({
        detailIntro: intro.data.response.body.items.item,
        detailInfo: info.data.response.body.items.item,
        loading: false
      });
    }
  };

  render() {
    const {
      detailCommon,
      detailIntro,
      detailInfo,
      detailImage,
      loading,
      isCultural,
      isTourist,
      isFestival,
      isFood,
      isRooms,
      isLeisure,
      isShopping
    } = this.state;
    console.log(this.state);

    return (
      <DetailPresenter
        detailCommon={detailCommon}
        detailIntro={detailIntro}
        detailInfo={detailInfo}
        detailImage={detailImage}
        loading={loading}
        tourist={isTourist}
        cultural={isCultural}
        festival={isFestival}
        food={isFood}
        room={isRooms}
        lersure={isLeisure}
        shopping={isShopping}
      />
    );
  }
}*/

import React from "react";
import axios from "axios";
import DetailPresenter from "./DetailPresenter";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Data: null
    };
  }

  componentDidMount() {
    this.getDetail();
  }

  getDetail = async () => {
    const {
      match: {
        params: { id }
      }
    } = this.props;
    const parseId = parseInt(id);
    const detailData = await axios(`/tourist/${parseId}`);
    this.setState({ Data: detailData.data });
  };

  render() {
    console.log(this.props.match.params.id);
    return <DetailPresenter detail={this.state.Data}></DetailPresenter>;
  }
}
