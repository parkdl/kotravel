import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import Section from "../../Components/Section";
import SearchItem from "./SearchItem";
import { Link } from "react-router-dom";
import Header from "../../Components/Header/Header";
import SearchForm from "./SearchForm";
import { getSearchNull } from "../../Components/Translate";
import Loading from "../../Components/Loading";

const Container = styled.div``;

const PageContainer = styled.div``;

const Pagination = styled.ul``;

const Page = styled.li``;

const PageItem = styled(Link)``;

const SearchPresenter = ({
  lang,
  data,
  loading,
  pager,
  term,
  title,
  areaCode,
  typeCode,
  type,
  area,
  code,
  category,
}) =>
  loading ? (
    <>
      <Container>
        <Helmet>
          <title>{`${title}`} | kotravel</title>
        </Helmet>
      </Container>
      <Loading />
    </>
  ) : (
    <Container>
      <Helmet>
        <title>{`${title} : ${term}`} | Kotravel</title>
      </Helmet>

      <Header
        lang={lang}
        type={type}
        area={area}
        category={category}
        code={code}
        loading={loading}
      />

      <SearchForm
        lang={lang}
        keyword={term}
        code={code}
        area={area}
        category={category}
        type={type}
      />

      <Section title={title}>
        {data && data.length > 1 ? (
          data.map((search) => (
            <SearchItem
              key={search.contentid}
              id={search.contentid}
              typeId={search.contenttypeid}
              imageUrl={search.firstimage}
              title={search.title}
              addr={search.addr1}
              subAddr={search.addr2}
              lang={lang}
              type={type}
            />
          ))
        ) : data && 0 < data.length < 2 ? (
          <SearchItem
            id={data.contentid}
            typeId={data.contenttypeid}
            imageUrl={data.firstimage}
            title={data.title}
            addr={data.addr1}
            subAddr={data.addr2}
            lang={lang}
            type={type}
          />
        ) : data === undefined ? (
          <Container>
            <Helmet>
              <title>{`${getSearchNull(lang)}`}| Kotravel</title>
            </Helmet>
            <span>{`${getSearchNull(lang)}`}</span>
          </Container>
        ) : null}
      </Section>

      <PageContainer>
        {pager.pages && pager.pages.length && (
          <Pagination>
            <Page visible={`${pager.current === 1 ? "disabled" : ""}`}>
              <PageItem
                to={{ search: `?area=${areaCode}&type=${typeCode}&keyword=${term}&page=1` }}
              >
                First
              </PageItem>
            </Page>
            <Page visible={`${pager.current === 1 ? "disabled" : ""}`}>
              <PageItem
                to={{
                  search: `?area=${areaCode}&type=${typeCode}&keyword=${term}&page=${
                    pager.current - 1
                  }`,
                }}
              >
                Previous
              </PageItem>
            </Page>
            {pager.pages.map((page) => (
              <Page key={page} active={`${pager.current === page ? "active" : ""}`}>
                <PageItem
                  to={{ search: `?area=${areaCode}&type=${typeCode}&keyword=${term}&page=${page}` }}
                >
                  {page}
                </PageItem>
              </Page>
            ))}
            <Page visible={`${pager.current === pager.totalPages ? "disabled" : ""}`}>
              <PageItem
                to={{
                  search: `?area=${areaCode}&type=${typeCode}&keyword=${term}&page=${
                    pager.current + 1
                  }`,
                }}
              >
                Next
              </PageItem>
            </Page>
            <Page visible={`${pager.current === pager.totalPages ? "disabled" : ""}`}>
              <PageItem
                to={{
                  search: `?area=${areaCode}&type=${typeCode}&keyword=${term}&page=${pager.totalPages}`,
                }}
              >
                Last
              </PageItem>
            </Page>
          </Pagination>
        )}
      </PageContainer>
    </Container>
  );

export default SearchPresenter;
