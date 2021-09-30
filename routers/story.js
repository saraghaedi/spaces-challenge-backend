const { Router } = require("express");
const router = new Router();
const Space = require("../models").space;
const Story = require("../models").story;
const authMiddleWare = require("../auth/middleware");

router.delete("/:id", async (req, res, next) => {
  try {
    const storyToBeDeleted = await Story.findByPk(parseInt(req.params.id));
    if (!storyToBeDeleted) {
      return res.status(404).send({ message: "story not found" });
    }
    storyToBeDeleted.destroy();
    res.status(204).send();
  } catch (e) {
    console.log(e.message);
  }
});

router.post("/", authMiddleWare, async (req, res, next) => {
  const { name, content, imageUrl, spaceId } = req.body;
  if (!name || !spaceId) {
    return res.status(400).send("Please provide a name or space id");
  }
  try {
    const newStory = await Story.create({
      name,
      content,
      imageUrl,
      spaceId,
    });
    res.status(201).json(newStory);
  } catch (e) {
    console.log(e.message);
  }
});

module.exports = router;
