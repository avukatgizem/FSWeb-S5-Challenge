const Header = (baslik, tarih, yazi) => {
  // GÖREV 1
  // ---------------------
  // Bu fonksiyon argüman olarak `baslik`, `tarih` ve `temp` alarak aşağıdaki yapıyı döndürecek.
  // Kullanılan html etiketleri, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  //  <div class="header">
  //    <span class="date">{ tarih }</span>
  //    <h1>{ baslik }</h1>
  //    <span class="temp">{ yazi }</span>
  //  </div>
  //
   
    const headerDiv = document.createElement("div");
    headerDiv.classList.add("header");
  
    const dateSpan = document.createElement("span");
    dateSpan.classList.add("date");
    dateSpan.textContent = tarih;
    headerDiv.appendChild(dateSpan);
  
    const h1 = document.createElement("h1");
    h1.textContent = baslik;
    headerDiv.appendChild(h1);
  
    const tempSpan = document.createElement("span");
    tempSpan.classList.add("temp");
    tempSpan.textContent = yazi;
    headerDiv.appendChild(tempSpan);
  
    return headerDiv;
  }
  


const headerEkleyici = (secici) => {
  // GÖREV 2
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Görev 1'de tanımladığınız Header bileşenini kullanarak bir header oluşturun (baslik,tarih,yazi parametrelerini kendi isteğinize göre belirleyin)
  // Oluşturulan header'i, verilen seçiciyle eşleşen DOM'daki öğeye eklemelidir.
  //

  // İPUCU: querySelector bir string alabilir (bknz: querySelector("#wrapper")) 
  // fakat aynı zamanda bir değişken de alabilir (bknz: querySelector(secici))
   
    const wrapper = document.querySelector(secici);
  
    const header = Header("Teknoloji Zamanı", "24.03.2023", "Sağdaki Yazı");
  
    wrapper.appendChild(header);
  }
  
export { Header, headerEkleyici }

