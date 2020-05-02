const app = require("express")();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const routes = require("./routes");

// congiguração do body parser
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(bodyParser.json());
app.use(routes);

mongoose.set("useUnifiedTopology", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);

// configuraçãp do mondoDB
mongoose.connect(
  "mongodb://guima:guima123@ds255787.mlab.com:55787/dinamica-teste",
  { useNewUrlParser: true },
  () => {
    console.log("Banco de dados contectado");
  }
);

console.log("messageController", async () => {
  await MessageController.index;
});

app.listen(8080, () => {
  console.log("Api rodando");
});

require("./controllers/SocketController");
