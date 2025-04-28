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

//Middle ware to verify the jwt token
const verifyToken = (req, res, net) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.statues(401).json({ message: "no token, authorization denied" });
  }
  try {
    const tokenWithoutBearer = token.split(" ")[1];
    const decoded = jwt.verify(tokenWithoutBearer, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};

// Routes
app.use("/api/users", userRoutes(verifyToken));

// DB connection and start server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});
