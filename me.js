
export default async function handler(req, res) {
  const cookie = req.headers.cookie || "";
  const token = cookie.split("token=")[1]?.split(";")[0];
  if (!token) return res.status(401).json({ error: "Not logged in" });
  const userRes = await fetch(`https://discord.com/api/users/@me`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  const user = await userRes.json();
  res.json({ user });
}
