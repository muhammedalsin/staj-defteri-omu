let ekranDegeri = '';
let birinciSayi = null;
let operator = null;

function ekranaYaz(deger) {
    ekranDegeri += deger;
    document.getElementById("ekran").value = ekranDegeri;
}

function islemYap(seciliOperator) {
    if (birinciSayi === null) {
        birinciSayi = parseFloat(ekranDegeri);
        operator = seciliOperator;
        ekranDegeri = '';
    } else {
        hesapla();
        operator = seciliOperator;
    }
}

function hesapla() {
    if (birinciSayi !== null && operator !== null && ekranDegeri !== '') {
        let ikinciSayi = parseFloat(ekranDegeri);
        let sonuc = 0;

        switch (operator) {
            case '+':
                sonuc = birinciSayi + ikinciSayi;
                break;
            case '-':
                sonuc = birinciSayi - ikinciSayi;
                break;
            case '*':
                sonuc = birinciSayi * ikinciSayi;
                break;
            case '/':
                sonuc = birinciSayi / ikinciSayi;
                break;
        }

        document.getElementById("ekran").value = sonuc;
        birinciSayi = sonuc;
        ekranDegeri = '';
    }
}

function temizle() {
    ekranDegeri = '';
    birinciSayi = null;
    operator = null;
    document.getElementById("ekran").value = '';
}
