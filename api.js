import axios from "axios";

export const api = axios.create({
  baseURL: "http://api.visitkorea.or.kr/openapi/service/rest/KorService/",
  params: {
    ServiceKey:
      "KHfC8jhMEZeE3BBAfgva4gzrMwKd+N5JR6TuOE9YIzQcXGnifwewaPLWvv22PQGOfszIV8c8IHIj+AciqPmL1Q==",
    MobileOS: "ETC",
    MobileApp: "kotravel",
    _type: "json"
  }
});

export const engApi = axios.create({
  baseURL: "http://api.visitkorea.or.kr/openapi/service/rest/EngService/",
  params: {
    ServiceKey:
      "KHfC8jhMEZeE3BBAfgva4gzrMwKd+N5JR6TuOE9YIzQcXGnifwewaPLWvv22PQGOfszIV8c8IHIj+AciqPmL1Q==",
    MobileOS: "ETC",
    MobileApp: "kotravel",
    _type: "json"
  }
});

export const jpnApi = axios.create({
  baseURL: "http://api.visitkorea.or.kr/openapi/service/rest/JpnService/",
  params: {
    ServiceKey:
      "KHfC8jhMEZeE3BBAfgva4gzrMwKd+N5JR6TuOE9YIzQcXGnifwewaPLWvv22PQGOfszIV8c8IHIj+AciqPmL1Q==",
    MobileOS: "ETC",
    MobileApp: "kotravel",
    _type: "json"
  }
});

export const chiApi = axios.create({
  baseURL: "http://api.visitkorea.or.kr/openapi/service/rest/ChtService/",
  params: {
    ServiceKey:
      "KHfC8jhMEZeE3BBAfgva4gzrMwKd+N5JR6TuOE9YIzQcXGnifwewaPLWvv22PQGOfszIV8c8IHIj+AciqPmL1Q==",
    MobileOS: "ETC",
    MobileApp: "kotravel",
    _type: "json"
  }
});

export const gerApi = axios.create({
  baseURL: "http://api.visitkorea.or.kr/openapi/service/rest/GerService/",
  params: {
    ServiceKey:
      "KHfC8jhMEZeE3BBAfgva4gzrMwKd+N5JR6TuOE9YIzQcXGnifwewaPLWvv22PQGOfszIV8c8IHIj+AciqPmL1Q==",
    MobileOS: "ETC",
    MobileApp: "kotravel",
    _type: "json"
  }
});

export const freApi = axios.create({
  baseURL: "http://api.visitkorea.or.kr/openapi/service/rest/FreService/",
  params: {
    ServiceKey:
      "KHfC8jhMEZeE3BBAfgva4gzrMwKd+N5JR6TuOE9YIzQcXGnifwewaPLWvv22PQGOfszIV8c8IHIj+AciqPmL1Q==",
    MobileOS: "ETC",
    MobileApp: "kotravel",
    _type: "json"
  }
});

export const spnApi = axios.create({
  baseURL: "http://api.visitkorea.or.kr/openapi/service/rest/SpnService/",
  params: {
    ServiceKey:
      "KHfC8jhMEZeE3BBAfgva4gzrMwKd+N5JR6TuOE9YIzQcXGnifwewaPLWvv22PQGOfszIV8c8IHIj+AciqPmL1Q==",
    MobileOS: "ETC",
    MobileApp: "kotravel",
    _type: "json"
  }
});

export const rusApi = axios.create({
  baseURL: "http://api.visitkorea.or.kr/openapi/service/rest/RusService/",
  params: {
    ServiceKey:
      "KHfC8jhMEZeE3BBAfgva4gzrMwKd+N5JR6TuOE9YIzQcXGnifwewaPLWvv22PQGOfszIV8c8IHIj+AciqPmL1Q==",
    MobileOS: "ETC",
    MobileApp: "kotravel",
    _type: "json"
  }
});
