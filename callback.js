
export default async function handler(req, res) {
  const { code } = req.query;
  if (!code) return res.status(400).send("No code provided");
  const params = new URLSearchParams({
    client_id: process.env.DISCORD_CLIENT_ID,
    client_secret: process.env.DISCORD_CLIENT_SECRET,
    grant_type: "authorization_code",
    code,
    redirect_uri: process.env.DISCORD_REDIRECT_URI,
  });
  const tokenRes = await fetch(`${process.env.DISCORD_API}/oauth2/token`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params,
  });
  const data = await tokenRes.json();
  const { access_token } = data;
  if (!access_token) return res.status(400).json({ error: "Invalid token" });
  res.setHeader("Set-Cookie", `token=${access_token}; Path=/; HttpOnly; Secure; Max-Age=3600`);
  res.redirect(`/dashboard`);
}
