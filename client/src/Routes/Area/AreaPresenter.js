import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Section from "../../Components/Section";
import Poster from "../../Components/Poster";
import Header from "../../Components/Header/Header";
import AddCategory from "../../Components/AddCategory";
import Helmet from "react-helmet";

const Container = styled.div`
  width: 100%;
  max-width: 100%;
`;

const PageContainer = styled.div``;

const Pagination = styled.ul``;

const Page = styled.li``;

const PageItem = styled(Link)``;

const getType = (area, type) => {
  for (var i = 0; i < type.typeNum.length; i++) {
    if (area.contenttypeid === type.typeNum[i]) {
      return type.path[i];
    }
  }
};

const AreaPresenter = ({
  areaData,
  pager,
  lang,
  path,
  areaCode,
  title,
  addType,
  code,
  type,
  area,
  category,
  loading,
}) =>
  loading ? null : (
    <>
      <Helmet>
        <title>{title} | Kotravel</title>
      </Helmet>

      <Header
        lang={lang}
        pathname={path}
        code={code}
        type={type}
        area={area}
        category={category}
        loading={loading}
      />

      <AddCategory
        lang={lang}
        pathname={path}
        areaCode={areaCode}
        type={type}
        category={category}
        loading={loading}
      />

      <Container>
        {areaData && areaData.length > 0 && (
          <Section title={title}>
            {areaData.map((area) => (
              <Poster
                key={area.contentid}
                id={area.contentid}
                imageUrl={area.firstimage}
                title={area.title}
                addr={area.addr1}
                subAddr={area.addr2}
                path={getType(area, type)}
              />
            ))}
          </Section>
        )}

        <PageContainer>
          {pager.pages && pager.pages.length && (
            <Pagination>
              <Page visible={`${pager.current === 1 ? "disabled" : ""}`}>
                <PageItem to={{ search: `?type=${addType}&area=${areaCode}&page=1` }}>
                  First
                </PageItem>
              </Page>
              <Page visible={`${pager.current === 1 ? "disabled" : ""}`}>
                <PageItem
                  to={{ search: `?type=${addType}&area=${areaCode}&page=${pager.current - 1}` }}
                >
                  Previous
                </PageItem>
              </Page>
              {pager.pages.map((page) => (
                <Page key={page} active={`${pager.current === page ? "active" : ""}`}>
                  <PageItem to={{ search: `?type=${addType}&area=${areaCode}&page=${page}` }}>
                    {page}
                  </PageItem>
                </Page>
              ))}
              <Page visible={`${pager.current === pager.totalPages ? "disabled" : ""}`}>
                <PageItem
                  to={{ search: `?type=${addType}&area=${areaCode}&page=${pager.current + 1}` }}
                >
                  Next
                </PageItem>
              </Page>
              <Page visible={`${pager.current === pager.totalPages ? "disabled" : ""}`}>
                <PageItem
                  to={{ search: `?type=${addType}&area=${areaCode}&page=${pager.totalPages}` }}
                >
                  Last
                </PageItem>
              </Page>
            </Pagination>
          )}
        </PageContainer>
      </Container>
    </>
  );

export default AreaPresenter;
