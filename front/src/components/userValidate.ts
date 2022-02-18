import jsonwebtoken from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET;

export default function userValidate(headers:any) {
  let token = "";
  for (let i = 0; i < headers.length; i++) {
    if (headers[i] === "authorization") {
      token = headers[i + 1];
    }
  }
  try {
    const decoded = jsonwebtoken.verify(token, JWT_SECRET || "");
    return decoded;
  } catch (e) {
    return null;
  }
}
