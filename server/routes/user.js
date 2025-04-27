// backend/routes/user.js
import express from "express";
import User from "../libs/models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const router = express.Router();
const JWT_TOKEN_SECRET = "snakdakdw";

// POST a new user
router.post("/register", async (req, res) => {
  const { name, password } = req.body;
  try {
    const userExist = await User.findOne({ name });

    if (userExist) {
      return res.status(400).json({ error: "User already Exist" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, password: hashedPassword });
    await newUser.save();

    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

jwt;

router.post("/login", async (req, res) => {
  const { name, password } = req.body;

  // Find user
  const existinguser = await User.findOne({ name });
  if (!existinguser) return res.status(400).json({ message: "User not found" });

  // Compare passwords
  const isMatch = await bcrypt.compare(password, existinguser.password);
  if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

  // Generate JWT
  const token = jwt.sign({ name: existinguser.name }, JWT_TOKEN_SECRET, {
    expiresIn: "1h",
  });
  console.log(token);

  res.json({ token });
});

export default router;
