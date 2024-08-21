let yas = 18;

if (yas >= 18) {
    console.log("Reşitsiniz.");
}


// ===================================


let havaDurumu = "yağmurlu";

if (havaDurumu === "güneşli") {
    console.log("Dışarı çık ve yürüyüş yap.");
} else {
    console.log("Evde kal ve kitap oku.");
}

// ===================================


let not = 85;

if (not >= 90) {
    console.log("Notunuz: A");
} else if (not >= 80) {
    console.log("Notunuz: B");
} else if (not >= 70) {
    console.log("Notunuz: C");
} else {
    console.log("Notunuz: F");
}

// ===================================


let yas1 = 16;
let izin = (yas1 >= 18) ? "Girebilirsiniz" : "Giremezsiniz";

console.log(izin); // "Giremezsiniz"

// ===================================

let gun = 3;
let gunAdi;

switch (gun) {
    case 1:
        gunAdi = "Pazartesi";
        break;
    case 2:
        gunAdi = "Salı";
        break;
    case 3:
        gunAdi = "Çarşamba";
        break;
    case 4:
        gunAdi = "Perşembe";
        break;
    case 5:
        gunAdi = "Cuma";
        break;
    case 6:
        gunAdi = "Cumartesi";
        break;
    case 7:
        gunAdi = "Pazar";
        break;
    default:
        gunAdi = "Geçersiz gün";
}

console.log(gunAdi); // "Çarşamba"


// ===================================

let mevsim = "yaz";

switch (mevsim) {
    case "ilkbahar":
    case "yaz":
        console.log("Hava sıcak.");
        break;
    case "sonbahar":
    case "kış":
        console.log("Hava soğuk.");
        break;
    default:
        console.log("Bilinmeyen mevsim.");
}