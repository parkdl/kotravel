import { api } from "../../api";

const typeNum = [12, 14, 15, 25, 28, 32, 38, 39];

const path = [
  "/tourist/",
  "/cultural/",
  "/festival/",
  "/travelCourse/",
  "/leisure/",
  "/rooms/",
  "/shopping/",
  "/food/"
];

export const detailCommon = async req => {
  const {
    params: { id }
  } = req;
  const parsedId = parseInt(id);
  return await api.get("detailCommon", {
    params: {
      contentId: parsedId,
      defaultYN: "Y",
      addrinfoYN: "Y",
      overviewYN: "Y",
      firstImageYN: "Y"
    }
  });
};

export const detailImage = async req => {
  const {
    params: { id }
  } = req;
  const parsedId = parseInt(id);
  return await api.get("detailImage", {
    params: {
      contentId: parsedId,
      imageYN: "Y"
    }
  });
};

export const detailInfo = async req => {
  const {
    params: { id }
  } = req;
  const parsedId = parseInt(id);

  try {
    for (var i = 0; i < path.length; i++) {
      const pathname = req._parsedUrl.pathname.includes(path[i]);

      if (pathname === true) {
        return await api.get("detailInfo", {
          params: {
            contentId: parsedId,
            contentTypeId: typeNum[i]
          }
        });
      }
    }
  } catch (error) {
    console.log(error);
  }
};

export const detailIntro = async req => {
  const {
    params: { id }
  } = req;

  const parsedId = parseInt(id);

  try {
    for (var i = 0; i < path.length; i++) {
      const pathname = req._parsedUrl.pathname.includes(path[i]);

      if (pathname === true) {
        return await api.get("detailIntro", {
          params: {
            contentId: parsedId,
            contentTypeId: typeNum[i]
          }
        });
      }
    }
  } catch (error) {
    console.log(error);
  }
};
