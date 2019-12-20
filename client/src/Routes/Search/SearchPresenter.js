import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import Section from "../../Components/Section";
import SearchItem from "../../Components/SearchItem";
import { Link } from "react-router-dom";

const Container = styled.div``;

const PageContainer = styled.div``;

const Pagination = styled.ul``;

const Page = styled.li``;

const PageItem = styled(Link)``;

const SearchPresenter = ({ data, loading, pager, term }) =>
  loading ? (
    <Container>
      <Helmet>
        <title>Loading | kotravel</title>
      </Helmet>
    </Container>
  ) : (
    <Container>
      <Helmet>
        <title>{`검색결과 : ${term}`} | kotravel</title>
      </Helmet>

      <Section title="검색결과">
        {data && data.length > 2 ? (
          data.map(search => (
            <SearchItem
              key={search.contentid}
              id={search.contentid}
              type={search.contenttypeid}
              imageUrl={search.firstimage}
              title={search.title}
              addr={search.addr1}
              subAddr={search.addr2}
            />
          ))
        ) : data && 0 < data.length < 2 ? (
          <SearchItem
            id={data.contentid}
            type={data.contenttypeid}
            imageUrl={data.firstimage}
            title={data.title}
            addr={data.addr1}
            subAddr={data.addr2}
          />
        ) : null}
      </Section>

      <PageContainer>
        {pager.pages && pager.pages.length && (
          <Pagination>
            <Page visible={`${pager.currentPage === 1 ? "disabled" : ""}`}>
              <PageItem to={{ search: `?keyword=${term}&page=1` }}>First</PageItem>
            </Page>
            <Page visible={`${pager.currentPage === 1 ? "disabled" : ""}`}>
              <PageItem to={{ search: `?keyword=${term}&page=${pager.currentPage - 1}` }}>
                Previous
              </PageItem>
            </Page>
            {pager.pages.map(page => (
              <Page key={page} active={`${pager.currentPage === page ? "active" : ""}`}>
                <PageItem to={{ search: `?keyword=${term}&page=${page}` }}>{page}</PageItem>
              </Page>
            ))}
            <Page visible={`${pager.currentPage === pager.totalPages ? "disabled" : ""}`}>
              <PageItem to={{ search: `?keyword=${term}&page=${pager.currentPage + 1}` }}>
                Next
              </PageItem>
            </Page>
            <Page visible={`${pager.currentPage === pager.totalPages ? "disabled" : ""}`}>
              <PageItem to={{ search: `?keyword=${term}&page=${pager.totalPages}` }}>Last</PageItem>
            </Page>
          </Pagination>
        )}
      </PageContainer>
    </Container>
  );

export default SearchPresenter;
