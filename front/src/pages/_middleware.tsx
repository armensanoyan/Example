const jwt = require("@tsndr/cloudflare-worker-jwt");
const JWT_SECRET = process.env.JWT_SECRET;

export async function middleware(req:any) {
  if (!("http://localhost:3000/" === req.url) && !(req.method === "GET")) {
    const token = req.headers.get("authorization");
    const decoded = await jwt.verify(token, JWT_SECRET);
    if (!decoded) {
      return new Response(JSON.stringify({ error: "unauthorized user" }), {
        status: 401,
      });
    }
  }
}
