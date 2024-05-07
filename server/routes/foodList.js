const router = require("express").Router();
//import todo model
const foodListModel = require("../models/foodList");

//create first route --add Todo Item to database
router.post("/api/foodList", async (req, res) => {
  try {
    const data = req.body;
    const newMenu = new foodListModel(data);
    //save this item in database
    const saveItem = await newMenu.save();
    return res.status(200).json(saveItem);
  } catch (err) {
    return res.json(err);
  }
});

router.get("/api/foodList", async (req, res) => {
  try {
    const allMenuItems = await foodListModel.find({});
    return res.status(200).json(allMenuItems);
  } catch (err) {
    return res.json(err);
  }
});

module.exports = router;
