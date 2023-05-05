import express from "express";

const router = express.Router();

//middleware
import { requireSignin, isAdmin } from "../middleware/auth.js";

//controllers
import {
  create,
  update,
  remove,
  list,
  read,
  productsByCategory,
} from "../controllers/category.js";

router.post("/category", requireSignin, isAdmin, create);
router.put("/category/:categoryId", requireSignin, isAdmin, update);
router.delete("/category/:categoryId", requireSignin, isAdmin, remove);
router.get("/categories", list);
router.get("/category/:slug", read);
router.get("/products-by-category/:slug", productsByCategory);

export default router;

//CRUD
