const HOME = "/";

// List
const TOURIST = "/tourist";
const TOURIST_DETAIL = "/tourist/:id";

const CULTURAL = "/cultural";
const CULTURAL_DETAIL = "/:id";

const FESTIVAL = "/festival";
const FESTIVAL_DETAIL = "/:id";

const FOOD = "/food";
const FOOD_DETAIL = "/:id";

const ROOMS = "/rooms";
const ROOMS_DETAIL = "/:id";

const SHOPPING = "/shopping";
const SHOPPING_DETAIL = "/:id";

const TRAVELCOURSE = "/travelCourse";
const TRAVELCOURSE_DETAIL = "/:id";

const LEISURE = "/leisure";
const LEISURE_DETAIL = "/:id";

const routes = {
  home: HOME,
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
