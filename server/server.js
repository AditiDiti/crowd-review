const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let reviews = []; // temporary storage

// GET reviews
app.get("/reviews/:businessId", (req, res) => {
  const data = reviews.filter(r => r.businessId == req.params.businessId);
  res.json(data);
});

// POST review
app.post("/review", (req, res) => {
  reviews.push(req.body);
  res.json({ message: "Review added" });
});

app.listen(5000, () => console.log("Server running on 5000"));