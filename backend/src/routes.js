const { Router } = require("express");
const mongoose = require("mongoose");
// const MessageController = require("./controllers/MessageController");
const GroupUserController = require("./controllers/GroupUserController");

require("./models/Message");
const Message = mongoose.model("Message");

require("./models/Group");
const Group = mongoose.model("Group");

const routes = Router();

routes.get("/group", GroupUserController.index);

routes.delete("/groupdelete", GroupUserController.deleteAll);

routes.post("/groupgenerate", GroupUserController.generateGroup);

routes.post("/generateparticipant", GroupUserController.generateParticipant);

module.exports = routes;
