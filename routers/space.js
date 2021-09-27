const { Router } = require("express");
const router = new Router();
const Space = require("../models").space;
const Story = require("../models").story;

// Get all Spaces

router.get("/", async (req, res, next) => {
  try {
    const spaces = await Space.findAll();
    res.json(spaces);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

//Get a specific space by id, include its stories

router.get("/:id", async (req, res, next) => {
  try {
    const spaceId = parseInt(req.params.id);
    const space = await Space.findByPk(spaceId, { include: [Story] });
    if (!space) {
      return res.status(404).send({ message: "Space not found" });
    }
    res.json(space);
  } catch (e) {
    console.log(e.message);
  }
});

module.exports = router;
