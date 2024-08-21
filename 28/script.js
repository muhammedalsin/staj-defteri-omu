



document.getElementById("girisForm").addEventListener("submit", function(event) {
    // Formun sayfayı yeniden yüklemesini engelle
    event.preventDefault();

    // Kullanıcı adını al
    let kullaniciAdi = document.getElementById("kullaniciAdi").value;

    // Dinamik selamlaşma mesajını güncelle
    if (kullaniciAdi.trim() === "") {
        document.getElementById("selamMesaj").textContent = "Lütfen bir kullanıcı adı girin.";
        document.getElementById("selamMesaj").style.color = "red";
    } else {
        document.getElementById("selamMesaj").textContent = "Merhaba, " + kullaniciAdi + "!";
        document.getElementById("selamMesaj").style.color = "green";
    }
});
// ===================================


