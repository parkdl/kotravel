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

const RoomsPresenter = ({ rooms, pager }) => (
  <Container>
    {rooms && rooms.length > 0 && (
      <Section title="Rooms">
        {rooms.map(room => (
          <Poster
            key={room.contentid}
            id={room.contentid}
            imageUrl={room.firstimage}
            title={room.title}
            addr={room.addr1}
            subAddr={room.addr2}
            isRooms={true}
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

export default RoomsPresenter;
