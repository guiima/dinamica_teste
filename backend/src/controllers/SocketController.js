const mongoose = require("mongoose");
const Koa = require("koa");
const http = require("http");
const socket = require("socket.io");

const app2 = new Koa();
const server = http.createServer(app2.callback());
const io = socket(server);

const SERVER_HOST = "localhost";
const SERVER_PORT = 8081;

require("../models/Message");
const Message = mongoose.model("Message");

require("../models/User");
const User = mongoose.model("User");

io.on("connection", (socket) => {
  console.log("[IO] Connection => Server has a new connection");

  socket.on("chat.connected", async (data) => {
    const user = new User({
      username: data.username,
    });
    try {
      await user.save();

      User.find({})
        .then((data) => {
          io.emit("chat.connected", data);
        })
        .catch((err) => {
          throw error;
        });
    } catch (error) {
      throw error;
    }
  });

  socket.on("chat.message", (data) => {
    const message = new Message({
      date: data.date,
      username: data.username,
      hour: data.hour,
      content: data.content,
    });

    message
      .save()
      .then(() => {
        io.emit("chat.message", data);
      })
      .catch((error) => {
        throw error;
      });
  });

  socket.on("show.message", async (data) => {
    await Message.find({})
      .then((data) => {
        io.emit("show.message", data);
      })
      .catch((err) => {
        throw error;
      });
  });

  socket.on("message.private", async (data) => {
    await Message.find({ username: data.username })
      .then((data) => {
        io.emit("show.message", data);
      })
      .catch((err) => {
        throw error;
      });
  });

  socket.on("message.date", async (data) => {
    await Message.find({ date: data.date })
      .then((data) => {
        io.emit("show.message", data);
      })
      .catch((err) => {
        throw error;
      });
  });

  socket.on("chat.disconnect", async (data) => {
    try {
      await User.findOneAndRemove({ username: data.username });

      User.find({})
        .then((data) => {
          io.emit("chat.connected", data);
        })
        .catch((err) => {
          throw error;
        });
    } catch (error) {
      throw error;
    }
  });

  socket.on("disconnect", () => {
    console.log("[SCOKET] Disconnect => A connection was disconnected");
  });
});

server.listen(SERVER_PORT, SERVER_HOST, () => {
  console.log(
    `[HTTP] Listen => Server is running at http://${SERVER_HOST}:${SERVER_PORT}`
  );
});
