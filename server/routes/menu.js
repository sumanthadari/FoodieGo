const router = require("express").Router();
//import todo model
const menuModel = require("../models/menu");

//create first route --add Todo Item to database
router.post("/api/menu", async (req, res) => {
  try {
    const data = req.body;
    const newMenu = new menuModel(data);
    //save this item in database
    const saveItem = await newMenu.save();
    res.status(200).json(saveItem);
    res.send("data save");
    return;
  } catch (err) {
    res.json(err);
    return;
  }
});

router.get("/api/menu", async (req, res) => {
  try {
    const allMenuItems = await menuModel.find({});
    res.status(200).json(allMenuItems);
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
