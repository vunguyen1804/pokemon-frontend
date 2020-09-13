const database = require("./database");
const queries = require("./queries");

exports.findAll = async (req, res) => {
  const pokemon = await database.runQuery(queries.SELECT_ALL_POKEMON);
  return res.json({ data: pokemon });
};

exports.createPokemon = async (req, res) => {
  const { Name, Move, Type, Img, UUID } = req.body;

  const query = `
    INSERT INTO 
      pokemon(UUID, Name, Move, Type, Img) 
    VALUES 
      ("${UUID}", "${Name}", "${Move}", "${Type}", "${Img}")`;

  const data = await database.runQuery(query);

  return res.json({ data: data });
};

exports.deletePokemon = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const query = `DELETE FROM pokemon WHERE ID = "${id}"`;
  const data = await database.runQuery(query);
  return res.json({ data: data });
};
