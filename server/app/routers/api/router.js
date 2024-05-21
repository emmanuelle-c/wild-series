const express = require("express");

const router = express.Router();
const { sayWelcome } = require("../../controllers/sayActions");

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */
router.get("/", sayWelcome);

const itemsRouter = require("./items/router");

router.use("/items", itemsRouter);

const programsRouter = require("./programs/router");

router.use("/programs", programsRouter);

/* ************************************************************************* */

module.exports = router;
