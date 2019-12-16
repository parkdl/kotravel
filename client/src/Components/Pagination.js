import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const PageContainer = styled.div``;

const Paging = styled.ul``;

const Page = styled.li``;

const PageItem = styled(Link)``;

const Pagination = () => (
  <PageContainer>
    {pager.pages && pager.pages.length && (
      <Paging>
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
      </Paging>
    )}
  </PageContainer>
);

export default Pagination;
