const database = require("./database");
const queries = require("./queries");
const { exportDefaultSpecifier } = require("@babel/types");

exports.search = async (req, res) => {
  const { term } = req.params;

  const query = `SELECT DISTINCT t.UUID, t.Name, t.Img 
                 FROM trainers t, pokemon p 
                 WHERE t.Name = "${term}" or (p.Name = "${term}" and p.UUID = t.UUID);`;

  const data = await database.runQuery(query);

  // console.log("query: ", query);
  // console.log("result: ", data);
  return res.json({ data: data });
};

exports.findAll = async (req, res) => {
  const trainers = await database.runQuery(queries.SELECT_ALL_TRAINERS);
  const pokemon = await database.runQuery(queries.SELECT_ALL_POKEMON);
  const data = prepareData(trainers, pokemon);
  return res.json({ data: data });
};

prepareData = (trainers, pokemon) => {
  // res = UUID -> {trainer: ..., arr : [] ;
  var res = new Map();

  for (var i = 0; i < trainers.length; ++i) {
    res[trainers[i].UUID] = { ...trainers[i], pokemons: [] };
  }

  for (var i = 0; i < pokemon.length; ++i) {
    res[pokemon[i].UUID].pokemons.push(pokemon[i]);
  }

  return res;
};
