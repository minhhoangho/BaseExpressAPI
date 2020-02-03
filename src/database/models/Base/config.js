import {
  Model
} from 'objection';
import Knex from '../../connection';

Model.knex(Knex);

export {
  Model
};