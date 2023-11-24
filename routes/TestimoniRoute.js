import express from "express";
import {
  getAllTestimoni,
  createTestimoni
} from "../controllers/TestimoniController.js";

const router = express.Router();
router.get("/gettestimonis", getAllTestimoni);
router.post("/createtestimoni", createTestimoni);
export default router;
