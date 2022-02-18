import { Client } from "pg";
import jsonwebtoken from "jsonwebtoken";
const { JWT_SECRET } = process.env;

export default async (req, res) => {
  const { username, password } = req.body;
  debugger;
  const client = new Client();
  await client.connect();
  const result = await client.query(
    `
    SELECT * from "Users" where "firstName" = $1 and "password" = $2
  `,
    [username, password]
  );
  await client.end();
  if (result.rows.length > 0) {
    const user = result.rows[0];
    const token = jsonwebtoken.sign(
      {
        userId: user.id,
      },
      JWT_SECRET
    );
    user.token = token;
    res.json(user);
  } else {
    res.json({ error: "wrong login or password" });
  }
};
