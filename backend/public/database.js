const mysql = require("mysql");
const util = require("util");

const config = {
  host: "localhost",
  user: "root",
  password: "0C35932B45C8A974F29716A9EF37A0220ADCFB4BD3F87BCB5FD63BEE810025A5",
  database: "pokemon",
};

function makeDb(config) {
  const connection = mysql.createConnection(config);

  connection.connect(function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to mySQL successfully!");
    }
  });

  return {
    query(sql, args) {
      return util.promisify(connection.query).call(connection, sql, args);
    },
    close() {
      return util.promisify(connection.end).call(connection);
    },
  };
}

db = makeDb(config);

exports.runQuery = async (query) => {
  const result = await db.query(query);
  return result;
};
