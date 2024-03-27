const express = require("express");
const router = express.Router();
const Property = require("../models/Property");
const mongoose = require("mongoose");
const path = require("path");
const multer = require("multer");

mongoose.connect("mongodb+srv://pratikbulkunde03:VjTmW3TV5nJtXjqT@cluster0.1wzmt7d.mongodb.net/Property?retryWrites=true&w=majority&appName=Cluster0").then(() => {
  console.log("Connected to MongoDb");
});
const localStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./Images");
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: localStorage });

router.get("/all", async (req, res) => {
  try {
    let data = await Property.find();
    res.send(data);
  } catch (e) {
    res.status(500).json({ message: "failed" });
  }
});

router.post("/addProperty", async (req, res) => {
    const {
        PropertyType,Negotiable,Price,Ownership,
        PropertyAge,PropertyApproved,PropertyDescription,BankLoan,
        Length,Breadth,Area,AreaUnit,NoOfBHK,NoOfFloor,PropertyOwnership,
        Attached,WesternToilet,Furnished,CarParking,Lift,Electricity,
        Facing,Name,Mobile,PostedBy,SalesType,FeaturedPackage,PPD_Package,
        Email,City,AreaType,Pincode,Address,Landmark,Latitude,Longitude
    } = req.body;
    console.log(req.file, req.body)
    let PropertyImage="abc";
    if (req.file){
        PropertyImage = "/Images/"+ req.file.filename;
    }
  try {
    // const data = JSON.parse(req.body.data);
    // const propertyData = {
    //   ...data,
    //   PropertyImage: req.file.path,
    // };
    const property = await Property.create(req.body);
    res.status(200).json({ message: "success" });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

router.put("/updateProperty", async (req, res) => {
  const {
      PropertyType,Negotiable,Price,Ownership,
      PropertyAge,PropertyApproved,PropertyDescription,BankLoan,
      Length,Breadth,Area,AreaUnit,NoOfBHK,NoOfFloor,PropertyOwnership,
      Attached,WesternToilet,Furnished,CarParking,Lift,Electricity,
      Facing,Name,Mobile,PostedBy,SalesType,FeaturedPackage,PPD_Package,
      Email,City,AreaType,Pincode,Address,Landmark,Latitude,Longitude
  } = req.body;
  console.log(req.file, req.body)
  let PropertyImage="abc";
  if (req.file){
      PropertyImage = "/Images/"+ req.file.filename;
  }
try {
  // const data = JSON.parse(req.body.data);
  // const propertyData = {
  //   ...data,
  //   PropertyImage: req.file.path,
  // };
  const property = await Property.updateOne(req.body);
  res.status(200).json({ message: "success" });
} catch (e) {
  res.status(500).json({ message: e.message });
}
});



router.post("/PropertyDetailsById", async (req, res) => {
    const {_id} = req.body;
    console.log(_id);

    try {
        

        try {
            let data = await Property.findOne({ _id: _id });
            
            if (!data) {
                return res.status(404).json({ message: "Property not found" });
            }

            res.send(data);
        } catch (e) {
            console.error("Error fetching property details:", e); 
            res.status(500).json({ message: "Failed to fetch property details" });
        }
    } catch (e) {
        console.error("Invalid _id format:", e); 
        return res.status(400).json({ message: "Invalid _id format" });
    }
});


module.exports = router;
