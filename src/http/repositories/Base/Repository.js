'use strict';

class Repository {

  constructor(model) {
    this.model = model;
    this.modelName = model.getTableName();
  }

  async getAll({
    page = 0,
    limit = 10,
    condition = {},
    include = [],
    attributes,
    order = [
      ['id', 'DESC']
    ],
    plain = false,
    through,
    group = null
  }) {
    if (this.model.rawAttributes && this.model.rawAttributes.deleted_at) {
      condition.deleted_at = null;
    }

    /** Option to query */
    const options = {
      order,
      where: condition,
      include,
      distinct: true,
      plain,
      through,
      group,
    };

    if (attributes) {
      options.attributes = attributes;
    }

    if (limit && page) {
      options.limit = limit;
      options.offset = (page - 1) * limit;
    }
    return this.model.query().where(condition).orderBy('id', 'desc').page(page, limit);
    // return this.model.findAndCountAll(options);
  }
  async getById(id) {
    return this.model.query().findById(id);
  }

  async getOne(clauses = {}, columns = ['*']) {
    return this.model.query().findOne(clauses).select(columns);
  }

  async createOne(payload) {
    return this.model.query().insert(payload).returning('*');
  }

  async updateById(id, payload) {
    return this.model.query().patchAndFetchById(id, payload);
  }

  async deleteById(id) {
    return this.model.query().deleteById(id);
  }
}

export {
  Repository
};