import axios from "axios";

export const api = axios.create({
  baseURL: "http://api.visitkorea.or.kr/openapi/service/rest/KorService/",
  params: {
    ServiceKey:
      "KHfC8jhMEZeE3BBAfgva4gzrMwKd+N5JR6TuOE9YIzQcXGnifwewaPLWvv22PQGOfszIV8c8IHIj+AciqPmL1Q==",
    MobileOS: "ETC",
    MobileApp: "KorService"
  }
});
