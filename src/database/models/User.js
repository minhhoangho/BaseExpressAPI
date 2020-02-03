import Model from './Base/Model';
export default class User extends Model {
  static get tableName() {
    return 'users';
  }

  $beforeUpdate() {
    this.updatedAt = new Date().toISOString();
  }
  static get relationMappings() {}
}