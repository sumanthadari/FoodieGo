const router = require("express").Router();
//import todo model
const menuListModel = require("../models/menuList");

//create first route --add Item to database
router.post("/api/menuList", async (req, res) => {
  try {
    const data = req.body;
    const newMenu = new menuListModel(data);
    //save this item in database
    const saveItem = await newMenu.save();
    res.status(200).json(saveItem);
    res.send("data save");
    return;
  } catch (err) {
    res.json(err);
  }
});

router.get("/api/menuList", async (req, res) => {
  try {
    const allMenuItems = await menuListModel.find({});
    res.status(200).json(allMenuItems);
    return;
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
