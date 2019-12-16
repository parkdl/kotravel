import { api } from "../api";

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

export const detailIntro = async req => {
  const {
    params: { id }
  } = req;
  const parsedId = parseInt(id);
  return await api.get("detailIntro", {
    params: {
      contentId: parsedId,
      contentTypeId: 12
    }
  });
};

export const detailInfo = async req => {
  const {
    params: { id }
  } = req;
  const parsedId = parseInt(id);
  return await api.get("detailInfo", {
    params: {
      contentId: parsedId,
      contentTypeId: 12
    }
  });
};
