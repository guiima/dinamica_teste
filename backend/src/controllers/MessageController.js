const mongoose = require("mongoose");

require("../models/Message");
const Message = mongoose.model("Message");

class MessageController {
  async index(req, res) {
    const message = Message.find({})
      .then((data) => {
        res.status(202).json(data);
      })
      .catch((err) => {
        res.status(400).json({ error: err.message });
      });
  }

  async show(req, res) {
    const id = req.params.id;

    Message.findById(id)
      .then((data) => {
        res.status(202).json(data);
      })
      .catch((err) => {
        res.status(400).json({ error: err.message });
      });
  }

  async store(req, res) {
    const { date, username, hour, content } = req.body;

    const message = new Message({
      date: date,
      username: username,
      hour: hour,
      content: content,
    });

    message
      .save()
      .then(() => {
        // res.statusCode = 201;
        // res.send(message);
        res.status(202).json(message);
      })
      .catch((error) => {
        res.status(400).json({ error: error.message });
      });
  }

  async update(req, res) {}

  async destroy(req, res) {
    const id = req.params.id;

    Message.findByIdAndRemove(id)
      .then((data) => {
        if (data) {
          res.status(202).json({ message: "successfully deleted" });
        } else {
          res.status(400).json({ error: err.message });
        }
      })
      .catch((err) => {
        res.status(400).json({ error: err.message });
      });
  }
}

module.exports = new MessageController();
