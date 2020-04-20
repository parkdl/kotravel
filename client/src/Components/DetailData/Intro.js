import React from "react";
import styled from "styled-components";
import parse from "html-react-parser";

const Container = styled.div``;

const Title = styled.span``;

const ItemContainer = styled.div``;

const Item = styled.div``;

const Intro = ({ intro, path }) => (
  <Container>
    <Title>소개정보</Title>
    {path === "tourist" ? (
      <ItemContainer>
        {intro.accomcount ? <Item>수용인원 : {parse(intro.accomcount)}</Item> : null}
        {intro.chkbabycarriage ? (
          <Item>유모자 대여 정보 : {parse(intro.chkbabycarriage)}</Item>
        ) : null}
        {intro.chkcreditcard ? (
          <Item>신용카드 사용가능 유무 : {parse(intro.chkcreditcard)}</Item>
        ) : null}
        {intro.chkpet ? <Item>애완동물 동반 : {parse(intro.chkpet)}</Item> : null}
        {intro.expagerange ? <Item>체험 사용가능 연령 : {parse(intro.expagerange)}</Item> : null}
        {intro.expguide ? <Item>체험 안내 : {parse(intro.expguide)}</Item> : null}
        {intro.heritage1 ? <Item>세계문화유산 유무 : {parse(intro.heritage1)}</Item> : null}
        {intro.heritage2 ? <Item>세계자연유산 유무 : {parse(intro.heritage2)}</Item> : null}
        {intro.heritage3 ? <Item>세계기록유산 유무 : {parse(intro.heritage3)}</Item> : null}
        {intro.infocenter ? <Item>문의 및 안내 : {parse(intro.infocenter)}</Item> : null}
        {intro.parking ? <Item>주차시설 : {parse(intro.parking)}</Item> : null}
        {intro.restdate ? <Item>쉬는 날 : {parse(intro.restdate)}</Item> : null}
        {intro.useseason ? <Item>이용시기 : {parse(intro.useseason)}</Item> : null}
        {intro.usetime ? <Item>이용시간 : {parse(intro.usetime)}</Item> : null}
      </ItemContainer>
    ) : path === "cultural" ? (
      <ItemContainer>
        {intro.accomcountculture ? <Item>수용인원 : {parse(intro.accomcountculture)}</Item> : null}
        {intro.chkbabycarriage ? (
          <Item>유모자 대여 정보 : {parse(intro.chkbabycarriage)}</Item>
        ) : null}
        {intro.chkcreditcardculture ? (
          <Item>신용카드 사용가능 유무 : {parse(intro.chkcreditcardculture)}</Item>
        ) : null}
        {intro.chkpetculture ? <Item>애완동물 동반 : {parse(intro.chkpetculture)}</Item> : null}
        {intro.discountinfo ? <Item>할인정보 : {parse(intro.discountinfo)}</Item> : null}
        {intro.infocenterculture ? (
          <Item>문의 및 안내 : {parse(intro.infocenterculture)}</Item>
        ) : null}
        {intro.parkingculture ? <Item>주차시설 : {parse(intro.parkingculture)}</Item> : null}
        {intro.parkingfee ? <Item>주차요금 : {parse(intro.parkingfee)}</Item> : null}
        {intro.restdateculture ? <Item>쉬는 날 : {parse(intro.restdateculture)}</Item> : null}
        {intro.usefee ? <Item>이용요금 : {parse(intro.usefee)}</Item> : null}
        {intro.usetimeculture ? <Item>이용시간 : {parse(intro.usetimeculture)}</Item> : null}
        {intro.scale ? <Item>규모 : {parse(intro.scale)}</Item> : null}
        {intro.spendtime ? <Item>관람 소요시간 : {parse(intro.spendtime)}</Item> : null}
      </ItemContainer>
    ) : path === "festival" ? (
      <ItemContainer>
        {intro.agelimit ? <Item>관람 가능연령 : {parse(intro.agelimit)}</Item> : null}
        {intro.bookingplace ? <Item>예매처 : {parse(intro.bookingplace)}</Item> : null}
        {intro.discountinfofestival ? (
          <Item>할인정보 : {parse(intro.discountinfofestival)}</Item>
        ) : null}
        {intro.eventhomepage ? <Item>행사 홈페이지{parse(intro.eventhomepage)}</Item> : null}
        {intro.eventplace ? <Item>행사 장소 : {parse(intro.eventplace)}</Item> : null}
        {intro.eventstartdate ? <Item>행사 시작일 : {intro.eventstartdate}</Item> : null}
        {intro.eventenddate ? <Item>행사 종료일 : {intro.eventenddate}</Item> : null}
        {intro.festivalgrade ? <Item>축제등급 : {parse(intro.festivalgrade)}</Item> : null}
        {intro.placeinfo ? <Item>행사장 위치안내{parse(intro.placeinfo)}</Item> : null}
        {intro.playtime ? <Item>공연시간 : {parse(intro.playtime)}</Item> : null}
        {intro.program ? <Item>행사 프로그램 : {parse(intro.program)}</Item> : null}
        {intro.spendtimefestival ? (
          <Item>관람 소요시간 : {parse(intro.spendtimefestival)}</Item>
        ) : null}
        {intro.sponsor1 ? <Item>주최자 정보 : {parse(intro.sponsor1)}</Item> : null}
        {intro.sponsor1tel ? <Item>주최자 연락처 : {parse(intro.sponsor1tel)}</Item> : null}
        {intro.sponsor2 ? <Item>주관사 정보 : {parse(intro.sponsor2)}</Item> : null}
        {intro.sponsor2tel ? <Item>주관사 연락처 : {parse(intro.sponsor2tel)}</Item> : null}
        {intro.subevent ? <Item>부대행사 : {parse(intro.subevent)}</Item> : null}
        {intro.usetimefestival ? <Item>이용요금 : {parse(intro.usetimefestival)}</Item> : null}
      </ItemContainer>
    ) : path === "travelCourse" ? (
      <ItemContainer>
        {intro.distance ? <Item>코스 총거리 : {parse(intro.distance)}</Item> : null}
        {intro.infocentertourcourse ? (
          <Item>문의 및 안내 : {parse(intro.infocentertourcourse)}</Item>
        ) : null}
        {intro.schedule ? <Item>코스일정 : {parse(intro.schedule)}</Item> : null}
        {intro.taketime ? <Item>코스 총 소요시간 : {parse(intro.taketime)}</Item> : null}
        {intro.theme ? <Item>코스테마 : {parse(intro.theme)}</Item> : null}
      </ItemContainer>
    ) : path === "leisure" ? (
      <ItemContainer>
        {intro.accomcountleports ? <Item>수용인원 : {parse(intro.accomcountleports)}</Item> : null}
        {intro.chkbabycarriageleports ? (
          <Item>유모차 대여 정보 : {parse(intro.chkbabycarriageleports)}</Item>
        ) : null}
        {intro.chkcreditcardleports ? (
          <Item>신용카드 사용가능 유무 : {parse(intro.chkcreditcardleports)}</Item>
        ) : null}
        {intro.chkpetleports ? <Item>애완동물 동반 : {parse(intro.chkpetleports)}</Item> : null}
        {intro.expagerangeleports ? (
          <Item>체험 가능연령 : {parse(intro.expagerangeleports)}</Item>
        ) : null}
        {intro.infocenterleports ? (
          <Item>문의 및 안내 : {parse(intro.infocenterleports)}</Item>
        ) : null}
        {intro.openperiod ? <Item>개장기간 : {parse(intro.openperiod)}</Item> : null}
        {intro.parkingfeeleports ? <Item>주차요금 : {parse(intro.parkingfeeleports)}</Item> : null}
        {intro.parkingleports ? <Item>주차시설 : {parse(intro.parkingleports)}</Item> : null}
        {intro.reservation ? <Item>예약안내 : {parse(intro.reservation)}</Item> : null}
        {intro.restdateleports ? <Item>쉬는날 : {parse(intro.restdateleports)}</Item> : null}
        {intro.scaleleports ? <Item>규모 : {parse(intro.scaleleports)}</Item> : null}
        {intro.usefeeleports ? <Item>입장료 : {parse(intro.usefeeleports)}</Item> : null}
        {intro.usetimeleports ? <Item>이용시간 : {parse(intro.usetimeleports)}</Item> : null}
      </ItemContainer>
    ) : path === "rooms" ? (
      <ItemContainer>
        {intro.accomcountlodging ? (
          <Item>수용가능 인원 : {parse(intro.accomcountlodging)}</Item>
        ) : null}
        {intro.benikia ? <Item>베니키아 여부 : {parse(intro.benikia)}</Item> : null}
        {intro.checkintime ? <Item>입실 시간 : {parse(intro.checkintime)}</Item> : null}
        {intro.checkouttime ? <Item>퇴실 시간 : {parse(intro.checkouttime)}</Item> : null}
        {intro.chkcooking ? <Item>객실내 취사 여부 : {parse(intro.chkcooking)}</Item> : null}
        {intro.foodplace ? <Item>식음료장 : {parse(intro.foodplace)}</Item> : null}
        {intro.goodstay ? <Item>굿스테이 여부 : {parse(intro.goodstay)}</Item> : null}
        {intro.hanok ? <Item>한옥 여부 : {parse(intro.hanok)}</Item> : null}
        {intro.infocenterlodging ? (
          <Item>문의 및 안내 : {parse(intro.infocenterlodging)}</Item>
        ) : null}
        {intro.parkinglodging ? <Item>주차시설 : {parse(intro.parkinglodging)}</Item> : null}
        {intro.pickup ? <Item>픽업 서비스 : {parse(intro.pickup)}</Item> : null}
        {intro.roomcount ? <Item>객실 수 : {parse(intro.roomcount)}</Item> : null}
        {intro.reservationlodging ? (
          <Item>예약 안내 : {parse(intro.reservationlodging)}</Item>
        ) : null}
        {intro.reservationurl ? (
          <Item>예약 안내 홈페이지 : {parse(intro.reservationurl)}</Item>
        ) : null}
        {intro.roomtype ? <Item>객실 유형 : {parse(intro.roomtype)}</Item> : null}
        {intro.scalelodging ? <Item>규모 : {parse(intro.scalelodging)}</Item> : null}
        {intro.subfacility ? <Item>부대시설(기타) : {parse(intro.subfacility)}</Item> : null}
        {intro.barbecue ? (
          <Item>바베큐장 여부 : {intro.barbecue === 1 ? "사용가능" : "사용 불가능"}</Item>
        ) : null}
        {intro.beauty ? <Item>뷰티시설 : {parse(intro.beauty)}</Item> : null}
        {intro.bicycle ? <Item>자전거 대여 : {parse(intro.bicycle)}</Item> : null}
        {intro.campfire ? (
          <Item>캠프파이어 : {intro.campfire === 1 ? "사용가능" : "사용 불가능"}</Item>
        ) : null}
        {intro.fitness ? <Item>휘트니스 센터 : {parse(intro.fitness)}</Item> : null}
        {intro.karaoke ? (
          <Item>노래방 : {intro.karaoke === 1 ? "사용가능" : "사용 불가능"}</Item>
        ) : null}
        {intro.publicbath ? <Item>공동 샤워실 : {intro.publicbath}</Item> : null}
        {intro.publicpc ? (
          <Item>공동 PC방 : {intro.publicpc === 1 ? "사용가능" : "사용 불가능"}</Item>
        ) : null}
        {intro.sauna ? <Item>사우나실 : {parse(intro.sauna)}</Item> : null}
        {intro.seminar ? (
          <Item>세미나실 : {intro.seminar === 1 ? "사용가능" : "사용 불가능"}</Item>
        ) : null}
        {intro.sports ? (
          <Item>스포츠 시설 : {intro.sports === 1 ? "사용가능" : "사용 불가능"}</Item>
        ) : null}
        {intro.refundregulation ? <Item>환불규정 : {parse(intro.refundregulation)}</Item> : null}
      </ItemContainer>
    ) : path === "shopping" ? (
      <ItemContainer>
        {intro.chkbabycarriageshopping ? (
          <Item>유모차 대여 : {parse(intro.chkbabycarriageshopping)}</Item>
        ) : null}
        {intro.chkcreditcard ? <Item>신용카드 : {parse(intro.chkcreditcard)}</Item> : null}
        {intro.chkpetshopping ? <Item>애완동물 동반 : {parse(intro.chkpetshopping)}</Item> : null}
        {intro.culturecenter ? <Item>문화센터 : {parse(intro.culturecenter)}</Item> : null}
        {intro.fairday ? <Item>장서는 날 : {parse(intro.fairday)}</Item> : null}
        {intro.infocentershopping ? (
          <Item>문의 및 안내 : {parse(intro.infocentershopping)}</Item>
        ) : null}
        {intro.opentime ? <Item>영업시간 : {parse(intro.opentime)}</Item> : null}
        {intro.parkingshopping ? <Item>주차시설 : {parse(intro.parkingshopping)}</Item> : null}
        {intro.restdateshopping ? <Item>쉬는날 : {parse(intro.restdateshopping)}</Item> : null}
        {intro.restroom ? <Item>화장실 설명 : {parse(intro.restroom)}</Item> : null}
        {intro.saleitem ? <Item>판매품목 : {parse(intro.saleitem)}</Item> : null}
        {intro.saleitemcost ? <Item>판매 품목별 가격 : {parse(intro.saleitemcost)}</Item> : null}
        {intro.scaleshopping ? <Item>규모 : {parse(intro.scaleshopping)}</Item> : null}
        {intro.shopguide ? <Item>매장 안내 : {parse(intro.shopguide)}</Item> : null}
      </ItemContainer>
    ) : path === "food" ? (
      <ItemContainer>
        {intro.chkcreditcardfood ? (
          <Item>신용카드 사용가능 유무 : {parse(intro.chkcreditcardfood)}</Item>
        ) : null}
        {intro.discountinfofood ? <Item>할인정보 : {parse(intro.discountinfofood)}</Item> : null}
        {intro.firstmenu ? <Item>대표메뉴 : {parse(intro.firstmenu)}</Item> : null}
        {intro.infocenterfood ? <Item>문의 및 안내 : {parse(intro.infocenterfood)}</Item> : null}
        {intro.kidsfacility ? <Item>어린이 놀이방 유무 : {parse(intro.kidsfacility)}</Item> : null}
        {intro.opentimefood ? <Item>영업시간 : {parse(intro.opentimefood)}</Item> : null}
        {intro.packing ? <Item>포장가능 : {parse(intro.packing)}</Item> : null}
        {intro.parkingfood ? <Item>주차시설 : {parse(intro.parkingfood)}</Item> : null}
        {intro.reservationfood ? <Item>예약안내 : {parse(intro.reservationfood)}</Item> : null}
        {intro.restdatefood ? <Item>쉬는날 : {parse(intro.restdatefood)}</Item> : null}
        {intro.scalefood ? <Item>규모 : {parse(intro.scalefood)}</Item> : null}
        {intro.seat ? <Item>좌석수 : {parse(intro.seat)}</Item> : null}
        {intro.smoking ? <Item>금연 / 흡연 여부 : {parse(intro.smoking)}</Item> : null}
        {intro.treatmenu ? <Item>취급메뉴 : {parse(intro.treatmenu)}</Item> : null}
      </ItemContainer>
    ) : path === "traffic" ? (
      <ItemContainer>
        {intro.chkcreditcardtraffic ? <Item>{parse(intro.chkcreditcardtraffic)}</Item> : null}
        {intro.conven ? <Item>{parse(intro.conven)}</Item> : null}
        {intro.disablefacility ? <Item>{parse(intro.disablefacility)}</Item> : null}
        {intro.foreignerinfocenter ? <Item>{parse(intro.foreignerinfocenter)}</Item> : null}
        {intro.infocentertraffic ? <Item>{parse(intro.infocentertraffic)}</Item> : null}
        {intro.mainroute ? <Item>{parse(intro.mainroute)}</Item> : null}
        {intro.operationtimetraffic ? <Item>{parse(intro.operationtimetraffic)}</Item> : null}
        {intro.parkingtraffic ? <Item>{parse(intro.parkingtraffic)}</Item> : null}
        {intro.restroomtraffic ? <Item>{parse(intro.restroomtraffic)}</Item> : null}
        {intro.shipinfo ? <Item> {parse(intro.shipinfo)}</Item> : null}
      </ItemContainer>
    ) : null}
  </Container>
);

export default Intro;
