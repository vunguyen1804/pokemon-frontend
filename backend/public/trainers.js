const database = require("./database");
const queries = require("./queries");

exports.findAll = async (req, res) => {
  const trainers = await database.runQuery(queries.SELECT_ALL_TRAINERS);
  return res.json({ data: trainers });
};

exports.createTrainer = async (req, res) => {
  const { Name, Img } = req.body;
  const query = `INSERT INTO trainers (Name, Img) VALUES ("${Name}", "${Img}")`;
  const data = await database.runQuery(query);
  return res.json({ data: data });
};

exports.deleteTrainer = async (req, res) => {
  const { uuid } = req.params;
  console.log(uuid);
  const query = `DELETE FROM trainers WHERE UUID = "${uuid}"`;
  const data = await database.runQuery(query);
  return res.json({ data: data });
};
