
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/api/auth/me")
      .then(res => res.json())
      .then(data => setUser(data.user));
  }, []);

  if (!user) return <div style={{textAlign:"center", marginTop:"50px"}}>جارٍ التحميل...</div>;

  return (
    <div style={{
      backgroundColor: "#ffffff",
      color: "#111111",
      minHeight: "100vh",
      padding: "40px",
      fontFamily: "Arial, sans-serif"
    }}>
      <div style={{
        maxWidth: "600px",
        margin: "0 auto",
        backgroundColor: "#f5f5f5",
        padding: "30px",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        textAlign: "center"
      }}>
        <h1 style={{marginBottom:"20px", color:"#FFD700"}}>مرحباً {user.username} 👋</h1>
        <img 
          src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`} 
          width={100} 
          style={{borderRadius:"50%", marginBottom:"20px", border:"2px solid #FFD700"}} 
        />
        <p style={{color:"#FFD700"}}>آيدي المستخدم: {user.id}</p>
        <p style={{color:"#FFD700"}}>يمكنك تخصيص البوت من هنا!</p>
      </div>
    </div>
  );
}
