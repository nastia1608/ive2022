let cards = [
    {
        id: 1,
        img: "Астрономія.png",
        alt: "Астрономія 11 клас",
        title: "Астрономія 11 клас",
        cardText: "Шкільний підручник 11 клас астрономія М.П. Пришляк «Ранок» 2019 рік",
        price: 270,
    },
    {
        id: 2,
        img: "Алгебра.png",
        alt: "Алгебра 11 клас",
        title: "Алгебра 11 клас",
        cardText: "Шкільний підручник 11 клас алгебра А.Г. Мерзляк, Д.А. Номіровський «Гімназія» 2019 рік (профільний рівень, українська мова навчання)",
        price: 170,
    },
    {
        id: 3,
        img: "Біологія.png",
        alt: "Біологія 11 клас",
        title: "Біологія 11 клас",
        cardText: "Шкільний підручник 11 клас біологія К.М. Задорожний «Ранок» 2019 рік",
        price: 195,
    },
    {
        id: 4,
        img: "Геометрія.png",
        alt: "Геометрія 11 клас",
        title: "Геометрія 11 клас",
        cardText: "Шкільний підручник 11 клас геометрія А.Г. Мерзляк, Д.А. Номіровський «Гімназія» 2019 рік (профільний рівень)",
        price: 320,
    }
];

const catalogHtml = document.getElementById("catalog-cards-id");
catalogHtml.innerHTML = "";
for (let i = 0; i < cards.length; i++) {
    catalogHtml.innerHTML += `<div class="col-12 col-sm-6 col-md-4 col-lg-3">
                <div class="card mb-2" style="width: 100%;">
                    <img src="${cards[i].img}" class="card-img-top" alt="${cards[i].alt}">
                    <div class="card-body">
                        <h5 class="card-title">${cards[i].title}</h5>
                        <p class="card-text">${cards[i].cardText}</p>
                        <button type="button" class="btn btn-warning">В корзину</button>
                    </div>
                </div>
            </div>`;
}