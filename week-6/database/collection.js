class Collection {
  constructor(data) {
    this.data = data;
  }

  findById(id) {
    return this.data.find(item => item.id === id);
  }

  update(id, newData) {
    const item = this.findById(id);
    if (!item) return null;

    Object.assign(item, newData);
    return item;
  }
}

module.exports = Collection;