const express = require("express");
const bcrypt = require("bcrypt");
// Autentifikimi i userve - JSON Web Token
// Gjeneron nje key per userin i cili logohet, lexohet nga server
// Key ruhet tek browser (localStorage) dhe perdoret pershkembim
const app = express();
const jwt = require("jsonwebtoken");
// Modeli
const usersModel = require("../models/users");

// register
app.post("/signup", async (req, res) => {
  const userInfo = req.body; // marrja
  try {
    if (userInfo.username == " " && userInfo.fullname == "") {
      return res.status(404).send("Field are empty");
    }
    if (userInfo.password < 3) {
      return res.status(404).send("Short password");
    }

    let foundUser = await usersModel.findOne({ fullname: userInfo.fullname}).exec();

    if (foundUser) {
      return res.status(400).send("This user exist");
    } else {
      // Shtimi i user te ri
      // inkriptimi i password
      // Gjenerimi i 10 karaktereve te ndryshme
      const salt = await bcrypt.genSalt(10);
      // inkriptimi: merret password dhe në varësi gjenerohet nje kod unik dhe i bashkohet dhe salt
      let hashed = await bcrypt.hash(userInfo.password, salt);
      // info e user-ve
      let newUser = new usersModel({
        fullname: userInfo.fullname,
        username: userInfo.username,
        email: userInfo.email,
        password: hashed,
      });
      // Ruajtje
      await newUser.save();
      return res.status(200).send("User Created");
    }
  } catch (error) {
    res.status(500).send("Not created " + error);
  }
});

// login
app.post("/signin", async (req, res) => {
  // Kerkohen vetem te dhenat qe perdoret per login
  const fullname = req.body.fullname;
  // const fullname = req.body.fullname;
 

  // const username = req.body.username;
  const passwords = req.body.password;
  try {
    // kerkimin nese ekziston user
    let userGet = await usersModel.findOne({ fullname: fullname }).exec();
    //  Ne varesi te rezultatit ndodhin veprimet
    if (userGet) {
      // Ekziston duhet te behet verifikimi i passwordit
      bcrypt.compare(passwords, userGet.password, (error, result) => {
        if (result) {
          // Gjenerohet token me fjalen kyce 'secretKey' (mund te jete cfaredo)
          const token = jwt.sign({ fullname: userGet.fullname}, "secretKey");
          // Token duhet te dergohen si json
          return res.status(200).json(token);
        } else {
          return res.status(400).send("Invalid credentials");
        }
      });
    } else {
      return res.status(400).send("Invalid credentials");
    }
  } catch (error) {
    res.status(500).send("Something is wrong " + error);
  }
});

// logout
app.post("/logout", async (req, res) => {
  try {
    // Heqja e token
    // res.clearCookie('token');
    // res.status(200).send("Log out")
    localStorage.removeItem("token");
    res.redirect("/login");
  } catch (error) {
    res.status(500).send("Error " + error);
  }
});

module.exports = app;
