import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import { HeaderItem } from "./HeaderItem";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 10px auto;
  justify-content: space-around;
`;

const Title = styled.div`
  font-size: 25px;
`;

const SLink = styled(Link)`
  font-size: 20px;
`;

class ShowHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lang: null
    };
  }

  componentDidMount() {
    this.getLang();
  }

  getLang = () => {
    const path = this.props.location.pathname.slice(0, 4);
    if (this.props.location.pathname === "/") {
      this.setState({
        lang: "/kor"
      });
    } else {
      this.setState({
        lang: path
      });
    }
  };

  render() {
    const {
      location: { pathname }
    } = this.props;
    const { lang } = this.state;
    console.log(lang);
    return (
      <HeaderContainer>
        <Title>
          <SLink to={`${lang}`}>KOTRAVEL</SLink>
        </Title>

        <HeaderItem lang={lang} pathname={pathname} />
      </HeaderContainer>
    );
  }
}

export const Header = withRouter(ShowHeader);
