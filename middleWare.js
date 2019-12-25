export const pagination = (totalItems, currentPage, pageSize, maxPages) => {
  let totalI = parseInt(totalItems);
  let size = parseInt(pageSize);
  let current = parseInt(currentPage);
  maxPages = 10;

  const totalPages = Math.ceil(totalI / size);

  if (current < 1) {
    current = 1;
  } else if (current > totalPages) {
    current = totalPages;
  }

  let startPage = parseInt(startPage);
  let endPage = parseInt(endPage);

  if (totalPages <= maxPages) {
    startPage = 1;
    endPage = totalPages;
  } else {
    let maxPagesBeforeCurrent = Math.floor(maxPages / 2);
    let maxPagesAfterCurrent = Math.ceil(maxPages / 2) - 1;
    if (current <= maxPagesBeforeCurrent) {
      startPage = 1;
      endPage = maxPages;
    } else if (current + maxPagesAfterCurrent >= totalPages) {
      startPage = totalPages - maxPages + 1;
      endPage = totalPages;
    } else {
      startPage = current - maxPagesBeforeCurrent;
      endPage = current + maxPagesAfterCurrent;
    }
  }

  let pages = Array.from(Array(endPage + 1 - startPage).keys()).map(i => startPage + i);

  return {
    totalI: totalI,
    current: current,
    size: size,
    totalPages: totalPages,
    startPage: startPage,
    endPage: endPage,
    pages: pages
  };
};

export const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true
};
