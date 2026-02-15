class Collection {
  constructor(data = []) {
    this.data = data;
  }

  insert(item) {
    this.data.push(item);
    return item;
  }

  delete(id) {
    const index = this.data.findIndex(item => item.id === id);
    if (index === -1) {
      throw new Error("Item not found");
    }
    this.data.splice(index, 1);
  }

  getAll() {
    return this.data;
  }
}

module.exports = Collection;
