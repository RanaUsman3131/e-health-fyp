const express = require("express");
const router = express.Router();

// Route files
const cities = require("./cities");
const clients = require("./clients");
const contacts = require("./contacts");
const contact_types = require("./contact_types");
const countries = require("./countries");
const dhwc_specialists = require("./dhwc_specialists");
const llc_managements = require("./llc_managements");
const marital_status = require("./marital_status");
const operations = require("./operations");
const sals = require("./sals");
const services = require("./services");
const states = require("./states");
const taxes = require("./taxes");
const addresses = require("./addresses");
const employments = require("./employments");
const { jsonResponseFormat } = require("../middlewares/jsonResponseFormat");

router.use(jsonResponseFormat);

router.use("/cities", cities);
router.use("/clients", clients);
router.use("/contacts", contacts);
router.use("/contact_types", contact_types);
router.use("/countries", countries);
router.use("/dhwc_specialists", dhwc_specialists);
router.use("/llc_managements", llc_managements);
router.use("/marital_status", marital_status);
router.use("/operations", operations);
router.use("/sals", sals);
router.use("/services", services);
router.use("/states", states);
router.use("/taxes", taxes);
router.use("/addresses", addresses);
router.use("/employments", employments);
module.exports = router;
