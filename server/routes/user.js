const router = require("express").Router();
//import todo model
const userModel = require("../models/user");

//create first route --add Todo Item to database
router.post("/api/user", async (req, res) => {
  try {
    const data = req.body;
    const newMenu = new userModel(data);
    //save this item in database
    const saveItem = await newMenu.save();
    res.status(200).json(saveItem);
    return res.send("data save");
    
  } catch (err) {
    return res.json(err);
  }
});

router.get("/api/user", async (req, res) => {
  try {
    const allMenuItems = await userModel.find({});
    return res.status(200).json(allMenuItems);
  } catch (err) {
    return res.json(err);
  }
});

module.exports = router;
