import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoutes from "./routes/auth.js";
import morgan from "morgan";
import categoryRoutes from "./routes/category.js";
import productRoutes from "./routes/product.js";
import cors from "cors";

dotenv.config();

//console.log("process ==>", process);
const app = express();

//db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log("DB ERROR =>", err));

//middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// app.use((req, res, next) => {
//   console.log("THIS IS MIDDLEWARE");
//   next();
// });

// app.get("/users", (req, res) => {
//   res.json({
//     data: "Max",
//   });
// });

app.use("/api", authRoutes);
app.use("/api", categoryRoutes);
app.use("/api", productRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log("Hello, EXPRESS! " + `${port}`);
});
