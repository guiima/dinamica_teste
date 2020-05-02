const mongoose = require("mongoose");

require("../models/Group");
const Group = mongoose.model("Group");

require("../models/User");
const User = mongoose.model("User");

class GroupUserController {
  async index(req, res) {
    Group.find({})
      .then((data) => {
        res.status(202).json(data);
      })
      .catch((err) => {
        throw error;
      });
  }

  async generateParticipant(req, res) {
    for (let i = 1; i <= 117; i++) {
      const user = new User({
        username: `user-${i}`,
      });

      await user
        .save()
        .then(() => {})
        .catch((error) => {
          throw error;
        });
    }

    const users = User.find({})
      .then((data) => {
        res.status(202).json(data);
      })
      .catch((err) => {
        throw error;
      });
  }

  async generateGroup(req, res) {
    await Group.deleteMany({});

    let group1 = [];
    let group2 = [];
    let group3 = [];
    let group4 = [];

    const users = await User.find({});

    for (let i = 0; i < users.length; i++) {
      const g1 = users.splice(
        parseInt(Math.random() * (users.length - 0) + 0),
        1
      );
      const g2 = users.splice(
        parseInt(Math.random() * (users.length - 0) + 0),
        1
      );
      const g3 = users.splice(
        parseInt(Math.random() * (users.length - 0) + 0),
        1
      );
      const g4 = users.splice(
        parseInt(Math.random() * (users.length - 0) + 0),
        1
      );
      group1.push(g1[0]);
      group2.push(g2[0]);
      group3.push(g3[0]);
      group4.push(g4[0]);
    }

    const g1 = new Group({
      name: "Group 1",
      users: group1,
    });

    const g2 = new Group({
      name: "Group 2",
      users: group2,
    });

    const g3 = new Group({
      name: "Group 3",
      users: group3,
    });

    const g4 = new Group({
      name: "Group 4",
      users: group4,
    });

    await g1
      .save()
      .then(() => {})
      .catch((error) => {
        throw error;
      });

    await g2
      .save()
      .then(() => {})
      .catch((error) => {
        throw error;
      });

    await g3
      .save()
      .then(() => {})
      .catch((error) => {
        throw error;
      });

    await g4
      .save()
      .then(() => {})
      .catch((error) => {
        throw error;
      });

    res.status(202).json({ message: "created groups" });
  }

  async deleteAll(req, res) {
    await Group.deleteMany({})
      .then((data) => {
        res.status(202).json({ message: "deleted" });
      })
      .catch((err) => {
        res.status(417).json({ message: err });
      });
  }
}

module.exports = new GroupUserController();
