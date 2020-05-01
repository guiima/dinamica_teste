const { Router } = require("express");
const mongoose = require("mongoose");
const MessageController = require("./controllers/MessageController");

require("./models/Message");
const Message = mongoose.model("Message");

const routes = Router();

routes.get("/message", MessageController.index);

routes.get("/message/:id", MessageController.show);

routes.post("/message", MessageController.store);

routes.delete("/message/:id", MessageController.destroy);

module.exports = routes;
