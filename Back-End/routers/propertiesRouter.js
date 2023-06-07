const express = require("express");
const propertiesModel = require("../models/properties");
const app = express();
// const cloudinary = require("cloudinary").v2;

// // Configuration
// // cloudinary.config({
// //     cloud_name: "dqwfmm7h5",
// //     api_key: "563348872992911",
// //     api_secret: "eP_9v8nJDYRDWYJG9Dqc91XKx04"
// //   });

app.post("/listproperty", async (req, res) => {
  try {
    const newProperty = new propertiesModel(req.body);
    await newProperty.save();
    res.status(200).send(newProperty);
  } catch (err) {
    res.status(500).send("Not created" + err);
  }
});

// Read Properties
app.get("/get_all", async (req, res) => {
  try {
    const properties = await propertiesModel.find({});
    res.status(200).send(properties);
  } catch (err) {
    res.status(500).send("Date not shown" + err);
  }
});

// Read Property
app.get("/getPropertyDetail/:id", async (req, res) => {
  try {
    const propertyId = req.params.id;
    const properties = await propertiesModel.findById({ _id: propertyId });
    res.status(200).send(properties);
  } catch (err) {
    res.status(500).send("Info not shown " + err);
  }
});

//Update Property
app.patch("/updateProperty/:id", async (req, res) => {
  try {
    const propertyId = req.params.id;
    const propertyUpdate = req.body;
    const propertyUpd = await propertiesModel.findByIdAndUpdate(
      { _id: propertyId },
      { $set: propertyUpdate },
      { new: true }
    );
    res.status(200).send(propertyUpd);
  } catch (err) {
    res.status(500).send("Planet not updated " + err);
  }
});

//Delete Property
app.delete("/delete/:id", async (req, res) => {
  try {
    const propertyId = req.params.id;
    await propertiesModel.deleteOne({ _id: propertyId });
    res.status(200).send("Property Deleted");
  } catch (err) {
    res.status(500).send("Property not deleted " + err);
  }
});

module.exports = app;
