import express from "express";
import { getAllHotel, createHotel, getHotel } from "../controllers/HotelController.js";

const router = express.Router();

router.get("/gethotels", getAllHotel);
router.get("/gethotel/:id", getHotel);
router.post("/createhotel", createHotel);

export default router;
