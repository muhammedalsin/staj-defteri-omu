


document.getElementById("veriAlButon").addEventListener("click", function() {
  fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
          if (!response.ok) {
              throw new Error('Ağ hatası: ' + response.status);
          }
          return response.json();
      })
      .then(data => {
          let liste = document.getElementById("veriListesi");
          liste.innerHTML = ''; // Önceki listeyi temizle
          data.forEach(post => {
              let li = document.createElement('li');
              li.textContent = post.title;
              liste.appendChild(li);
          });
      })
      .catch(error => {
          console.error('Hata:', error);
          let liste = document.getElementById("veriListesi");
          liste.innerHTML = 'Veri çekilirken bir hata oluştu.';
      });
});