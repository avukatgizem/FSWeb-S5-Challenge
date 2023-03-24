import axios from "axios";
const Card = (makale) => {
  // GÖREV 5
  // ---------------------
  // Aşağıda gördüğünüz işaretlemeyi döndürmesi gereken bu fonksiyonu uygulayın.
  // Tek argümanı olarak "anabaslik", "yazarFoto" ve "yazarAdı" özelliklerine sahip bir "makale" nesnesi alır.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  // Bir kullanıcı bir kartı tıkladığında makalenin başlığının konsola kaydedilmesi için click event dinleyicisi ekleyin.
  //
  // <div class="card">
  //   <div class="headline">{ anabaslik }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ yazarFoto }>
  //     </div>
  //     <span>{ yazarAdı } tarafından</span>
  //   </div>
  // </div>
  //
  const carddiv = document.createElement("div");
  carddiv.classList.add("card");

  const headlineDiv = document.createElement("div");
  headlineDiv.classList.add("headline");
  headlineDiv.textContent = makale.anabaslik;
  carddiv.appendChild(headlineDiv);

  const authorDiv = document.createElement("div");
  authorDiv.classList.add("author");
  carddiv.appendChild(authorDiv);
  
  const imgcont = document.createElement("div");
  imgcont.classList.add("img-container");
  authorDiv.appendChild(imgcont);

  const imgsrc = document.createElement("img");
  imgsrc.setAttribute ("src", makale.yazarFoto) ;
  /*imgsrc.src="url"*/
  imgcont.appendChild(imgsrc);

  const sp = document.createElement("span");
  sp.textContent = `${makale.yazarAdi} tarafından`
  authorDiv.appendChild(sp);
  
  carddiv.addEventListener("click", function(event) { console.log(headlineDiv.textContent) })
  return carddiv;
}

const cardEkleyici = (secici) => {
  // GÖREV 6
  // ---------------------
  // Tek bağımsız değişkeni olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Makaleleri bu uç noktadan almalıdır: `http://localhost:5001/api/makaleler` (console.log ile test edin!!).
  // Bununla birlikte, makaleler tek bir düzenli dizi halinde organize edilmemiştir. Yanıtı yakından inceleyin!
  // Card bileşenini kullanarak yanıttaki her makale nesnesinden bir kart oluşturun.
  // Her cardı, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //

  const seciciDom = document.querySelector(secici)

  axios
  .get("http://localhost:5001/api/makaleler")
  .then(function (response) { 
    for (let i in response.data.makaleler) {
      response.data.makaleler[i].map((secilenMakale) => {
        seciciDom.append(Card(secilenMakale));
      });
    }
    console.log(data);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
  });


}
export { Card, cardEkleyici };




 