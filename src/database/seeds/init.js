import {
  TruncateTable
} from './helper/TruncateTables';
import {
  Factory
} from './helper/factory';



export const seed = async knex => {
  // await TruncateTable(knex);
  await knex('users').insert(Factory.users())
}