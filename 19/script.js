






{/* // =================================== */}




document.getElementById("seçimForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Formun sayfayı yeniden yüklemesini engeller
    let secilenRenk = document.getElementById("renk").value;
    document.getElementById("seçimSonuc").textContent = "Seçilen Renk: " + secilenRenk;
});
