const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");

const app = express();
//use express.json() to get data into json format
app.use(express.json());
app.use(cors());
//Port
const PORT = process.env.PORT || 5000;
//import routes
const usersDetails = require("./routes/user");
const personDetails = require("./routes/person");

const menuListDetails = require("./routes/menuList");
const foodListDetails = require("./routes/foodList");
const delivery_DetailsDetails = require("./routes/delivery_Details");

//connect to mongodb ..
mongoose
  .connect(process.env.DB_CONNECT)
  .then(() => console.log("Database connected"))
  .catch((err) => console.log(err));

app.use("/", usersDetails);
app.use("/", personDetails);
app.use("/", menuListDetails);
app.use("/", foodListDetails);
app.use("/", delivery_DetailsDetails);
app.post("/items", (req, res) => {
  res.send("Hey please post these items at DataBase");
});

//connect to server
app.listen(PORT, () => console.log("Server connected"));
