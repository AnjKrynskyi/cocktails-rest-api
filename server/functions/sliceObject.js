const paginateData = require('./paginateData');

function sliceObject(obj, page, perPage) {
  const keys = Object.keys(obj);
  const chunk = paginateData(keys, page, perPage);

  if (chunk instanceof Array) {
    const result = chunk.reduce((result, key) => {
      result[key] = obj[key];
      return result;
    }, {});
  
    return result;
  }

  if (chunk instanceof Object) {
    return chunk;
  }

  return {message: 'Invalid type of data'};
}

module.exports = sliceObject;