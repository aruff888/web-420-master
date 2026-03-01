/**
 * Author: Amanda Ruff
 * Date: 03/01/26
 * File Name: collection.js
 * Description: Mock collection class for in-memory data
 */

class Collection {
  constructor(data) {
    this.data = data;
  }

  find(query) {
    if (!query) return this.data;

    return this.data.filter(item =>
      Object.keys(query).every(key => item[key] === query[key])
    );
  }

  findOne(query) {
    return this.data.find(item =>
      Object.keys(query).every(key => item[key] === query[key])
    );
  }
}

module.exports = Collection;