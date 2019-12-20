import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Section from "../../Components/Section";
import Poster from "../../Components/Poster";

const Container = styled.div`
  width: 100%;
  max-width: 100%;
`;

const PageContainer = styled.div``;

const Pagination = styled.ul``;

const Page = styled.li``;

const PageItem = styled(Link)``;

const LeisurePresenter = ({ leisure, pager }) => (
  <Container>
    {leisure && leisure.length > 0 && (
      <Section title="Leisure">
        {leisure.map(sports => (
          <Poster
            key={sports.contentid}
            id={sports.contentid}
            imageUrl={sports.firstimage}
            title={sports.title}
            addr={sports.addr1}
            subAddr={sports.addr2}
            isLeisure={true}
          />
        ))}
      </Section>
    )}

    <PageContainer>
      {pager.pages && pager.pages.length && (
        <Pagination>
          <Page visible={`${pager.currentPage === 1 ? "disabled" : ""}`}>
            <PageItem to={{ search: `?page=1` }}>First</PageItem>
          </Page>
          <Page visible={`${pager.currentPage === 1 ? "disabled" : ""}`}>
            <PageItem to={{ search: `?page=${pager.currentPage - 1}` }}>Previous</PageItem>
          </Page>
          {pager.pages.map(page => (
            <Page key={page} active={`${pager.currentPage === page ? "active" : ""}`}>
              <PageItem to={{ search: `?page=${page}` }}>{page}</PageItem>
            </Page>
          ))}
          <Page visible={`${pager.currentPage === pager.totalPages ? "disabled" : ""}`}>
            <PageItem to={{ search: `?page=${pager.currentPage + 1}` }}>Next</PageItem>
          </Page>
          <Page visible={`${pager.currentPage === pager.totalPages ? "disabled" : ""}`}>
            <PageItem to={{ search: `?page=${pager.totalPages}` }}>Last</PageItem>
          </Page>
        </Pagination>
      )}
    </PageContainer>
  </Container>
);

export default LeisurePresenter;
