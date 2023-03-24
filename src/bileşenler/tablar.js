import axios from "axios";

const Tablar = (konu) => {
  // GÖREV 3
  // ---------------------
  // Tek argümanı bir dizi ("konu") olan bu fonksiyonu uygulayın.
  // Örnek olarak, konu dizisi şu şekilde deklare edilmişse ['javascript', 'bootstrap', 'teknoloji']
  // fonksiyon aşağıdaki şekilde bir DOM öğesi döndürecek.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">teknoloji</div>
  // </div>
  //
  
    const topicsDiv = document.createElement("div");
    topicsDiv.classList.add("topics");
  
    konu.forEach((konuAdi) => {
      const konuDiv = document.createElement("div");
      konuDiv.classList.add("tab");
      konuDiv.textContent = konuAdi;
  
      topicsDiv.appendChild(konuDiv);
    });
  
    return topicsDiv;
  }
  

const tabEkleyici = (secici) => {
  // GÖREV 4
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu işlevi uygulayın.
  // Konuları bu uç noktadan almalıdır: `http://localhost:5001/api/konular` (console.log ile test edin!).
  // Yanıtın içindeki konu dizisini bulun ve Tablar bileşenini kullanarak tabları oluşturun.
  // Tabları, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //
  /*konulariGetir().then((veri) => {
    const konuDizisi = veri.konular;
    const topicsDiv = Tablar(konuDizisi);
    const hedef = document.querySelector(secici);
    hedef.appendChild(topicsDiv);
  }).catch((hata) => {
    console.error(hata);
  });
}*/

const seciciTabDOM = document.querySelector(secici);

  axios
    .get("http://localhost:5001/api/konular")
    .then(function (response) {
      const data = response.data.konular;
      const TablarCB = Tablar(data);
      seciciTabDOM.append(TablarCB);
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {
    });
  }
  export { Tablar, tabEkleyici };