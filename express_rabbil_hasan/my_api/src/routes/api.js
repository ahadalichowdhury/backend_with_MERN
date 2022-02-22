const express = require("express");
const helloController = require("../controllers/helloController")

const router = express.Router();

//this is my get method routing
router.get("/hello-get", helloController.Hello);

//this is my post method routing
router.post("/hello-post",helloController.Hello);

module.exports = router;

