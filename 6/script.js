function selamVer() {
  console.log("Merhaba, nasılsın?");
}

selamVer(); // "Merhaba, nasılsın?"


// ===================================


function topla(a, b) {
  return a + b;
}

let sonuc1 = topla(5, 10);
console.log("Toplam: " + sonuc1); // "Toplam: 15"


// ===================================



function selamla(isim = "Misafir") {
  console.log("Merhaba, " + isim + "!");
}

selamla("Ahmet"); // "Merhaba, Ahmet!"
selamla();        // "Merhaba, Misafir!"


// ===================================


function kareAl(sayi) {
  return sayi * sayi;
}

let sonuc = kareAl(4);
console.log("Sonuç: " + sonuc); // "Sonuç: 16"

// ===================================

let carp = function(x, y) {
  return x * y;
};

console.log("Çarpım: " + carp(3, 7)); // "Çarpım: 21"

// ===================================

let bol = (a, b) => a / b;

console.log("Bölüm: " + bol(20, 4)); // "Bölüm: 5"