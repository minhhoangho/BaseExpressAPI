import {
  Router
} from 'express';

const routes = Router()
import userRoute from './user';
routes.use(`/${userRoute.base}`, userRoute)


export {
  routes
}