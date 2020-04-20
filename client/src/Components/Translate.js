import { translate } from "./Variable";

export const getHomeHello = (lang) => {
  switch (lang) {
    case "/":
      return translate.kor.homeHello;
    case "/kor":
      return translate.kor.homeHello;
    case "/eng":
      return translate.eng.homeHello;
    case "/spn":
      return translate.spn.homeHello;
    case "/jpn":
      return translate.jpn.homeHello;
    case "/chi":
      return translate.chi.homeHello;
    case "/rus":
      return translate.rus.homeHello;
    case "/fre":
      return translate.fre.homeHello;
    case "/ger":
      return translate.ger.homeHello;
    default:
      break;
  }
};

export const getMeanAll = (lang) => {
  switch (lang) {
    case "/kor":
      return translate.kor.meanAll;
    case "/eng":
      return translate.eng.meanAll;
    case "/spn":
      return translate.spn.meanAll;
    case "/jpn":
      return translate.jpn.meanAll;
    case "/chi":
      return translate.chi.meanAll;
    case "/rus":
      return translate.rus.meanAll;
    case "/fre":
      return translate.fre.meanAll;
    case "/ger":
      return translate.ger.meanAll;
    default:
      break;
  }
};

export const getPlaceholderText = (lang) => {
  switch (lang) {
    case "/":
      return translate.kor.placeholder;
    case "/kor":
      return translate.kor.placeholder;
    case "/eng":
      return translate.eng.placeholder;
    case "/spn":
      return translate.spn.placeholder;
    case "/jpn":
      return translate.jpn.placeholder;
    case "/chi":
      return translate.chi.placeholder;
    case "/rus":
      return translate.rus.placeholder;
    case "/fre":
      return translate.fre.placeholder;
    case "/ger":
      return translate.ger.placeholder;
    default:
      break;
  }
};

export const getSelectLang = (lang) => {
  switch (lang) {
    case "/":
      return translate.kor.selectLang;
    case "/kor":
      return translate.kor.selectLang;
    case "/eng":
      return translate.eng.selectLang;
    case "/spn":
      return translate.spn.selectLang;
    case "/jpn":
      return translate.jpn.selectLang;
    case "/chi":
      return translate.chi.selectLang;
    case "/rus":
      return translate.rus.selectLang;
    case "/fre":
      return translate.fre.selectLang;
    case "/ger":
      return translate.ger.selectLang;
    default:
      break;
  }
};

export const getAreaTitle = (lang) => {
  switch (lang) {
    case "/":
      return translate.kor.areaTitle;
    case "/kor":
      return translate.kor.areaTitle;
    case "/eng":
      return translate.eng.areaTitle;
    case "/spn":
      return translate.spn.areaTitle;
    case "/jpn":
      return translate.jpn.areaTitle;
    case "/chi":
      return translate.chi.areaTitle;
    case "/rus":
      return translate.rus.areaTitle;
    case "/fre":
      return translate.fre.areaTitle;
    case "/ger":
      return translate.ger.areaTitle;
    default:
      break;
  }
};

export const getCategoryTitle = (lang) => {
  switch (lang) {
    case "/":
      return translate.kor.categorySelect;
    case "/kor":
      return translate.kor.categorySelect;
    case "/eng":
      return translate.eng.categorySelect;
    case "/spn":
      return translate.spn.categorySelect;
    case "/jpn":
      return translate.jpn.categorySelect;
    case "/chi":
      return translate.chi.categorySelect;
    case "/rus":
      return translate.rus.categorySelect;
    case "/fre":
      return translate.fre.categorySelect;
    case "/ger":
      return translate.ger.categorySelect;
    default:
      break;
  }
};

export const getSearchBtn = (lang) => {
  switch (lang) {
    case "/kor":
      return translate.kor.searchBtn;
    case "/eng":
      return translate.eng.searchBtn;
    case "/spn":
      return translate.spn.searchBtn;
    case "/jpn":
      return translate.jpn.searchBtn;
    case "/chi":
      return translate.chi.searchBtn;
    case "/rus":
      return translate.rus.searchBtn;
    case "/fre":
      return translate.fre.searchBtn;
    case "/ger":
      return translate.ger.searchBtn;
    default:
      break;
  }
};

export const getSearchNull = (lang) => {
  switch (lang) {
    case "/kor":
      return translate.kor.searchNull;
    case "/eng":
      return translate.eng.searchNull;
    case "/spn":
      return translate.spn.searchNull;
    case "/jpn":
      return translate.jpn.searchNull;
    case "/chi":
      return translate.chi.searchNull;
    case "/rus":
      return translate.rus.searchNull;
    case "/fre":
      return translate.fre.searchNull;
    case "/ger":
      return translate.ger.searchNull;
    default:
      break;
  }
};
