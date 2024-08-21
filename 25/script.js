




// Sayfa yüklendiğinde mevcut rengi uygula
window.onload = function() {
    let renk = localStorage.getItem('seciliRenk');
    if (renk) {
        document.body.style.backgroundColor = renk;
        document.getElementById("renkGoster").textContent = "Mevcut Renk: " + renk;
    }
};

// Form gönderildiğinde renk tercihini sakla
document.getElementById("renkForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Formun sayfayı yeniden yüklemesini engeller

    let renk = document.getElementById("renk").value;
    localStorage.setItem('seciliRenk', renk);
    document.body.style.backgroundColor = renk;
    document.getElementById("renkGoster").textContent = "Mevcut Renk: " + renk;
});
// ===================================


