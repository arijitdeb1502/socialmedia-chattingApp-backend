const mongoose = require('mongoose');

const formatMongoData = (data) => {
  if (Array.isArray(data)) {
    let newDataList = [];
    for (value of data) {
      newDataList.push(value.toObject());
    }
    return newDataList;
  }
  return data.toObject();
}

module.exports = {
    formatMongoData: formatMongoData
}