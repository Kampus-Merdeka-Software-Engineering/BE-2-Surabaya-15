import express from "express";
import { getAllHotel, createHotel } from "../controllers/HotelController.js";

const router = express.Router();

router.get("/gethotels", getAllHotel);
router.post("/createhotel", createHotel);

export default router;
