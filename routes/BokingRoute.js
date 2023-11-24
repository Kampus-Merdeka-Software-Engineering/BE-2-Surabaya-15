import express from 'express';
import {getBoking, createBoking} from '../controllers/BokingController.js';

const Router = express.Router ();

Router.get ('/getboking', getBoking);
Router.post ('/createbooking/:id', createBoking);
export default Router;
