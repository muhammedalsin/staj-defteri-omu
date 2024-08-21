

let araba = {
  marka: "Toyota",
  model: "Corolla",
  yil: 2022
};

console.log("Araba Markası: " + araba.marka); // "Araba Markası: Toyota"
console.log("Araba Modeli: " + araba.model); // "Araba Modeli: Corolla"
console.log("Araba Yılı: " + araba.yil);     // "Araba Yılı: 2022"


// ===================================



let ogrenci = {
  isim: "Ali",
  soyisim: "Yılmaz",
  yas: 20,
  tamIsim: function() {
      return this.isim + " " + this.soyisim;
  }
};

console.log("Öğrencinin Tam Adı: " + ogrenci.tamIsim()); // "Öğrencinin Tam Adı: Ali Yılmaz"
