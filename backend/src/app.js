const app = require("express")();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const routes = require("./routes");

// congiguração do body parser
app.use(bodyParser.json());

app.use(routes);

mongoose.set("useUnifiedTopology", true);
mongoose.set("useFindAndModify", false);

// configuraçãp do mondoDB
mongoose.connect(
  "mongodb://guima:guima123@ds255787.mlab.com:55787/dinamica-teste",
  { useNewUrlParser: true },
  () => {
    console.log("Banco de dados contectado");
  }
);

// // carregando o model de produto
// require("./models/Message");
// const Message = mongoose.model("Message");

app.listen(8080, () => {
  console.log("Api rodando");
});
