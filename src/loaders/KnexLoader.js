import {
  logger
} from '../utils/Logging';
import {
  exec
} from 'child_process';
export default class KnexLoader {


  async createDatabase() {

  }

  async migration() {
    await new Promise((resolve, reject) => {
      logger.verbose('Migrating database...');
      exec(
        `yarn migrate:latest`, {
          env: process.env
        },
        (err) => {
          if (err) {
            console.log(err);
            return reject();
          }
          logger.verbose('Database migration succeeded');
          return resolve();
        }
      );
    });
  }

  async rollback() {
    await new Promise((resolve, reject) => {
      logger.verbose('Rollbacking database...');
      exec(
        `yarn migrate:rollback`, {
          env: process.env
        },
        (err) => {
          if (err) {
            console.log(err);
            return reject();
          }
          logger.verbose('Database rollbacked');
          return resolve();
        }
      );
    });
  }

  async seed() {
    await new Promise((resolve, reject) => {
      logger.verbose('Seeding data for database...');
      exec(
        `yarn seed:run`, {
          env: process.env
        },
        (err) => {
          if (err) {
            console.log(err);
            return reject();
          }
          logger.verbose('Database seeded');
          return resolve();
        }
      );
    });
  }

  async boot() {
    await this.rollback();
    await this.migration();
    await this.seed();
  }
}