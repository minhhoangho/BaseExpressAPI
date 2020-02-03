import express from 'express';
import http from 'http';
import morgan from 'morgan';
import {
  routes
} from '../routes/api';
export default class ExpressLoader {
  constructor() {
    this.app = express()
    this.server = http.Server(this.app)
  }

  setting() {
    // logger
    this.app.use(morgan('dev'));


    this.app.use(bodyParser.urlencoded({
      extended: false
    }));
    this.app.use(bodyParser.json());

    // 3rd party middleware

    /** Apply CORS settings */
    this.app.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

      next();
    });

  }
  boot() {
    this.app.use('/api/v1/', routes);
    this.server.listen(process.env.PORT || 3000, () => {
      console.log(`Server running at: http://${process.env.APP_HOST||'localhost'}:${process.env.APP_PORT||'3000'}`);
    });
  }
}