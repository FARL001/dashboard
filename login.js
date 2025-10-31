
export default async function handler(req, res) {
  const redirect = `${process.env.DISCORD_CLIENT_ID}&redirect_uri=${encodeURIComponent(process.env.DISCORD_REDIRECT_URI)}&response_type=code&scope=identify guilds`;
  res.redirect(redirect);
}
