import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 500px;
  height: 500px;
`;

const Map = styled.div`
  width: 500px;
  height: 500px;
`;

export default class extends React.Component {
  constructor() {
    super();

    this.state = {
      status: null
    };
    this.getMap = this.getMap.bind(this);
    this.placesSearchCB = this.placesSearchCB.bind(this);
    this.displayMarker = this.displayMarker.bind(this);
    this.getAddrMap = this.getAddrMap.bind(this);
  }

  componentDidUpdate() {
    if (this.state.status === "ZERO_RESULT") this.getAddrMap();
  }

  getAddrMap = () => {
    const { kakao } = window;
    const { addr1, title } = this.props;
    let container = document.getElementById("map");
    let option = {
      center: new kakao.maps.LatLng(33.450701, 126.570667)
    };

    var map = new kakao.maps.Map(container, option);

    var geocoder = new kakao.maps.services.Geocoder();

    geocoder.addressSearch(addr1, function(result, status) {
      console.log(status);
      if (status === kakao.maps.services.Status.OK) {
        var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

        var marker = new kakao.maps.Marker({
          map: map,
          position: coords
        });

        var infowindow = new kakao.maps.InfoWindow({
          content: `<div style="width:150px;text-align:center;padding:6px 0;">${title}</div>`
        });
        infowindow.open(map, marker);

        map.setCenter(coords);
      }
    });
  };

  componentDidMount() {
    const { lang } = this.props;
    if (lang === "/kor" || lang === "/eng") {
      this.getMap();
    } else {
      console.log("nothing");
    }
  }

  getMap = () => {
    const { kakao } = window;
    const { title } = this.props;
    let container = document.getElementById("map");
    let option = {
      center: new kakao.maps.LatLng(33.450701, 126.570667)
    };

    this.map = new window.kakao.maps.Map(container, option);

    var ps = new kakao.maps.services.Places();

    ps.keywordSearch(title, this.placesSearchCB);
  };

  placesSearchCB = (data, status, pagination) => {
    const { kakao } = window;

    if (status === kakao.maps.services.Status.OK) {
      var bounds = new kakao.maps.LatLngBounds();

      for (var i = 0; i < data.length; i++) {
        this.displayMarker(data[0]);
        bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
      }

      this.map.setBounds(bounds);

      var mapTypeControl = new kakao.maps.MapTypeControl();

      this.map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

      var zoomControl = new kakao.maps.ZoomControl();
      this.map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
    } else {
      this.setState({
        status: status
      });
    }
  };

  displayMarker = place => {
    const { kakao } = window;
    const { title } = this.props;
    var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
    var marker = new kakao.maps.Marker({
      map: this.map,
      position: new kakao.maps.LatLng(place.y, place.x)
    });

    kakao.maps.event.addListener(marker, "click", () => {
      infowindow.setContent(
        `<div style="display:flex;flex-direction:column;align-items:center;justify-content: space-around;width:150px;height:35px;"><span>${title}</span></div>`
      );
      infowindow.open(this.map, marker);
    });
  };

  render() {
    const { lang } = this.props;
    return (
      <Container>
        {lang === "/kor" || lang === "/eng" ? <Map id="map"></Map> : <Container></Container>}
      </Container>
    );
  }
}
