const express = require("express");
const routes = express.Router();
const connection = require("./database/connection");

const ProductController = require("./controllers/ProductController");

routes.post("/product", ProductController.save);
routes.get("/", ProductController.list);
routes.put("/product/:id", ProductController.update);
routes.delete("/product/:id", ProductController.delete);

module.exports = routes;
