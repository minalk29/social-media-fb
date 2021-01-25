module.exports = app => {
    const Registration = require("../controllers/Registration.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", Registration.create);
  
    // Retrieve all Tutorials
    router.get("/findAll", Registration.findAll);

    router.get("/:email", Registration.findOne);

    app.use('/api/Registration', router);
};