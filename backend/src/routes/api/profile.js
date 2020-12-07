const express = require("express");
const Profile = require("../../models/Profile");
const { json } = require("express");
const router = express.Router();

// CREATE
router.post("/", async (req, res) => {
  const {
    name,
    gender,
    username,
    email,
    password,
    avatar,
    city,
    state,
    country,
  } = req.body;

  try {
    let profile = await Profile.findOne({ email });
    if (profile) {
      res.status(400).send({ error: { message: "User already exists!" } });
    }

    profile = new Profile({
      name,
      gender,
      username,
      email,
      password,
      avatar,
      city,
      state,
      country,
    });

    await profile.save();
    res.status(201).json({ message: "User created!" });
  } catch (err) {
    res.status(404);
  }
});

// READ ALL
router.get("/", async (req, res) => {
  try {
    let profiles = await Profile.find({});
    res.status(200).send(profiles);
  } catch (err) {
    res.status(404);
  }
});

// READ ONE by email
router.get("/:email", async (req, res) => {
  const email = req.params.email;
  try {
    let profile = await Profile.findOne({ email });
    res.status(200).send(profile);
  } catch (err) {
    res.status(404);
  }
});

// UPDATE ONE
router.patch("/:email", async (req, res) => {
  const email = req.params.email;
  const { password } = req.query;
  try {
    let profile = await Profile.findOneAndUpdate(
      { email },
      { password },
      { new: true }
    );
    res.status(200).send(profile);
  } catch (err) {
    res.status(404);
  }
});

// DELETE ONE
router.delete("/:email", async (req, res) => {
  const email = req.params.email;
  try {
    const profile = await Profile.findOneAndDelete({ email });
    if (!profile) {
      res.status(404);
    }

    res.status(200).send(profile);
  } catch (error) {
    res.status(404);
  }
});

module.exports = router;
