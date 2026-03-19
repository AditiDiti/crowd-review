const express = require("express");
const cors = require("cors");

const app = express();

// DB
const connectDB = require("./config/db");
connectDB();

app.use(cors());
app.use(express.json());

/* =========================
   ROUTES
========================= */

// Auth
app.use("/auth", require("./routes/authRoutes"));

// Business
app.use("/businesses", require("./routes/businessRoutes"));

// Reviews
app.use("/reviews", require("./routes/reviewRoutes"));

// Admin
app.use("/admin", require("./routes/adminRoutes"));

/* =========================
   OPTIONAL: CREATE ADMIN (RUN ONCE)
========================= */

const User = require("./models/User");

app.get("/create-admin", async (req, res) => {
  try {
    const existing = await User.findOne({ username: "admin" });

    if (existing) {
      return res.send("Admin already exists");
    }

    await User.create({
      username: "admin",
      password: "123",
      role: "admin"
    });

    res.send("Admin created");
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* =========================
   ROOT
========================= */

app.get("/", (req, res) => {
  res.send("API running");
});

/* =========================
   START SERVER
========================= */

app.listen(5000, () => {
  console.log("Server running on port 5000");
});