import KrFlag from "../assets/Flag/kr.png";
import CnFlag from "../assets/Flag/cn.png";
import DeFlag from "../assets/Flag/de.png";
import EsFlag from "../assets/Flag/es.png";
import JpFlag from "../assets/Flag/jp.png";
import RuFlag from "../assets/Flag/ru.png";
import UsFlag from "../assets/Flag/us.png";
import FrFlag from "../assets/Flag/fr.png";

export const HomeElement = [
  { country: "Korean", flagImg: KrFlag, linkTo: "/kor" },
  { country: "France", flagImg: FrFlag, linkTo: "/fre" },
  { country: "English", flagImg: UsFlag, linkTo: "/eng" },
  { country: "Germany", flagImg: DeFlag, linkTo: "/ger" },
  { country: "Russia", flagImg: RuFlag, linkTo: "/rus" },
  { country: "Japan", flagImg: JpFlag, linkTo: "/jpn" },
  { country: "Spain", flagImg: EsFlag, linkTo: "/spn" },
  { country: "China", flagImg: CnFlag, linkTo: "/chi" },
];

export const weatherTranslate = [
  { lang: "/kor", translate: "날씨", code: "kr" },
  { lang: "/eng", translate: "Weather", code: "en" },
  { lang: "/spn", translate: "El clima", code: "sp" },
  { lang: "/jpn", translate: "天気", code: "ja" },
  { lang: "/chi", translate: "天氣", code: "zh_tw" },
  { lang: "/rus", translate: "Погода", code: "ru" },
  { lang: "/fre", translate: "La météo", code: "fr" },
  { lang: "/ger", translate: "Das Wetter", code: "de" },
];

export const translate = {
  kor: {
    selectLang: "언어 선택",
    homeHello: "반갑습니다.<br> 즐거운 여행되세요",
    areaTitle: "지역선택",
    meanAll: "전체",
    categorySelect: "카테고리 선택",
    placeholder: "검색어를 입력해주세요",
    searchBtn: "검색",
    searchNull: "검색 결과 없음",
    searchResult: "검색결과",
  },
  eng: {
    selectLang: "Select language",
    homeHello: "Nice to meet you.<br> Enjoy your trip",
    areaTitle: "Select Region",
    meanAll: "ALL",
    categorySelect: "Select category",
    placeholder: "Keyword",
    searchBtn: "Search",
    searchNull: "No search results",
    searchResult: "Search Results",
  },
  spn: {
    selectLang: "Seleccione el idioma",
    homeHello: "Gusto en conocerte.<br> Que tengas un buen viaje",
    areaTitle: "Выберите регион",
    meanAll: "Todos",
    categorySelect: "Seleccione categoría",
    placeholder: "palabra clave",
    searchBtn: "Buscar",
    searchNull: "No hay resultados de búsqueda.",
    searchResult: "Resultados de busqueda",
  },
  jpn: {
    selectLang: "言語を選択する",
    homeHello: "うれしいです。<br>楽しい旅行を持って",
    areaTitle: "地域を選択",
    meanAll: "全体",
    categorySelect: "カテゴリを選択し",
    placeholder: "キーワード",
    searchBtn: "検索",
    searchNull: "検索結果なし",
    searchResult: "検索結果",
  },
  chi: {
    selectLang: "選擇語言",
    homeHello: "很高興認識你。<br>旅途愉快",
    areaTitle: "選擇地區",
    meanAll: "整體",
    categorySelect: "選擇類別",
    placeholder: "關鍵詞",
    searchBtn: "搜尋",
    searchNull: "沒有搜尋結果",
    searchResult: "搜索結果",
  },
  rus: {
    selectLang: "Выбрать язык",
    homeHello: "Приятно познакомиться.<br> Приятного путешествия",
    areaTitle: "Seleccione region",
    meanAll: "цельность",
    categorySelect: "Выберите категорию",
    placeholder: "ключевое слово",
    searchBtn: "поиск",
    searchNull: "Нет результатов поиска",
    searchResult: "Результаты поиска",
  },
  fre: {
    selectLang: "Choisir la langue",
    homeHello: "Ravi de vous rencontrer.<br> Bon voyage",
    areaTitle: "Sélectionnez une région",
    meanAll: "Entier",
    categorySelect: "Sélectionnez une catégorie",
    placeholder: "mot-clé",
    searchBtn: "Chercher",
    searchNull: "Aucun résultat de recherche",
    searchResult: "Résultats de recherche",
  },
  ger: {
    selectLang: "Sprache auswählen",
    homeHello: "Schön dich kennenzulernen.<br> Ich wünsche Ihnen eine schöne Reise",
    areaTitle: "Region auswählen",
    meanAll: "Ganz",
    categorySelect: "Kategorie auswählen",
    placeholder: "Stichwort",
    searchBtn: "Suche",
    searchNull: "Keine Suchergebnisse",
    searchResult: "Suchergebnisse",
  },
};
