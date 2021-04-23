module.exports = (app) => {
    const csv = require("../controllers/exportToCSV.controller");
  
    var router = require("express").Router();
  
    router.get("/csv", csv.generateCSV);
  
    app.use("/api", router);
  };
  