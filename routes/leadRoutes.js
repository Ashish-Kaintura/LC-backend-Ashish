// server/routes/leadRoutes.js
const express = require("express");
const router = express.Router();
const Lead = require("../models/Lead");

router.post("/lead", async (req, res) => {
  const { phone, timestamp } = req.body;

  if (!phone) return res.status(400).json({ error: "Phone is required" });

  try {
    const newLead = new Lead({ phone, timestamp });
    await newLead.save();
    console.log("✅ Lead saved:", phone);
    res.status(201).json({ message: "Lead saved" });
  } catch (error) {
    console.error("❌ Lead error:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
});
router.get("/leads", async (req, res) => {
  try {
    const leads = await Lead.find();
    res.json(leads);
  } catch (error) {
    console.error("❌ Fetch leads error:", error);
    res.status(500).json({ error: "Failed to fetch leads" });
  }
});

module.exports = router;
