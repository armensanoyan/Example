import pg from "pg";

export default (req, res) => {
  const client = new pg.Client();
  client.connect();
  client
    .query(`select * from "Users"`)
    .then((result) => {
      res.json(JSON.stringify(result.rows));
    })
    .catch((e) => {
      console.error(e.stack);
    });
};
