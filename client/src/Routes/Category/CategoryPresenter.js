import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Section from "../../Components/Section";
import Poster from "../../Components/Poster";
import Header from "../../Components/Header/Header";
import AddAreaCode from "../../Components/AddAreaCode";
import Helmet from "react-helmet";

const Container = styled.div`
  width: 100%;
  max-width: 100%;
`;

const PageContainer = styled.div``;

const Pagination = styled.ul``;

const Page = styled.li`
  visibility: ${(props) => (props.visible === "disabled" ? "hidden" : "visible")};
`;

const PageItem = styled(Link)``;

const CategoryPresenter = ({
  categoryData,
  pager,
  path,
  lang,
  title,
  addArea,
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

      <AddAreaCode lang={lang} pathname={path} area={area} code={code} />

      <Container>
        {categoryData && categoryData.length > 0 && (
          <Section title={title}>
            {categoryData.map((data) => (
              <Poster
                key={data.contentid}
                id={data.contentid}
                imageUrl={data.firstimage}
                title={data.title}
                addr={data.addr1}
                subAddr={data.addr2}
                path={path}
              />
            ))}
          </Section>
        )}

        <PageContainer>
          {pager.pages && pager.pages.length && (
            <Pagination>
              <Page visible={`${pager.current === 1 ? "disabled" : ""}`}>
                <PageItem to={{ search: `?area=${addArea}&page=1` }}>First</PageItem>
              </Page>
              <Page visible={`${pager.current === 1 ? "disabled" : ""}`}>
                <PageItem to={{ search: `?area=${addArea}&page=${pager.current - 1}` }}>
                  Previous
                </PageItem>
              </Page>
              {pager.pages.map((page) => (
                <Page key={page} active={`${pager.current === page ? "active" : ""}`}>
                  <PageItem to={{ search: `?area=${addArea}&page=${page}` }}>{page}</PageItem>
                </Page>
              ))}
              <Page visible={`${pager.current === pager.totalPages ? "disabled" : ""}`}>
                <PageItem to={{ search: `?area=${addArea}&page=${pager.current + 1}` }}>
                  Next
                </PageItem>
              </Page>
              <Page visible={`${pager.current === pager.totalPages ? "disabled" : ""}`}>
                <PageItem to={{ search: `?area=${addArea}&page=${pager.totalPages}` }}>
                  Last
                </PageItem>
              </Page>
            </Pagination>
          )}
        </PageContainer>
      </Container>
    </>
  );

export default CategoryPresenter;
