const express = require("express");
const router = express.Router();
const User = require("../models/SignUp");
const SignIn = require("../models/SignIn");
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://pratikbulkunde03:VjTmW3TV5nJtXjqT@cluster0.1wzmt7d.mongodb.net/Property?retryWrites=true&w=majority&appName=Cluster0");

router.post("/SignIn", async (req, res) => {
  const { UserId, Password } = req.body;
  //console.log(UserId, Password);

  try {
    const userFound = await User.findOne({
      UserId: UserId,
    });
    //console.log(userFound);
    if (userFound) {
      if (userFound.Password == Password) {
        res.status(200).json({ message: "success" });
      } else {
        res
          .status(200)
          .json({ message: "Password does not match. Kindly try again." });
      }
    } else {
      res.status(200).json({
        message: "user not found.\nKindly create a user using SignUp",
      });
    }
  } catch (e) {
    res.status(404).json({ message: "an error occured on server level." });
  }
});

router.post("/addUser", async (req, res) => {
  try {
    const { UserId } = req.body;
    let getUser = await User.find({ UserId: UserId });
    if (getUser.length !== 0) {
      return res.status(200).json({
        message: "User Already Registered.\nPlease signIn using credentials",
      });
    } else {
      const data = await User.create(req.body);
      return res.status(200).json({ message: "success" });
    }
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

module.exports = router;
