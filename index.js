import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import fileUpload from 'express-fileupload';
import db from './config/Database.js';
import HotelRoute from './routes/HotelRoute.js';
import TestimoniRoute from './routes/TestimoniRoute.js';
import BokingRoute from './routes/BokingRoute.js';
import TypebedRoute from './routes/TypebedRoute.js';

dotenv.config ();
const app = express ();

// migrasi

// (async () => {
//   await db.sync ();
// }) ();

// end migrasi
app.use (
  cors ({
    credentials: true,
  })
);
app.use (express.json ());
app.use (fileUpload ());
app.use (express.static ('public'));
app.use (HotelRoute);
app.use (TestimoniRoute);
app.use (BokingRoute);
app.use (TypebedRoute);

app.listen (process.env.APP_PORT, () => {
  console.log (`Server is running in port ${process.env.APP_PORT}...`);
});
