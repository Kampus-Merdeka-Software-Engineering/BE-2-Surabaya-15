import express from 'express';
import {
  createTypeBed,
  getTypeBedByHotelId,
} from '../controllers/TypebedController.js';

const Router = express.Router ();

Router.post ('/createtypebed/:id', createTypeBed);
Router.get ('/getalltype/:id', getTypeBedByHotelId);
export default Router;
