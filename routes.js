const HOME = "/";

const SEARCH = "/search";

// List
const TOURIST = "/tourist";
const TOURIST_DETAIL = "/tourist/:id";

const CULTURAL = "/cultural";
const CULTURAL_DETAIL = "/cultural/:id";

const FESTIVAL = "/festival";
const FESTIVAL_DETAIL = "/festival/:id";

const FOOD = "/food";
const FOOD_DETAIL = "/food/:id";

const ROOMS = "/rooms";
const ROOMS_DETAIL = "/rooms/:id";

const SHOPPING = "/shopping";
const SHOPPING_DETAIL = "/shopping/:id";

const TRAVELCOURSE = "/travelCourse";
const TRAVELCOURSE_DETAIL = "/travelCourse/:id";

const LEISURE = "/leisure";
const LEISURE_DETAIL = "/leisure/:id";

const routes = {
  home: HOME,
  search: SEARCH,
  tourist: TOURIST,
  touristDetail: id => {
    if (id) {
      return `/tourist/${id}`;
    }
    return TOURIST_DETAIL;
  },
  cultural: CULTURAL,
  culturalDetail: id => {
    if (id) {
      return `/cultural/${id}`;
    }
    return CULTURAL_DETAIL;
  },
  festival: FESTIVAL,
  festivalDetail: id => {
    if (id) {
      return `/festival/${id}`;
    }
    return FESTIVAL_DETAIL;
  },
  food: FOOD,
  foodDetail: id => {
    if (id) {
      return `/food/${id}`;
    }
    return FOOD_DETAIL;
  },
  rooms: ROOMS,
  roomsDetail: id => {
    if (id) {
      return `/rooms/${id}`;
    }
    return ROOMS_DETAIL;
  },
  shopping: SHOPPING,
  shoppingDetail: id => {
    if (id) {
      return `/shopping/${id}`;
    }
    return SHOPPING_DETAIL;
  },
  travelCourse: TRAVELCOURSE,
  travelCourseDetail: id => {
    if (id) {
      return `/travelCourse/${id}`;
    }
    return TRAVELCOURSE_DETAIL;
  },
  leisure: LEISURE,
  leisureDetail: id => {
    if (id) {
      return `/leisure/${id}`;
    }
    return LEISURE_DETAIL;
  }
};

export default routes;
