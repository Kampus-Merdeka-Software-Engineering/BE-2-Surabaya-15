import express from 'express';
import {
  createTypeBed,
  getTypeBedByHotelId,
  getAllType
} from '../controllers/TypebedController.js';

const Router = express.Router ();

Router.post ('/createtypebed/:id', createTypeBed);
Router.get ('/getalltype/:id', getTypeBedByHotelId);
Router.get("/getalltypehotel", getAllType);
export default Router;
