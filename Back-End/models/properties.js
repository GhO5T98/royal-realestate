const mongoose = require("mongoose");

const propertiesSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
  },
  desc: {
    type: String,
    trim: true,
  },
  location: {
    type: String,
    trim: true,
  },
  type: {
    type: String,
    trim: true,
  },
  sqft: {
    type: Number,
  },
  price: {
    type: Number,
  },
  bedrooms: {
    type: Number,
  },
  bathrooms: {
    type: Number,
  },
  b_year: {
    type: Number,
  },
  ownerNr: {
    type: Number,
  },
  // createdBy: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Users',
  //   required: true,
  // },
  // imazhe
  images: [
    {
      type: String,
    },
  ],
});

const Properties = mongoose.model("Properties", propertiesSchema);
module.exports = Properties;
