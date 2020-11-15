export default {
  /* addItemToCart(pid, count){
    var isValid=  this.inCart.includes(inCart => inCart.id === pid).id
    if(isValid){
      this.inCart.find(inCart => inCart.id === pid).count=con
    }
  }, */
  inCart: [
    {
      id:"1", pid: "111981", count: 1,
    },
    {
      id:"2", pid:"9105", count:1
    }  
  ],
  categories:[
    {
      id:"0", name: "Tüketici Elektroniği",  parentHierarchy:[]
    },
    {
      id:"1", name: "Telefon",  parentHierarchy:["0", ]
    },
    {
      id:"2", name: "Bilgisayar", parentHierarchy:[]
    }
  ],
  data: [
    /*Notebook ürünleri id'leri
        111981,110768,103828,103267,108837,108642,106786,105261,
        Sırt Çantası id'leri
        300873,69791,79651,9105,109276,89614,72441,
        */
    {
      id: "111981",
      code: "UX363EA-EM045T",
      name:
        "ASUS ZENBOOK 13 UX363 CORE İ7 1165G7 2.8GHZ-16GB RAM-1TB SSD-13.3'-INT-W10",
      cost: 19635,
      productLaunchTime: "2020-11-05" /* ürünün satışa sunulma tarihi */,
      rate: 0 /* yıldız */,
      markalogosu:
        "https://cdn.vatanbilgisayar.com/Upload//MARKA/asus/asus.jpg",
      ratedPersonCount: 0 /* puanlayan kişi sayısı */,
      freeShipping: true /* ücretsiz kargo */,
      fastShipping: true /* hızlı kargo */,
      maxInstallmentCount: 6 /* taksit sayısı */,
      productType: "Notebook" /*Urun Turu*/,
      inStock: 8,
      /* bu ürünle tavsiye edilenler:*/
      advicedProducts: [
        "72441",
        "110768",
        "79651",
        "300873",
        "69791",
        "9105",
        "109276",
        "89614"
      ],
      images: [
        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/asus/thumb/111981_large.jpg",
        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/asus/thumb/111981-1_large.jpg",
        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/asus/thumb/111981-2_large.jpg",
        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/asus/thumb/111981-3_large.jpg",
        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/asus/thumb/111981-4_large.jpg",
        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/asus/thumb/111981-5_large.jpg",
        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/asus/thumb/111981-6_large.jpg"
      ],
      /*Urun detay*/
      moreInformation: [
        {
          info: "Pil Hücre Sayısı:",
          info_detail: "4 Hücreli"
        },
        { info: "İşlemci Ön Bellek:", info_detail: "12 MB" },
        { info: "İşlemci Teknolojisi:", info_detail: "Core i7" },
        { info: "İşlemci Numarası:", info_detail: "1165G7" },
        { info: "Pil Kimyası:", info_detail: "Lityum Polimer" },
        { info: "İşlemci Markası:", info_detail: "Intel" },
        { info: "İşlemci Hızı:", info_detail: "2.8 GHz Turbo" },
        { info: "İşlemci Çekirdek", info_detail: "4 Çekirdek" }
      ],
      comments: [],
      alsoChecked: [
        "111981",
        "110768",
        "103828",
        "103267",
        "108837",
        "108642",
        "106786",
        "105261"
      ]
    },

    /* tavsiye edilen üç ürün yazdım tüm notebooklara bu üç ürünü tavsiye edebiliriz belki  */
    {
      id: "88816",
      code: "SDRW-08U9M-U-BLACK",
      name: "ASUS SDRW-08U9M-U ZENDRIVE HARİCİ SLİM DVD-YAZICI - SİYAH",
      cost: 413,
      productLaunchTime: "2020-08-10",
      rate: 5,
      markalogosu:
        "https://cdn.vatanbilgisayar.com/Upload//MARKA/asus/asus.jpg",
      ratedPersonCount: 17,
      freeShipping: true,
      fastShipping: false,
      maxInstallmentCount: 6,
      productType: "Ekstra Ürünler",
      inStock: 100,
      advicedProducts: [],
      images: [
        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/asus/thumb/v2-88816_large.jpg",
        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/asus/thumb/v2-88816-1_large.jpg",
        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/asus/thumb/v2-88816-2_large.jpg",
        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/asus/thumb/v2-88816-3_large.jpg"
      ],
      moreInformation: [
        { info: "Ön Bellek:", info_detail: "1 MB" },
        { info: "DVD Okuma Hızı:", info_detail: "8X" },
        { info: "CD Okuma&Yazma", info_detail: "24X16X24" },
        { info: "Bağlantı Özellikleri:", info_detail: "USB 2.0" },
        { info: "Dahili / Harici:", info_detail: "Harici" },
        { info: "DVD Yazma Hızı:", info_detail: "8X" },
        { info: "Bağlantı Özellikleri:", info_detail: "USB 3.1 Type-C" },
        { info: "Üretici Part", info_detail: "90DD02A0-" }
      ],
      comments: [
        {
          date: "2020-07-29",
          time: "23:21:00",
          rate: "5",
          name: "Emre Yılmaz",
          highlight_comment: "Severek kullanmaktayım",
          comment: "Çok kaliteli ve çok sesiz"
        },
        {
          date: "2020-07-17",
          time: "12:12:00",
          rate: "5",
          name: "Emre Can Duyar",
          highlight_comment: "İnce ve şık",
          comment:
            "İnce ve şık tasarıma sahip. Notebook için aldım ve çok kullanışlı bir ürün."
        },
        {
          date: "2020-06-24",
          time: "16:26:00",
          rate: "5",
          name: "aslı güngör",
          highlight_comment: "F/P",
          comment: "tasarımı iyi sorunsuz çalışıyor. Type C kablosu avantaj"
        }
      ]
    },
    {
      id: "84459",
      code: "QQ2-00006",
      name:"Online Microsoft 365 Bireysel (1 kullanıcı-1yıl) (Dijital İndirilebilir Lisans)",
      cost: 550,
      productLaunchTime: "2020-08-10",
      rate: 0,
      markalogosu:
        "https://cdn.vatanbilgisayar.com/Upload//MARKA/microsoft/microsoft.jpg",
      ratedPersonCount: 17,
      freeShipping: true,
      fastShipping: false,
      maxInstallmentCount: 6,
      productType: "Ekstra Ürünler",
      inStock: 100,
      advicedProducts: [],
      images: [
        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/microsoft/thumb/TeoriV2-84459_large.jpg"
      ],
      comments: [
      ],
      moreInformation:[

      ]
    },
    {
      id: "104988",
      code: "MB16AMT",
      name:
        "ASUS 15,6' MB16AMT ZenScreen taşınabilir Dokunmatik IPS FullHD USB monitör",
      cost: 4355,
      productLaunchTime: "2020-08-10",
      rate: 5,
      markalogosu:
        "https://cdn.vatanbilgisayar.com/Upload//MARKA/asus/asus.jpg",
      ratedPersonCount: 0,
      freeShipping: true,
      fastShipping: false,
      maxInstallmentCount: 6,
      productType: "Ekstra Ürünler",
      inStock: 30,
      advicedProducts: [],
      images: [
        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/asus/thumb/TeoriV2-104988_large.jpg",
        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/asus/thumb/TeoriV2-104988-1_large.jpg",
        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/asus/thumb/TeoriV2-104988-2_large.jpg",
        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/asus/thumb/TeoriV2-104988-3_large.jpg",
        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/asus/thumb/TeoriV2-104988-4_large.jpg"
      ],
      moreInformation: [
        { info: "Tepki Süresi (ms):", info_detail: "5" },
        { info: "Yenileme Hızı:", info_detail: "60Hz" },
        { info: "Çözünürlük", info_detail: "1920 x 1080" },
        { info: "Ekran Renk Sayısı:", info_detail: "262 Bin" },
        { info: "Parlaklık:", info_detail: "250 cd/m2" },
        { info: "Ekran Boyutu:", info_detail: "15.6 inch" },
        { info: "Görüntü Formatı:", info_detail: "16:9" },
        { info: "Piksel Aralığı:", info_detail: "0.179mm" }
      ],
      comments: [
        {
          date: "2020-06-09",
          time: "15:54:00",
          rate: "5",
          name: "Toprak Aygün",
          highlight_comment: "Mükemmel Monitör",
          comment: "Ürünü yeni aldım şiddetle tavsiye ederim"
        },
        {
          date: "2020-08-27",
          time: "00:33:00",
          rate:"5",
          name: "engin yöner",
          highlight_comment: "ÇOK KULLANIŞLI",
          comment:
            "Şık, kullanışlı, Seyehat ederken kullanılabilirlik açısından 10/10 puan alır. Hafif olması da cabası. Kendisinden istenen performansı verebiliyor."
        },
        {
          date: "2020-06-02",
          time: "17:03:00",
          rate: "5",
          name: "FERİDUN C******",
          highlight_comment: "İstediğin yere taşı",
          comment:
            "İstediğin yere taşıyabilmek çok güzel birşey. İş amaçlı kullanıyorum ve oldukça başarılı bir monitör."
        }
      ]
    },
    /* Diğer notebooklar */
    {
      id: "110768",
      code: "G315-4B30W85C",
      name:
        "DELL G315 CORE İ5 10300H 2.5GHZ-8GB RAM-512GB SSD-GTX1650TI 4GB-15.6-W10",
      cost: 10018,
      productLaunchTime: "2020-06-05" /* ürünün satışa sunulma tarihi */,
      rate: 4 /* yıldız */,
      markalogosu:
        "https://cdn.vatanbilgisayar.com/Upload//MARKA/dell/dell.jpg",
      ratedPersonCount: 11 /* puanlayan kişi sayısı */,
      freeShipping: true /* ücretsiz kargo */,
      fastShipping: false /* hızlı kargo */,
      maxInstallmentCount: 6 /* taksit sayısı */,
      productType: "Notebook" /*Urun Turu*/,
      inStock: 18,
      /* bu ürünle tavsiye edilenler:*/
      advicedProducts: [
        "111981",
        "110768",
        "103828",
        "300873",
        "69791",
        "79651",
        "9105",
        "109276",
        "89614",
        "72441"
      ],
      images: [
        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768_large.jpg",
        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768-10_large.jpg",
        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768-12_large.jpg",
        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768-13_large.jpg",
        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768-1_large.jpg",
        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768-2_large.jpg"
      ],
      /*Urun detay*/
      moreInformation: [
        {
          info: "Pil Hücre Sayısı:",
          info_detail: "3 Hücreli"
        },
        { info: "Güvenlik:", info_detail: "Kensington kilidi" },
        { info: "İşlemci Markası:", info_detail: "Intel" },
        { info: "İşlemci Numarası:", info_detail: "10300H" },
        { info: "Pil Kimyası:", info_detail: "Lityum İyon" },
        { info: "İşlemci Ön Bellek:", info_detail: "8 MB" },
        { info: "İşlemci Hızı:", info_detail: "2.5 GHz Turbo" },
        {
          info: "İşlemci Teknolojisi:",
          info_detail: "Core i5"
        }
      ],
      comments: [
        {
          date: "2020-11-04",
          time: "17:21:00",
          rate: "4",
          name: "RECEP S***** - İZMİR",
          highlight_comment: "Recep izmir",
          comment:
            "Kamerasının ful hd olmaması üzücü, CPU çok fazla enerji harcıyor doğal olarakta ısı üretiyor, Oyun oynamadığım için tam performansını bilmiyorum RAM düşük"
        },
        {
          date: "2020-11-04",
          time: "11:35:00",
          rate: "5",
          name: "EREN S**** - ADANA",
          highlight_comment: "Laptop",
          comment: "Gayet iyi bir tercih oldu ve sorunsuz kullanmaktayım."
        },
        {
          date: "2020-06-02",
          time: "17:03:00",
          rate: "4",
          name: "MEHMET A** A*** - ANKARA",
          highlight_comment: "9/10 Mukemmel",
          comment:
            "Tasarım ve kullanım açısından bekleneni mükemmel karsilamakla birlikte, i7 de sunulan ekran kartı 6 GB ve Ram 16 Gb alternatifi i5 modeldede sunulmasini isterdim. Teşekkürler Dell, Teşekkür Vatan..."
        }
      ],
      alsoChecked: [
        "111981",
        "110768",
        "103828",
        "103267",
        "108837",
        "108642",
        "106786",
        "105261"
      ]
    },

    {
      id: "300873",
      code: "88174",
      name: "ADDISON 300873 13.3 - 14 NOTEBOOK SIRT ÇANTASI (SİYAH)",
      cost: 142,
      productLaunchTime: "2020-01-07" /* ürünün satışa sunulma tarihi */,
      rate: 0 /* yıldız */,
      markalogosu:
        "https://cdn.vatanbilgisayar.com/Upload//MARKA/addison/addison.jpg",
      ratedPersonCount: 0 /* puanlayan kişi sayısı */,
      freeShipping: false /* ücretsiz kargo */,
      fastShipping: false /* hızlı kargo */,
      maxInstallmentCount: 6 /* taksit sayısı */,
      productType: "Sırt Çantası" /*Urun Turu*/,
      inStock: 100,
      /* bu ürünle tavsiye edilenler:*/
      advicedProducts: [],
      images: [
        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/addison/thumb/v2-88174_large.jpg",
        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/addison/thumb/v2-88174-1_large.jpg",
        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/addison/thumb/v2-88174-2_large.jpg"
      ],
      /*Urun detay*/
      moreInformation: [
        { info: "Uyumlu Olduğu", info_detail: "Universal" },
        { info: "Aksesuar Tipi:", info_detail: "Notebook" },
        { info: "Marka", info_detail: "Addison" },
        { info: "Uyumlu Olduğu", info_detail: "Universal 13.3" },
        { info: "Renk:", info_detail: "Siyah" },
        { info: "Menşei:", info_detail: "Çin" }
      ],
      comments: [],
      alsoChecked: ["300873", "69791", "79651", "9105", "109276", "89614", "72441"]
    },

    {
      id: "103828",
      code: "81TC000VTX",
      name:
        "LENOVO YOGA C740 CORE İ7 10510U 1.8GHZ-8GB RAM-512GB SSD-14''-INT-TOUCH-W10",
      cost: 10092,
      productLaunchTime: "2020-08-22" /* ürünün satışa sunulma tarihi */,
      rate: 5 /* yıldız */,
      markalogosu:
        "https://cdn.vatanbilgisayar.com/Upload//MARKA/lenovo/lenovo.jpg",
      ratedPersonCount: 9 /* puanlayan kişi sayısı */,
      freeShipping: true /* ücretsiz kargo */,
      fastShipping: false /* hızlı kargo */,
      maxInstallmentCount: 6 /* taksit sayısı */,
      productType: "Notebook" /*Urun Turu*/,
      inStock: 100,
      /* bu ürünle tavsiye edilenler:*/
      advicedProducts: [
        "111981",
        "110768",
        "300873",
        "69791",
        "79651",
        "9105",
        "109276",
        "89614",
        "72441"
      ],
      images: [
        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/lenovo/thumb/TeoriV2-103828-6_large.jpg",
        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/lenovo/thumb/TeoriV2-103828-7_large.jpg",
        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/lenovo/thumb/TeoriV2-103828-8_large.jpg",
        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/lenovo/thumb/TeoriV2-103828-9_large.jpg",
        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/lenovo/thumb/TeoriV2-103828-10_large.jpg",
        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/lenovo/thumb/TeoriV2-103828-11_large.jpg"
      ],
      /*Urun detay*/
      moreInformation: [
        { info: "Güvenlik:", info_detail: "Fingerprint" },
        { info: "İşlemci Ön Bellek:", info_detail: "8 MB" },
        { info: "İşlemci Markası:", info_detail: "Intel" },
        { info: "İşlemci Numarası:", info_detail: "10510U" },
        { info: "Pil Hücre Sayısı:", info_detail: "4 Hücreli" },
        { info: "İşlemci Ön Bellek:", info_detail: "8 MB" },
        { info: "İşlemci Hızı:", info_detail: "1.8 GHz Turbo" },
        { info: "İşlemci Teknolojisi:", info_detail: "Core i7" }
      ],
      comments: [
        {
          date: "2020-10-16",
          time: "11:24:00",
          rate: "5",
          name: "TUĞBA B**** E*** - İSTANBUL",
          highlight_comment: "Gayet iyi",
          comment: "Teşekkür ederiz"
        },
        {
          date: "2020-10-12",
          time: "12:12:00",
          rate: "5",
          name: "YEŞİM Ü*** - ANKARA",
          highlight_comment: "Çok şık bir ürün",
          comment: "Çok memnunum. Performansı güçlü ve çok zarif bir ürün."
        },
        {
          date: "2020-10-09",
          time: "16:31:00",
          rate: "4",
          name: "MİNE T**** - İSTANBUL",
          highlight_comment: "Teşekkürler!",
          comment:
            "Alışveriş yaparken bana sunduğunuz seçenekler, iyi niyetli ve ilgili yaklaşımını ve uzman personeliniz için çok teşekkürler!"
        }
      ],
      alsoChecked: [
        "111981",
        "110768",
        "103828",
        "103267",
        "108837",
        "108642",
        "106786",
        "105261"
      ]
    },

    {
      id: "69791",
      code: "CA.ANC316",
      name: "CASE LOGIC CA.ANC316 NOTEBOOK ÇANTASI 15.6 SİYAH",
      cost: 179,
      productLaunchTime: "2020-01-07" /* ürünün satışa sunulma tarihi */,
      rate: 0 /* yıldız */,
      markalogosu:
        "https://cdn.vatanbilgisayar.com/Upload//MARKA/case-logic/case-logic.jpg",
      ratedPersonCount: 0 /* puanlayan kişi sayısı */,
      freeShipping: false /* ücretsiz kargo */,
      fastShipping: false /* hızlı kargo */,
      maxInstallmentCount: 6 /* taksit sayısı */,
      productType: "Sırt Çantası" /*Urun Turu*/,
      inStock: 22,
      /* bu ürünle tavsiye edilenler:*/
      advicedProducts: [],
      images: [
        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/case-logic/thumb/v2-69791-1_large.jpg"
      ],
      /*Urun detay*/
      moreInformation: [
        { info: "Uyumlu Olduğu", info_detail: "Universal" },
        { info: "Aksesuar Tipi:", info_detail: "Notebook" },
        { info: "Marka", info_detail: "Caselogic" },
        { info: "Uyumlu Olduğu", info_detail: "Universal 15.6" },
        { info: "Renk:", info_detail: "Siyah" },
        { info: "Garanti:", info_detail: "24" }
      ],
      comments: [],
      alsoChecked: ["300873", "69791", "79651", "9105", "109276", "89614", "72441"]
    },

    {
      id: "79651",
      code: "L6V67AA",
      name: "HP 14'' SİGNATURE II SLİM TOPLOAD NOTEBOOK ÇANTASI",
      cost: 221,
      productLaunchTime: "2020-01-07" /* ürünün satışa sunulma tarihi */,
      rate: 0 /* yıldız */,
      markalogosu: "https://cdn.vatanbilgisayar.com/Upload//MARKA/hp/hp.jpg",
      ratedPersonCount: 0 /* puanlayan kişi sayısı */,
      freeShipping: false /* ücretsiz kargo */,
      fastShipping: false /* hızlı kargo */,
      maxInstallmentCount: 6 /* taksit sayısı */,
      productType: "Sırt Çantası" /*Urun Turu*/,
      inStock: 221,
      /* bu ürünle tavsiye edilenler:*/
      advicedProducts: [],
      images: [
        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/hp/thumb/v2-79651_large.jpg",
        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/hp/thumb/v2-79651-1_large.jpg"
      ],
      /*Urun detay*/
      moreInformation: [
        { info: "Uyumlu Olduğu", info_detail: "Universal" },
        { info: "Aksesuar Tipi:", info_detail: "Notebook" },
        { info: "Marka", info_detail: "HP" },
        { info: "Uyumlu Olduğu", info_detail: "Universal" },
        { info: "Menşei:", info_detail: "Çin" },
        { info: "Garanti:", info_detail: "24" }
      ],
      comments: [],
      alsoChecked: ["300873", "69791", "79651", "9105", "109276", "89614", "72441"]
    },
    {
      id: "9105",
      code: "TAR300Z",
      name: "TARGUS TAR300Z 15.6'' NOTEBOOK ÇANTASI- (SİYAH)",
      cost: 170,
      productLaunchTime: "2020-01-07" /* ürünün satışa sunulma tarihi */,
      rate: 0 /* yıldız */,
      markalogosu:
        "https://cdn.vatanbilgisayar.com/Upload//MARKA/targus/targus.jpg",
      ratedPersonCount: 0 /* puanlayan kişi sayısı */,
      freeShipping: false /* ücretsiz kargo */,
      fastShipping: false /* hızlı kargo */,
      maxInstallmentCount: 6 /* taksit sayısı */,
      productType: "Sırt Çantası" /*Urun Turu*/,
      inStock: 300,
      /* bu ürünle tavsiye edilenler:*/
      advicedProducts: [],
      images: [
        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/targus/thumb/v2-9105_large.jpg"
      ],
      /*Urun detay*/
      moreInformation: [
        { info: "Uyumlu Olduğu", info_detail: "Universal" },
        { info: "Aksesuar Tipi:", info_detail: "Notebook" },
        { info: "Marka", info_detail: "Targus" },
        { info: "Uyumlu Olduğu", info_detail: "Universal 15.6" },
        { info: "Menşei:", info_detail: "Çin" },
        { info: "Renk:", info_detail: "Siyah" }
      ],
      comments: [],
      alsoChecked: ["300873", "69791", "79651", "9105", "109276", "89614", "72441"]
    },

    {
      id: "109276",
      code: "CA.TGAE2356",
      name: "Thule Gauntlet 4.0 15 MacBookPro / Ultrabook Çanta",
      cost: 549,
      productLaunchTime: "2020-01-07" /* ürünün satışa sunulma tarihi */,
      rate: 0 /* yıldız */,
      markalogosu:
        "https://cdn.vatanbilgisayar.com/Upload//MARKA/thule/thule.jpg",
      ratedPersonCount: 0 /* puanlayan kişi sayısı */,
      freeShipping: true /* ücretsiz kargo */,
      fastShipping: false /* hızlı kargo */,
      maxInstallmentCount: 6 /* taksit sayısı */,
      productType: "Sırt Çantası" /*Urun Turu*/,
      inStock: 11,
      /* bu ürünle tavsiye edilenler:*/
      advicedProducts: [],
      images: [
        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/thule/thumb/109276_large.jpg",
        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/thule/thumb/109276-1_large.jpg",
        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/thule/thumb/109276-3_large.jpg",
        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/thule/thumb/109276-4_large.jpg",
        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/thule/thumb/109276-5_large.jpg"
      ],
      /*Urun detay*/
      moreInformation: [
        { info: "Uyumlu Olduğu", info_detail: "Universal" },
        { info: "Aksesuar Tipi:", info_detail: "Notebook" },
        { info: "Uyumlu Olduğu", info_detail: "Universal 15" },
        { info: "Menşei:", info_detail: "Çin" }
      ],
      comments: [],
      alsoChecked: ["300873", "69791", "79651", "9105", "109276", "89614", "72441"]
    },

    {
      id: "89614",
      code: "L8J89AA",
      name: "HP 15.6 ODYSSEY NOTEBOOK SIRT ÇANTASI -(GRİ)",
      cost: 406,
      productLaunchTime: "2020-05-05" /* ürünün satışa sunulma tarihi */,
      rate: 0 /* yıldız */,
      markalogosu: "https://cdn.vatanbilgisayar.com/Upload//MARKA/hp/hp.jpg",
      ratedPersonCount: 0 /* puanlayan kişi sayısı */,
      freeShipping: true /* ücretsiz kargo */,
      fastShipping: false /* hızlı kargo */,
      maxInstallmentCount: 6 /* taksit sayısı */,
      productType: "Sırt Çantası" /*Urun Turu*/,
      inStock: 5,
      /* bu ürünle tavsiye edilenler:*/
      advicedProducts: [],
      images: [
        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/hp/thumb/v2-89614_large.jpg",
        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/hp/thumb/v2-89614-1_large.jpg",
        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/hp/thumb/v2-89614-2_large.jpg"
      ],
      /*Urun detay*/
      moreInformation: [
        { info: "Uyumlu Olduğu", info_detail: "Universal" },
        { info: "Aksesuar Tipi:", info_detail: "Notebook" },
        { info: "Uyumlu Olduğu", info_detail: "Universal 15" },
        { info: "Menşei:", info_detail: "Çin" }
      ],
      comments: [],
      alsoChecked: ["300873", "69791", "79651", "9105", "109276", "89614", "72441"]
    },

    {
      id: "72441",
      code: "CA.WMBP115GY",
      name:
        "CASE LOGIC CA.WMBP115GY JAUNT 15.6'' NOTEBOOK SIRT ÇANTASI- (KOYU GRİ)",
      cost: 299,
      productLaunchTime: "2020-05-05" /* ürünün satışa sunulma tarihi */,
      rate: 0 /* yıldız */,
      markalogosu:
        "https://cdn.vatanbilgisayar.com/Upload//MARKA/case-logic/case-logic.jpg",
      ratedPersonCount: 0 /* puanlayan kişi sayısı */,
      freeShipping: true /* ücretsiz kargo */,
      fastShipping: false /* hızlı kargo */,
      maxInstallmentCount: 6 /* taksit sayısı */,
      productType: "Sırt Çantası" /*Urun Turu*/,
      inStock: 100,
      /* bu ürünle tavsiye edilenler:*/
      advicedProducts: [],
      images: [
        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/case-logic/thumb/v2-72441_large.jpg"
      ],
      /*Urun detay*/
      moreInformation: [
        { info: "Uyumlu Olduğu", info_detail: "Universal" },
        { info: "Aksesuar Tipi:", info_detail: "Notebook" },
        { info: "Uyumlu Olduğu", info_detail: "Universal 15.6" },
        { info: "Menşei:", info_detail: "Çin" },
        { info: "Renk", info_detail: "Koyu Gri" },
        { info: "Marka", info_detail: "Caselogic" }
      ],
      comments: [],
      alsoChecked: ["300873", "69791", "79651", "9105", "109276", "89614", "72441"]
    },
    {
      id: "103267",
      code: "KJT-00006",
      name:
        "MICROSOFT SURFACE PRO 6 CORE İ5 8250U 1.6GHZ-8GB RAM-256GB SSD-INT-12.3 W10",
      cost: 14530,
      productLaunchTime: "2020-11-05" /* ürünün satışa sunulma tarihi */,
      rate: 5 /* yıldız */,
      markalogosu:
        "https://cdn.vatanbilgisayar.com/Upload//MARKA/microsoft/microsoft.jpg",
      ratedPersonCount: 3 /* puanlayan kişi sayısı */,
      freeShipping: true /* ücretsiz kargo */,
      fastShipping: false /* hızlı kargo */,
      maxInstallmentCount: 6 /* taksit sayısı */,
      productType: "Notebook" /*Urun Turu*/,
      inStock: 100,
      /* bu ürünle tavsiye edilenler:*/
      advicedProducts: [
        "72441",
        "103828",
        "111981",
        "110768",
        "79651",
        "300873",
        "69791",
        "9105",
        "109276",
        "89614"
      ],
      images: [
        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/microsoft/thumb/109917-2_large.jpg",
        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/microsoft/thumb/109917-1-1_large.jpg",
        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/microsoft/thumb/103267-ek_large.jpg",
        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/microsoft/thumb/103267-ek1_large.jpg"
      ],
      /*Urun detay*/
      moreInformation: [
        { info: "Dokunmatik:", info_detail: "Var" },
        { info: "İşlemci Ön Bellek:", info_detail: "6 MB" },
        { info: "İşlemci Teknolojisi:", info_detail: "Core i5" },
        { info: "İşlemci Numarası:", info_detail: "8250U" },
        { info: "Ram:", info_detail: "8 GB" },
        { info: "İşlemci Markası:", info_detail: "Intel" },
        { info: "İşlemci Hızı:", info_detail: "1.6 GHz Turbo" },
        { info: "İşlemci Çekirdek", info_detail: "6 Çekirdek" }
      ],
      comments: [
        {
          date: "2020-07-29",
          time: "17:21:00",
          rate: "5",
          name: "OSMAN Y****",
          highlight_comment: "Diğer Ürünler",
          comment:
            "Microsftun diğer ürünleri de gelecekmi? surface laptop gibi?"
        },
        {
          date: "2020-09-17",
          time: "16:12:00",
          rate: "5",
          name: "HİLAL B**",
          highlight_comment: "Başarılı bir ürün",
          comment:
            "Yaklaşık 1 hafta önce ürünü aldım ve deneyimlerimi paylaşmak istedim. Bu ürün benim ilk 2si 1 arada ürünüm, 2si 1 arada bilgisayardan üstün bir performans beklemezken üstün performansla beni şaşırttı. Dizüstü bilgisayar modu standart bir dizüstü bilgisayar gibi fakat ben genelde tablet modunda kullanmayı sevdiğim için tablet modunu daha çok beğendim."
        },
        {
          date: "2020-03-25",
          time: "09:51:00",
          rate: "5",
          name: "GÜNDOĞAN Y*****",
          highlight_comment: "i7 sini aldım",
          comment:
            "bu ürünün i7 işlemcili olanını aldım bunda da sıkıntı çıkacağını sanmıyorum."
        }
      ],
      alsoChecked: [
        "111981",
        "110768",
        "103828",
        "103267",
        "108837",
        "108642",
        "106786",
        "105261"
      ]
    },

    {
      id: "108642",
      code: "MATEBOOK X PRO/2020",
      name:
        "HUAWEI MATEBOOK X PRO 2020 CORE İ7 10510U 1.8GHZ-16GB-1TBSSD-13.9 -MX250 2GB-W10",
      cost: 14999,
      productLaunchTime: "2019-04-08" /* ürünün satışa sunulma tarihi */,
      rate: 0 /* yıldız */,
      markalogosu:
        "https://cdn.vatanbilgisayar.com/Upload//MARKA/huawei/huawei.jpg",
      ratedPersonCount: 0 /* puanlayan kişi sayısı */,
      freeShipping: true /* ücretsiz kargo */,
      fastShipping: false /* hızlı kargo */,
      maxInstallmentCount: 6 /* taksit sayısı */,
      productType: "Notebook" /*Urun Turu*/,
      inStock: 100,
      /* bu ürünle tavsiye edilenler:*/
      advicedProducts: [
        "72441",
        "103828",
        "111981",
        "110768",
        "79651",
        "300873",
        "69791",
        "9105",
        "109276",
        "89614"
      ],
      images: [
        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/huawei/thumb/TeoriV2-108642_large.jpg",
        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/huawei/thumb/TeoriV2-108642-1_large.jpg",
        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/huawei/thumb/TeoriV2-108642-2_large.jpg",
        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/huawei/thumb/TeoriV2-108642-3_large.jpg",
        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/huawei/thumb/TeoriV2-108642-4_large.jpg",
        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/huawei/thumb/TeoriV2-108642-6_large.jpg"
      ],
      /*Urun detay*/
      moreInformation: [
        { info: "Dokunmatik:", info_detail: "Var" },
        { info: "İşlemci Ön Bellek:", info_detail: "8 MB" },
        { info: "İşlemci Teknolojisi:", info_detail: "Core i7" },
        { info: "İşlemci Numarası:", info_detail: "10510U" },
        { info: "Ram:", info_detail: "16 GB" },
        { info: "İşlemci Markası:", info_detail: "Intel" },
        { info: "İşlemci Hızı:", info_detail: "1.8 GHz Turbo" },
        { info: "İşlemci Çekirdek", info_detail: "4 Çekirdek" }
      ],
      comments: [],
      alsoChecked: [
        "111981",
        "110768",
        "103828",
        "103267",
        "108837",
        "108642",
        "106786",
        "105261"
      ]
    },

    {
      id: "108837",
      code: "UX581LV-H2013T",
      name:
        "ASUS ZENBOOK PRO DUO UX581 CORE İ7 10750H 2.6GHZ-32GB-1TB-15.6 -RTX2060 6GB-W10",
      cost: 32074,
      productLaunchTime: "2020-04-08" /* ürünün satışa sunulma tarihi */,
      rate: 0 /* yıldız */,
      markalogosu:
        "https://cdn.vatanbilgisayar.com/Upload//MARKA/asus/asus.jpg",
      ratedPersonCount: 0 /* puanlayan kişi sayısı */,
      freeShipping: true /* ücretsiz kargo */,
      fastShipping: false /* hızlı kargo */,
      maxInstallmentCount: 6 /* taksit sayısı */,
      productType: "Notebook" /*Urun Turu*/,
      inStock: 15,
      /* bu ürünle tavsiye edilenler:*/
      advicedProducts: [
        "72441",
        "103828",
        "111981",
        "110768",
        "79651",
        "300873",
        "69791",
        "9105",
        "109276",
        "89614"
      ],
      images: [
        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/asus/thumb/asus-zenbook-pro-duo-x581-gorseli-108837_large.jpg",
        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/asus/thumb/TeoriV2-108837-1_large.jpg",
        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/asus/thumb/TeoriV2-108837-2_large.jpg",
        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/asus/thumb/TeoriV2-108837-3_large.jpg",
        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/asus/thumb/TeoriV2-108837-4_large.jpg",
        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/asus/thumb/TeoriV2-108837-5_large.jpg",
        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/asus/thumb/TeoriV2-108837-6_large.jpg",
        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/asus/thumb/TeoriV2-108837-7_large.jpg"
      ],
      /*Urun detay*/
      moreInformation: [
        { info: "Pil Kimyası:", info_detail: "Lithium-ion" },
        { info: "İşlemci Ön Bellek:", info_detail: "12 MB" },
        { info: "İşlemci Teknolojisi:", info_detail: "Core i7" },
        { info: "İşlemci Numarası:", info_detail: "10750H" },
        { info: "Ram:", info_detail: "16 GB" },
        { info: "İşlemci Markası:", info_detail: "Intel" },
        { info: "İşlemci Hızı:", info_detail: "2.6 GHz Turbo" },
        { info: "İşlemci Çekirdek", info_detail: "6 Çekirdek" }
      ],
      comments: [],
      alsoChecked: [
        "111981",
        "110768",
        "103828",
        "103267",
        "108837",
        "108642",
        "106786",
        "105261"
      ]
    },

    {
      id: "106786",
      code: "7390-FS510W161N",
      name:
        "DELL XPS 13 7390 CORE İ7 10710U 1.1GHZ-16GB RAM-1TB SSD-INT-13.3 W10",
      cost: 17494,
      productLaunchTime: "2018-02-22" /* ürünün satışa sunulma tarihi */,
      rate: 4 /* yıldız */,
      markalogosu:
        "https://cdn.vatanbilgisayar.com/Upload//MARKA/dell/dell.jpg",
      ratedPersonCount: 2 /* puanlayan kişi sayısı */,
      freeShipping: true /* ücretsiz kargo */,
      fastShipping: false /* hızlı kargo */,
      maxInstallmentCount: 6 /* taksit sayısı */,
      productType: "Notebook" /*Urun Turu*/,
      inStock: 50,
      /* bu ürünle tavsiye edilenler:*/
      advicedProducts: [
        "9105",
        "111981",
        "72441",
        "103828",
        "110768",
        "79651",
        "300873",
        "69791",
        "109276",
        "89614"
      ],
      images: [
        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/TeoriV2-106786_large.jpg",
        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/TeoriV2-106786-1_large.jpg",
        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/TeoriV2-106786-2_large.jpg",
        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/TeoriV2-106786-3_large.jpg",
        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/TeoriV2-106786-4_large.jpg",
        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/TeoriV2-106786-5_large.jpg"
      ],
      /*Urun detay*/
      moreInformation: [
        { info: "İşlemci Çekirdek", info_detail: "6 Çekirdek" },
        { info: "İşlemci Ön Bellek:", info_detail: "12 MB" },
        { info: "İşlemci Teknolojisi:", info_detail: "Core i7" },
        { info: "İşlemci Numarası:", info_detail: "10710U" },
        { info: "Ram:", info_detail: "16 GB" },
        { info: "İşlemci Markası:", info_detail: "Intel" },
        { info: "İşlemci Hızı:", info_detail: "2.6 GHz Turbo" },
        { info: "Katlanabilir:", info_detail: "Evet" }
      ],
      comments: [
        {
          date: "2020-10-05",
          time: "16:09:00",
          rate: "5",
          name: "Pelin Ş****",
          highlight_comment: "İyi bir ürün",
          comment:
            "Fiyatı performansını pek haketmiyor,fakat ürün çok kullanışlı.Her şekle giriyor."
        },
        {
          date: "2020-10-17",
          time: "13:35:00",
          rate: "4",
          name: "Tayfun A***",
          highlight_comment: "Şık ve profesyonel",
          comment:
            "Genelde tablet modunda kullanmayı sevdiğim için tablet modunu daha çok beğendim."
        }
      ],
      alsoChecked: [
        "106786",
        "105261",
        "111981",
        "110768",
        "103828",
        "103267",
        "108837",
        "108642"
      ]
    },
    {
      id: "105261",
      code: "81Q9007FTX",
      name:
        "LENOVO YOGA C940 CORE İ7 1065G7 1.3GHZ-16GB RAM-512GB SSD-14''-INT-TOUCH-W10",
      cost: 15999,
      productLaunchTime: "2020-03-10" /* ürünün satışa sunulma tarihi */,
      rate: 4 /* yıldız */,
      markalogosu:
        "https://cdn.vatanbilgisayar.com/Upload//MARKA/lenovo/lenovo.jpg",
      ratedPersonCount: 2 /* puanlayan kişi sayısı */,
      freeShipping: true /* ücretsiz kargo */,
      fastShipping: false /* hızlı kargo */,
      maxInstallmentCount: 6 /* taksit sayısı */,
      productType: "Notebook" /*Urun Turu*/,
      inStock: 100,
      /* bu ürünle tavsiye edilenler:*/
      advicedProducts: [
        "72441",
        "103828",
        "111981",
        "110768",
        "79651",
        "300873",
        "69791",
        "9105",
        "109276",
        "89614"
      ],
      images: [
        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/lenovo/thumb/TeoriV2-105261-7_large.jpg",
        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/lenovo/thumb/TeoriV2-105261-8_large.jpg",
        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/lenovo/thumb/TeoriV2-105261-9_large.jpg",
        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/lenovo/thumb/TeoriV2-105261-10_large.jpg",
        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/lenovo/thumb/TeoriV2-105261-11_large.jpg",
        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/lenovo/thumb/TeoriV2-105261-12_large.jpg"
      ],
      /*Urun detay*/
      moreInformation: [
        { info: "İşlemci Çekirdek", info_detail: "4 Çekirdek" },
        { info: "İşlemci Teknolojisi:", info_detail: "Core i7" },
        { info: "İşlemci Numarası:", info_detail: "1065G7" },
        { info: "İşlemci Ön Bellek:", info_detail: "8 MB" },
        { info: "İşlemci Hızı:", info_detail: "1.3 GHz Turbo" },
        { info: "İşlemci Markası:", info_detail: "Intel" },
        { info: "Ram:", info_detail: "16 GB" },
        { info: "Güvenlik:", info_detail: "Fingerprint" }
      ],
      comments: [
        {
          date: "2020-09-27",
          time: "16:19:00",
          rate: "5",
          name: "HAKKI M**** Ö**** - ANKARA",
          highlight_comment: "Alınabilecek en iyi 2 in 1",
          comment:
            "Kullanımı kolay, ekran kalitesi çok iyi, pil kullanım ömrü son derece başarılı"
        },
        {
          date: "2019-12-25",
          time: "20:01:00",
          rate: "5",
          name: "AYBARS O***",
          highlight_comment: "Güncel bir laptop",
          comment:
            "Merhaba, gönül rahatlığı ile alabilirsiniz. Çok kaliteli, güncel bir laptop. Harici ekran kartı yok. Eğer oyun için almayı düşünüyorsanız tavsiye etmem. 27'' 4K monitore bağladığımda mouse hareketi akıcı değildi. Eski bir kablo ve dönüştürücü üzerinden bağlamıştım. Kabloyu doğrudan type-c üzerinden güncel bir kablo ile bağladım. Sorun çözüldü. Yani harici monitöre bağlıyor ve akış anlamında tatmin olmuyorsanız probleminiz kullandığınız kablonun güncel olmamasından kaynaklanabilir."
        }
      ],
      alsoChecked: [
        "108642",
        "108837",
        "111981",
        "110768",
        "103828",
        "103267",
        "106786",
        "105261"
      ]
    }
  ]
};
