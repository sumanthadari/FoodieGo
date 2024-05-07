const router = require("express").Router();
//import todo model
const delivery_DetailsModel = require("../models/delivery_Details");

//create first route --add Todo Item to database
router.post("/api/delivery_Details", async (req, res) => {
  try {
    const data = req.body;
    const newMenu = new delivery_DetailsModel(data);
    //save this item in databases
    const saveItem = await newMenu.save();
    res.status(200).json(saveItem);
    res.send("data save");
    return;
  } catch (err) {
    res.json(err);
    return;
  }
});

router.get("/api/delivery_Details", async (req, res) => {
  try {
    const allMenuItems = await delivery_DetailsModel.find({});
    res.status(200).json(allMenuItems);
    return;
  } catch (err) {
    res.json(err);
    return;
  }
});

module.exports = router;
