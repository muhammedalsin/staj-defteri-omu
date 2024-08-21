




// ===================================



window.onload = function() {
    let veri = localStorage.getItem("myData");
    document.getElementById("sayfaGosterim").textContent = veri ? "Sayfa Yüklenirken Veri: " + veri : "Sayfada veri yok.";
};
