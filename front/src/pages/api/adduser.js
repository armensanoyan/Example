import { Client } from "pg";
import userValidate from "../../components/userValidate";

export default (req, res) => {
  debugger;
  const { firstName, secondName, email, password } = req.body;
  const headers = req.rawHeaders;
  // const
  const client = new Client();
  client.connect();
  client
    .query(
      `
    insert into "Users" 
      ("firstName", "lastName", "email", "password", "createdAt", "updatedAt") 
      values ($1, $2, $3, $4, now()::date, now()::date)
      RETURNING * 
  `,
      [firstName, secondName, email, password]
    )
    .then((result) => {
      if (result.rows.length > 0) {
        const user = result.rows[0];
        res.json(JSON.stringify(user));
      } else {
        res.json({ error: "something went wrong please try again" });
      }
    })
    .catch((e) => {
      console.error(e.stack);
    });
};
