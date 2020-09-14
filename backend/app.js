const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
//const methodOverride = require("method-override");
const pokemons = require("./public/pokemons");
const trainers = require("./public/trainers");
const info = require("./public/info");

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Backend server is online");
});

app.get("/info", info.findAll);

app.get("/search/:term", info.search);

app.get("/pokemons", pokemons.findAll);

app.post("/pokemons", pokemons.createPokemon);

app.delete("/pokemons/:id", pokemons.deletePokemon);

app.get("/trainers", trainers.findAll);

app.post("/trainers", trainers.createTrainer);

app.delete("/trainers/:uuid", trainers.deleteTrainer);

app.listen("3001", () => {
  console.log("listening to port 3001");
});
