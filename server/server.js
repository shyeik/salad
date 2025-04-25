// backend/index.js
import express from "express";
import cors from "cors";
import connectDB from "./libs/connections.js";
import userRoutes from "./routes/user.js";

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);

// DB connection and start server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});
