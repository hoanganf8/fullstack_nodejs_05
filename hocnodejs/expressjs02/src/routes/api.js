const express = require("express");
const cors = require("cors");
const router = express.Router();
const corsOptions = {
  origin: "http://localhost:3000",
};
router.use(cors(corsOptions));
router.use("/v1", require("./api/v1"));
module.exports = router;
