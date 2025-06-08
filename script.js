document.getElementById("loginForm")?.addEventListener("submit", async (e) => {
  e.preventDefault();

  const no = document.getElementById("no").value;
  const studentId = document.getElementById("studentId").value;

  const apiUrl = "https://script.google.com/macros/s/AKfycbxQyMf_zMNuZoa_JLqa2S5LJYgxd1HwDfnMw-3_FtMH-mN2Db72O4xfqpU17zg2mebPkw/exec"; // ← เปลี่ยนตรงนี้เป็น API URL ของคุณ

  const res = await fetch(`${apiUrl}?action=login&no=${no}&studentId=${studentId}`);
  const data = await res.json();

  if (data.status === "success") {
    localStorage.setItem("user", JSON.stringify(data.user));
    window.location.href = "home.html";
  } else {
    document.getElementById("error").textContent = "ไม่พบผู้ใช้ กรุณาตรวจสอบข้อมูลอีกครั้ง";
  }
});
