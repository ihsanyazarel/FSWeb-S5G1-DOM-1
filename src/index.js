const siteContent = { // BU NESNEYİ DEĞİŞTİRMEYİN
  "nav": {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  "cta": {
    "h1": "Bu DOM Mükemmel",
    "button": "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik": "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik": "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği": "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği": "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği": "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "iletisim": {
    "iletişim-h4": "İletişim",
    "adres": "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    "telefon": "+90 (123) 456-7899",
    "email": "satis@birsirketsitesi.com.tr",
  },
  "footer": {
    "copyright": "Copyright Bir Şirket Sitesi 2022",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('Proje açıldı!')


/* Kodlar Buradan aşağıya */

// header - nav- a
const aTags = document.querySelectorAll("header nav a");
for(let i = 0; i<aTags.length;i++){
  aTags[i].className = "italic";
  aTags[i].textContent = siteContent.nav["nav-item-" + (i+1)];
}
//logo img
document.getElementById("logo-img").src = siteContent.images["logo-img"];
// h1
document.querySelector(".cta h1").textContent = siteContent.cta.h1;
//button
document.querySelector(".cta button").textContent = siteContent.cta.button;
//cta img
document.getElementById("cta-img").src = siteContent.images["cta-img"];

// main-content h4
const h4Tags = document.querySelectorAll(".main-content h4");
h4Tags[0].textContent = siteContent["ana-içerik"]["özellikler-h4"];
h4Tags[1].textContent = siteContent["ana-içerik"]["hakkımızda-h4"];
h4Tags[2].textContent = siteContent["ana-içerik"]["servisler-h4"];
h4Tags[3].textContent = siteContent["ana-içerik"]["ürünler-h4"];
h4Tags[4].textContent = siteContent["ana-içerik"]["vizyon-h4"];

//main-content p
const pTags = document.querySelectorAll(".main-content p");
pTags[0].textContent = siteContent["ana-içerik"]["özellikler-içerik"];
pTags[1].textContent = siteContent["ana-içerik"]["hakkımızda-içerik"];
pTags[2].textContent = siteContent["ana-içerik"]["servisler-içeriği"];
pTags[3].textContent = siteContent["ana-içerik"]["ürünler-içeriği"];
pTags[4].textContent = siteContent["ana-içerik"]["vizyon-içeriği"];

// middle img
document.getElementById("middle-img").src = siteContent.images["accent-img"];

//contact h4
const h4Tag = document.querySelector(".contact h4");
h4Tag.textContent = siteContent.iletisim["iletişim-h4"];

//contact p
const cpntactPTags = document.querySelectorAll(".contact p");
cpntactPTags[0].textContent = siteContent.iletisim.adres;
cpntactPTags[1].textContent = siteContent.iletisim.telefon;
cpntactPTags[2].textContent = siteContent.iletisim.email;

// footer a
const footerATag = document.querySelector("footer a");
footerATag.className = "bold";
footerATag.textContent = siteContent.footer.copyright;