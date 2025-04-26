// backend/routes/user.js
import express from "express";
import User from "../libs/models/User.js";
import bcrypt from "bcrypt";

const router = express.Router();

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

export default router;
