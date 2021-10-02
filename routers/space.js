const { Router } = require("express");
const router = new Router();
const Space = require("../models").space;
const Story = require("../models").story;
const authMiddleWare = require("../auth/middleware");

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

router.put("/:id", authMiddleWare, async (req, res, next) => {
  try {
    const spaceId = parseInt(req.params.id);
    const spaceToBeUpdated = await Space.findByPk(spaceId );
    if (!spaceToBeUpdated) {
      return res.status(404).send({ message: "Space not found" });
    }
    const { title, description, backgroundColor, color } = req.body;
    if (!title) {
      return res.status(400).send({ message: "enter valid data" });
    }
    const updatedSpace = await spaceToBeUpdated.update({
      title,
      description,
      backgroundColor,
      color,
    });
    res.json(updatedSpace);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

module.exports = router;
