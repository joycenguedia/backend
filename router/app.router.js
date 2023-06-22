 const controller = require("../controller/app.controller");
 const router = require("express").Router();

 router.get("/portfolio", controller.portfolioAppRoute);
 router.get("/testimonial", controller.testimonialsAppRoute);

 module.exports = router