// Pop-up promosi di halaman index
window.addEventListener("DOMContentLoaded", function () {
  if (window.location.pathname.includes("index.html") || window.location.pathname === "/") {
    alert("🎉 Diskon 20% untuk pendaftar baru minggu ini!");
  }
});

// Fungsi kirim form di halaman kontak
function submitForm() {
  alert("Pesan anda terkirim!");
}