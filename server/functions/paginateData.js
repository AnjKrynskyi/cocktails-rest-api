function paginateData(data, page, perPage = 10) {
  const totalPages = Math.ceil(data.length / perPage);
  const start = (page - 1) * perPage;
  const end = start + perPage;

  if (page <= totalPages) {
    return data.slice(start, end);
  }

  return { message: `Page does not exist. Max page is ${totalPages}` };
}

module.exports = paginateData;