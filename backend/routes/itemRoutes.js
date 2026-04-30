import express from "express";
import {
  createItem,
  deleteItem,
  getItemById,
  getItems,
  updateItem,
} from "../controllers/itemController.js";

const router = express.Router();

router.get("/api/items/", getItems);
router.get("/api/items/:id", getItemById);
router.post("/api/items/", createItem);
router.put("/api/items/:id", updateItem);
router.delete("/api/items/:id", deleteItem);

export default router;