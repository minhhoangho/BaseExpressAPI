import * as Env from 'dotenv'
Env.config()

import ExpressLoader from './loaders/ExpressLoader';
import KnexLoader from './loaders/KnexLoader';
import {
  logger
} from './utils/Logging';

class App {
  static async run() {
    Promise.all([
      // new KnexLoader().boot(),
      new ExpressLoader().boot(),
    ]).then(() => {
      logger.verbose('Server OK');
    }).catch(error => {
      looger.info("Server is crashed ! ", error);
      process.exit()
    });
  }
}

App.run()