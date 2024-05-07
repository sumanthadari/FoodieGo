const router = require("express").Router();
const person = require("../models/person");
//import todo model
const PersonModel = require("../models/person");

//create first route --add Item to database
router.post("/api/person", async (req, res) => {
  try {
    const data = req.body;
    const newPerson = new PersonModel(data);
    //save this item in database
    const saveItem = await newPerson.save();
    res.status(200).json(saveItem);
    res.send("data save");
  } catch (err) {
    res.json(err);
  }
});

router.get("/api/person", async (req, res) => {
  try {
    const allTodoItems = await PersonModel.find({});
    res.status(200).json(allTodoItems);
  } catch (err) {
    res.json(err);
  }
});

router.get("api/person:workType", async (req, res) => {
  try {
    const workType = req.params.workType;
    if (workType == "chief" || workType == "manager" || workType == "waiter") {
      const allTodoItems = await PersonModel.find({ work: workType });
      res.status(200).json(allTodoItems);
    } else {
      res.status(404).json({ error: "invalid work type" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "internal Server Error" });
  }
});

module.exports = router;
