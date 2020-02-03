'use strict';

import {
  jsonError,
  jsonSuccess
} from '../../../utils/Logging';
import {
  commonErrors,
} from '../../../utils/ErrorCodes';

class Service {


  /**
   * Get list
   * @param {Number} page
   * @param {Number} limit
   *
   */
  async getAll({
    page = 0,
    limit = 10
  }) {
    try {
      const result = await this.respository.getAll({
        page,
        limit
      });
      return result;
      return jsonSuccess(result);
    } catch (e) {
      throw e;
    }
  }

  /**
   * Get by id
   * @param {Number} id
   */
  async getById(id) {
    try {
      const result = await this.respository.getById(id);

      // Check result found
      if (result) {
        return jsonSuccess(result);
      }

      return jsonError(commonErrors.NOT_FOUND_ERROR);
    } catch (e) {
      throw e;
    }
  }

  /**
   * Create
   * @param {Object} model
   */
  async create(model) {
    try {
      let result = await this.respository.create(model);

      return jsonSuccess(result);
    } catch (e) {
      throw e;
    }
  }

  /**
   * Update by id
   * @param {Number} id
   * @param {Object} model
   */
  async updateById(id, model) {
    try {
      let result = await this.respository.updateById(id, model);

      // Check device type exist
      if (!result) {
        return jsonError(commonErrors.NOT_FOUND_ERROR);
      }

      return jsonSuccess(result);
    } catch (e) {
      throw e;
    }
  }

  /**
   * Delete by id
   * @param {Number} id
   */
  async deleteById(id) {
    try {
      let deletedRows = await this.respository.deleteById(id);

      if (!deletedRows) {
        return jsonError(commonErrors.NOT_FOUND_ERROR);
      }

      return jsonSuccess();
    } catch (e) {
      throw e;
    }
  }

  /**
   * Delete using condition
   * @param {Object} condition
   */
  async delete(condition) {
    try {
      const deletedRows = await this.respository.delete(condition);

      if (!deletedRows) {
        return jsonError(commonErrors.NOT_FOUND_ERROR);
      }

      return jsonSuccess();
    } catch (e) {
      throw e;
    }
  }
}

export {
  Service
};