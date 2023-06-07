const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const agentsRoute = require("./routers/agentsRoute");
const authRouter = require("./routers/authRouter");
const propertiesRouter = require("./routers/propertiesRouter");
app.use(cors());
const session = require("express-session");
var bodyParser = require("body-parser");
app.use(bodyParser.json({ limit: "50mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);

app.use(
  session({
    secret: "This will be secret",
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);

app.use("/uploads", express.static("./uploads"));
mongoose
  .connect(
    "mongodb+srv://RoyalAdmin:c..22MDK58cCzRE@cluster0.cuo2dvk.mongodb.net/Royal_Real_Estate?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log("Not connected " + err);
  });

app.use(agentsRoute);
app.use(authRouter);
app.use(propertiesRouter);

// Server
app.listen(5001, () => {
  console.log("Server started");
});
