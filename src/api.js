import axios from "axios";

const api = axios.create({
  baseURL: "http://api.visitkorea.or.kr/openapi/service/rest/",
  params: {
    ServiceKey:
      "KHfC8jhMEZeE3BBAfgva4gzrMwKd+N5JR6TuOE9YIzQcXGnifwewaPLWvv22PQGOfszIV8c8IHIj+AciqPmL1Q==",
    numOfRows: 10,
    pageNo: 1,
    MobileOS: "ETC",
    MobileApp: "KorService"
  }
});

export const touristApi = {
  tourist: () => api.get("KorService/categoryCode")
};
