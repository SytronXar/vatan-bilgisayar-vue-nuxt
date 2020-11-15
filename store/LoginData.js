const Gender = Object.freeze({ Male: 1, Female: 2 });
const AddressType = Object.freeze({ Personal: 1, Corporate: 2 })
const MessageStatus= Object.freeze({Answered:1,notAnswered:2})
export default {
    Gender,
    AddressType,
    currentUserId: null,
    loginStatus:false,
    UsersData: [
        {
            id: 1008,
            name: "Ali Limon",
            e_mail: "alilimon@v.com",
            password: "0000",
            phoneNumber: "123456789",
            birthDay: "1998-03-14",
            gender: Gender.Male,
            getSpecialOfferMessage: false,
            ordersId: [{}],
            couponsId: [],
            messages: [
                { id: 0, date:"2020-11-06",status:MessageStatus.Answered,message:"1 nolu ürünün kırmızı rengi mevcut mudur?",answer:"evet, mevcuttur"},
            ],
            favoriteProducts: [{}],
            addresses: [
                {
                    adressType: AddressType.Personal,
                    name: "Ev Adresim",
                    city: 6,
                    district: "Merkez",
                    detail: "Atatürk Cd., Evliya Sok., No:2, kat:1",
                    citizenNumber: "135648623",
                    isCitizenOfTurkey: true
                },
                {
                    adressType: AddressType.Corporate,
                    name: "İş Adresim",
                    city: 6,
                    district: "Merkez",
                    detail: "Atatürk Cd., Süleyman Sok., No:2, kat:1",
                    citizenNumber: "135648623",
                    isCitizenOfTurkey: true
                }
            ]
        }
    ],
    sehirler: ["Adana", "Adıyaman", "Afyon", "Ağrı", "Amasya", "Ankara", "Antalya", "Artvin", "Aydın", "Balıkesir", "Bilecik", "Bingöl", "Bitlis", "Bolu", "Burdur", "Bursa", "Çanakkale", "Çankırı", "Çorum", "Denizli", "Diyarbakır", "Edirne", "Elazığ", "Erzincan", "Erzurum", "Eskişehir", "Gaziantep", "Giresun", "Gümüşhane", "Hakkari", "Hatay", "Isparta", "İçel (Mersin)", "İstanbul", "İzmir", "Kars", "Kastamonu", "Kayseri", "Kırklareli", "Kırşehir", "Kocaeli", "Konya", "Kütahya", "Malatya", "Manisa", "Kahramanmaraş", "Mardin", "Muğla", "Muş", "Nevşehir", "Niğde", "Ordu", "Rize", "Sakarya", "Samsun", "Siirt", "Sinop", "Sivas", "Tekirdağ", "Tokat", "Trabzon", "Tunceli", "Şanlıurfa", "Uşak", "Van", "Yozgat", "Zonguldak", "Aksaray", "Bayburt", "Karaman", "Kırıkkale", "Batman", "Şırnak", "Bartın", "Ardahan", "Iğdır", "Yalova", "Karabük", "Kilis", "Osmaniye", "Düzce"
    ]
}