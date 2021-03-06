export default class BaseRepository {
  data = [];

  all() {
    return this.data;
  }

  find(id) {
    const result = this.data.find(entity => entity.id === id);
    if (!result) {
      throw new Error('Entity not found');
    }
    return result;
  }

  findAllBy(params) {
    return params.filter(this.data, params);
  }

  findBy(params) {
    const result = this.findAllBy(params);
    return result.length > 0 ? result[0] : null;
  }

  save(entity) {
    this.data.push(entity);
  }
}
