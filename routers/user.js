const { Router } = require("express");
const router = new Router();
const Space = require("../models").space;
const User = require("../models").user;

router.get("/:id", async (req, res, next) => {
  try {
    const userId = parseInt(req.params.id);
    const user = await User.findByPk(userId, { include: [Space] });
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }
    res.json(user);
  } catch (e) {
    console.log(e.message);
  }
});

module.exports = router;
