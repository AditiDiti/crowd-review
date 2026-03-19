const Business = require("../models/Business");

exports.getBusinesses = async (req, res) => {
  try {
    const data = await Business.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getBusinessById = async (req, res) => {
  try {
    const data = await Business.findById(req.params.id);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};