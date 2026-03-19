const User = require("../models/User");

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username, password });

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    res.json({
      message: "Login successful",
      role: user.role
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};