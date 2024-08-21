


document.getElementById("kayitForm").addEventListener("submit", function(event) {
    // Formun sayfayı yeniden yüklemesini engelle
    event.preventDefault();
    
    // Form elemanlarını al
    let isim = document.getElementById("isim").value;
    let email = document.getElementById("email").value;
    let mesaj = document.getElementById("mesaj").value;

    // Basit doğrulama: Alanların boş olup olmadığını kontrol et
    if (isim === "" || email === "" || mesaj === "") {
        document.getElementById("sonuc").textContent = "Lütfen tüm alanları doldurun.";
        document.getElementById("sonuc").style.color = "red";
    } else {
        document.getElementById("sonuc").textContent = "Form başarıyla gönderildi!";
        document.getElementById("sonuc").style.color = "green";
        // Burada verileri sunucuya gönderebilir veya başka işlemler yapabilirsiniz.
    }
});


// ===================================


