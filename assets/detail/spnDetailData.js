import { spnApi } from "../../api";

const typeNum = [76, 78, 85, 75, 80, 79, 82, 77];

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
  return await spnApi.get("detailCommon", {
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
  return await spnApi.get("detailImage", {
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
        return await spnApi.get("detailInfo", {
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
        return await spnApi.get("detailIntro", {
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
