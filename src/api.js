import axios from "axios";

const api = axios.create({
  baseURL: "http://api.visitkorea.or.kr/openapi/service/rest/KorService/",
  params: {
    serviceKey:
      "KHfC8jhMEZeE3BBAfgva4gzrMwKd%2BN5JR6TuOE9YIzQcXGnifwewaPLWvv22PQGOfszIV8c8IHIj%2BAciqPmL1Q%3D%3D",
    numOfRows: 10,
    pageNo: 1,
    MobileOS: "ETC",
    MobileApp: "KorService"
  }
});

export const touristApi = {
  tourist: () => api.get("categoryCode")
};
