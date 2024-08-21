
let araba = {
  marka: "Toyota",
  model: "Corolla",
  yil: 2020
};

console.log(araba.marka); // "Toyota"
console.log(araba["model"]); // "Corolla"


// ===================================


let telefon = {
  marka: "Apple",
  model: "iPhone 13"
};

telefon.renk = "Siyah";
telefon["hafiza"] = "128GB";

console.log(telefon); 
// { marka: 'Apple', model: 'iPhone 13', renk: 'Siyah', hafiza: '128GB' }



// ===================================


let hesapMakinesi = {
  sayi1: 5,
  sayi2: 10,
  topla: function() {
      return this.sayi1 + this.sayi2;
  }
};

console.log(hesapMakinesi.topla()); // 15



// ===================================


let kitap1 = {
  ad: "JavaScript'e Giriş",
  yazar: "John Doe",
  yil: 2021
};

for (let ozellik in kitap1) {
  console.log(ozellik + ": " + kitap1[ozellik]);
}
// Çıktı:
// ad: JavaScript'e Giriş
// yazar: John Doe
// yil: 2021



// ===================================



let ogrenciler = [
  { isim: "Ali", yas: 20 },
  { isim: "Veli", yas: 22 },
  { isim: "Ayşe", yas: 19 }
];

ogrenciler.forEach(function(ogrenci) {
  console.log(ogrenci.isim + " - " + ogrenci.yas);
});
// Çıktı:
// Ali - 20
// Veli - 22
// Ayşe - 19




// ===================================


let kitap = {
  baslik: "JavaScript: The Good Parts",
  yazar: "Douglas Crockford",
  yil: 2008
};

let { baslik, yazar } = kitap;

console.log(baslik); // "JavaScript: The Good Parts"
console.log(yazar); // "Douglas Crockford"








