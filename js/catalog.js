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
    },
    {
        id: 5,
        img: "Всесвітня історія.png",
        alt: "Всесвітня історія 11 клас",
        title: "Всесвітня історія 11 клас",
        cardText: "Шкільний підручник 11 клас всесвітня історія Т.В. Ладиченко «Грамота» 2011 рік",
        price: 320,
    },
    {
        id: 6,
        img: "Географія.png",
        alt: "Географія 11 клас",
        title: "Географія 11 клас",
        cardText: "Шкільний підручник 11 клас географія Т.Г. Гільберг, І.Г. Савчук «Оріон» 2019 рік",
        price: 320,
    },
    {
        id: 7,
        img: "Інформатика.png",
        alt: "Інформатика 11 клас",
        title: "Інформатика 11 клас",
        cardText: "Шкільний підручник 11 клас інформатика Н.В. Морзе, О.В. Барна «Школяр» 2011 рік",
        price: 320,
    },
    {
        id: 8,
        img: "Історія України.png",
        alt: "Історія України 11 клас",
        title: "Історія України 11 клас",
        cardText: "Шкільний підручник 11 клас історія України О.К. Струкевич «Грамота» 2011 рік",
        price: 320,
    },
    {
        id: 9,
        img: "Математика.png",
        alt: "Математика 11 клас",
        title: "Математика 11 клас",
        cardText: "Шкільний підручник 11 клас математика А.Г. Мерзляк «Гімназія» 2019 рік",
        price: 320,
    },
    {
        id: 10,
        img: "Зарубіжна література.png",
        alt: "Зарубіжна література 11 клас",
        title: "Зарубіжна література 11 клас",
        cardText: "Шкільний підручник 11 клас світова література О.О. Ісаєва «Оріон» 2019 рік",
        price: 320,
    },
    {
        id: 11,
        img: "Українська література.png",
        alt: "Українська література 11 клас",
        title: "Українська література 11 клас",
        cardText: "Шкільний підручник 11 клас українська література О.І. Борзенко «Ранок» 2019 рік",
        price: 320,
    },
    {
        id: 12,
        img: "Українська мова.png",
        alt: "Українська мова 11 клас",
        title: "Українська мова 11 клас",
        cardText: "Шкільний підручник 11 клас українська мова О.П. Глазова «Ранок» 2019 рік",
        price: 320,
    },
    {
        id: 13,
        img: "Фізика.png",
        alt: "Фізика 11 клас",
        title: "Фізика 11 класс",
        cardText: "Шкільний підручник 11 клас фізика В.Г. Бар’яхтар, С.О. Довгий «Ранок» 2019 рік",
        price: 320,
    },
    {
        id: 14,
        img: "Хімія.png",
        alt: "Хімія 11 клас",
        title: "Хімія 11 класс",
        cardText: "Шкільний підручник 11 клас хімія Л.П. Величко, Н.М. Буринська «Школяр» 2013 рік",
        price: 320,
    },
    {
        id: 15,
        img: "Інформатика5.png",
        alt: "Інформатика 5 клас",
        title: "Інформатика 5 клас",
        cardText: "Шкільний підручник 5 клас інформатика Н.В. Морзе, О.В. Варна «Освіта» 2013 рік",
        price: 320,
    },
    {
        id: 16,
        img: "Історія України5.png",
        alt: "Історія України 5 клас",
        title: "Історія України 5 клас",
        cardText: "Шкільний підручник 5 клас історія України Р.Я. Пастушенко «Астон» 2018 рік",
        price: 320,
    },
    {
        id: 17,
        img: "Математика5.png",
        alt: "Математика 5 клас",
        title: "Математика 5 клас",
        cardText: "Шкільний підручник 5 клас математика О.С. Істер «Генеза» 2013 рік",
        price: 320,
    },
    {
        id: 18,
        img: "Музичне мистецтво5.png",
        alt: "Музичне мистецтво 5 клас",
        title: "Музичне мистецтво 5 клас",
        cardText: "Шкільний підручник 5 клас музичне мистецтво Л.Г. Кондратова «Навчальна книга - Богдан» 2013 рік",
        price: 320,
    },
    {
        id: 19,
        img: "Основи здоров'я5.png",
        alt: "Основи здоров'я 5 клас",
        title: "Основи здоров'я 5 клас",
        cardText: "Шкільний підручник 5 клас основи здоров’я Т.Є. Бойченко «Генеза» 2018 рік",
        price: 320,
    },
    {
        id: 20,
        img: "Світова література5.png",
        alt: "Світова література 5 клас",
        title: "Світова література 5 клас",
        cardText: "Шкільний підручник 5 клас світова література Є.В. Волощук «Генеза» 2013 рік",
        price: 320,
    },
    {
        id: 21,
        img: "Українська література5.png",
        alt: "Українська література 5 клас",
        title: "Українська література 5 клас",
        cardText: "Шкільний підручник 5 клас українська література О.М. Авраменко «Грамота» 2013 рік",
        price: 320,
    },
    {
        id: 22,
        img: "Українська мова5.png",
        alt: "Українська мова 5 клас",
        title: "Українська мова 5 клас",
        cardText: "Шкільний підручник 5 клас українська мова О.В. Заболотний, В.В. Заболотний «Генеза» 2013 рік",
        price: 320,
    },
    {
        id: 23,
        img: "Природознавство5.png",
        alt: "Природознавств 5 клас",
        title: "Природознавств 5 клас",
        cardText: "Шкільний підручник 5 клас природознавство Т.В. Коршевнюк, В.І. Баштовий «Генеза» 2013 рік",
        price: 320,
    },
    {
        id: 24,
        img: "Біологія6.png",
        alt: "Біологія 6 клас",
        title: "Біологія 6 клас",
        cardText: "Шкільний підручник 6 клас біологія Л.І. Остапченко «Генеза» 2014 рік",
        price: 320,
    },
    {
        id: 25,
        img: "Всесвітня історія6.png",
        alt: "Всесвітня історія6 6 клас",
        title: "Всесвітня історія6 6 клас",
        cardText: "Шкільний підручник 6 клас всесвітня історія О.В. Гісем «Ранок» 2019 рік",
        price: 320,
    },
    {
        id: 26,
        img: "Географія6.png",
        alt: "Географія 6 клас",
        title: "Географія 6 клас",
        cardText: "Шкільний підручник 6 клас географія В.Ю. Пестушко «Генеза» 2014 рік",
        price: 320,
    },
    {
        id: 27,
        img: "Інформатика6.png",
        alt: "Інформатика 6 клас",
        title: "Інформатика 6 клас",
        cardText: "Шкільний підручник 6 клас інформатика Й.Я. Ривкінд «Генеза» 2019 рік",
        price: 320,
    },
    {
        id: 28,
        img: "Математика6.png",
        alt: "Математика 6 клас",
        title: "Математика 6 клас",
        cardText: "Шкільний підручник 6 клас математика О.С. Істер «Генеза» 2014 рік",
        price: 320,
    },
    {
        id: 29,
        img: "Музичне мистецтво6.png",
        alt: "Музичне мистецтво 6 клас",
        title: "Музичне мистецтво 6 клас",
        cardText: "Шкільний підручник 6 клас музичне мистецтво Л.Г. Кондратова 2014 рік",
        price: 320,
    },
    {
        id: 30,
        img: "Основи здоров'я6.png",
        alt: "Основи здоров'я 6 клас",
        title: "Основи здоров'я 6 клас",
        cardText: "Шкільний підручник 6 клас основи здоров’я І.Д. Бех «Алатон» 2014 рік",
        price: 320,
    },
    {
        id: 31,
        img: "Світова література6.png",
        alt: "Світова література 6 клас",
        title: "Світова література 6 клас",
        cardText: "Шкільний підручник 6 клас світова література Є.В. Волощук 2014 рік",
        price: 320,
    },
    {
        id: 32,
        img: "Українська література6.png",
        alt: "Українська література 6 клас",
        title: "Українська література 6 клас",
        cardText: "Шкільний підручник 6 клас українська література О.М. Авраменко 2014 рік",
        price: 320,
    },
    {
        id: 33,
        img: "Українська мова6.png",
        alt: "Українська мова 6 клас",
        title: "Українська мова 6 клас",
        cardText: "Шкільний підручник 6 клас українська мова О.В. Заболотний «Генеза» 2014 рік",
        price: 320,
    },
    {
        id: 34,
        img: "Алгебра7.png",
        alt: "Алгебра 7 клас",
        title: "Алгебра 7 клас",
        cardText: "Шкільний підручник 7 клас алгебра О.С. Істер «Генеза» 2015 рік",
        price: 320,
    },
    {
        id: 35,
        img: "Біологія7.png",
        alt: "Біологія 7 клас",
        title: "Біологія 7 клас",
        cardText: "Шкільний підручник 7 клас біологія В.І. Соболь «Абетка» 2015 рік",
        price: 320,
    },
    {
        id: 36,
        img: "Всесвітня історія7.png",
        alt: "Всесвітня історія 7 клас",
        title: "Всесвітня історія 7 клас",
        cardText: "Шкільний підручник 7 клас всесвітня історія О.В. Гісем «Ранок» 2015 рік",
        price: 320,
    },
    {
        id: 37,
        img: "Географія7.png",
        alt: "Географія 7 клас",
        title: "Географія 7 клас",
        cardText: "Шкільний підручник 7 клас географія В.М. Бойко «Сиция» 2015 рік",
        price: 320,
    },
    {
        id: 38,
        img: "Геометрія7.png",
        alt: "Геометрія 7 клас",
        title: "Геометрія 7 клас",
        cardText: "Шкільний підручник 7 клас геометрія О.С. Істер «Генеза» 2015 рік",
        price: 320,
    },
    {
        id: 39,
        img: "Інформатика7.png",
        alt: "Інформатика 7 клас",
        title: "Інформатика 7 клас",
        cardText: "Шкільний підручник 7 клас інформатика Н.В. Морзе «Генеза» 2015 рік",
        price: 320,
    },
    {
        id: 40,
        img: "Історія України7.png",
        alt: "Історія України 7 клас",
        title: "Історія України 7 клас",
        cardText: "Шкільний підручник 7 клас історія України О.В. Гісем «Ранок» 2015 рік",
        price: 320,
    },
    {
        id: 41,
        img: "Музичне мистецтво7.png",
        alt: "Музичне мистецтво 7 клас",
        title: "Музичне мистецтво 7 клас",
        cardText: "Шкільний підручник 7 клас музичне мистецтво Л.М. Масол «Сиция» 2015 рік",
        price: 320,
    },
    {
        id: 42,
        img: "Основи здоров'я7.png",
        alt: "Основи здоров'я 7 клас",
        title: "Основи здоров'я 7 клас",
        cardText: "Шкільний підручник 7 клас основи здоров’я І.Д. Бех «Алатон» 2015 рік",
        price: 320,
    },
    {
        id: 43,
        img: "Світова література7.png",
        alt: "Світова література 7 клас",
        title: "Світова література 7 клас",
        cardText: "Шкільний підручник 7 клас світова література Є.В. Волощук «Генеза» 2015 рік",
        price: 320,
    },
    {
        id: 44,
        img: "Українська література7.png",
        alt: "Українська  література 7 клас",
        title: "Українська  література 7 клас",
        cardText: "Шкільний підручник 7 клас українська література О.М. Авраменко 2015 рік",
        price: 320,
    },
    {
        id: 45,
        img: "Українська мова7.png",
        alt: "Українська  мова 7 клас",
        title: "Українська  мова 7 клас",
        cardText: "Шкільний підручник 7 клас українська мова О.П. Глазова «Освіта» 2015 рік",
        price: 320,
    },
    {
        id: 46,
        img: "Фізика7.png",
        alt: "Фізика 7 клас",
        title: "Фізика 7 клас",
        cardText: "Шкільний підручник 7 клас фізика В.Г. Бар’яхтар «Ранок» 2015 рік",
        price: 320,
    },
    {
        id: 47,
        img: "Хімія7.png",
        alt: "Хімія 7 клас",
        title: "Хімія 7 клас",
        cardText: "Шкільний підручник 7 клас хімія О.В. Григорович «Ранок» 2015 рік",
        price: 320,
    },
    {
        id: 48,
        img: "Алгебра8.png",
        alt: "Алгебра 8 клас",
        title: "Алгебра 8  клас",
        cardText: "Шкільний підручник 8 клас алгебра О.С. Істер «Генеза» 2016 рік",
        price: 320,
    },
    {
        id: 49,
        img: "Біологія8.png",
        alt: "Біологія 8 клас",
        title: "Біологія 8  клас",
        cardText: "Шкільний підручник 8 клас біологія В.І. Соболь «Абетка» 2016 рік",
        price: 320,
    },
    {
        id: 50,
        img: "Всесвітня історія8.png",
        alt: "Всесвітня історія 8 клас",
        title: "Всесвітня історія 8  клас",
        cardText: "Шкільний підручник 8 клас всесвітня історія О.В. Гісем 2016 рік",
        price: 320,
    },
    {
        id: 51,
        img: "Географія8.png",
        alt: "Географія 8 клас",
        title: "Географія 8  клас",
        cardText: "Шкільний підручник 8 клас географія В.М. Бойко «Абетка» 2016 рік",
        price: 320,
    },
    {
        id: 52,
        img: "Геометрія8.png",
        alt: "Геометрія 8 клас",
        title: "Геометрія 8  клас",
        cardText: "Шкільний підручник 8 клас геометрія А.Г. Мерзляк «Гімназія» 2016 рік",
        price: 320,
    },
    {
        id: 53,
        img: "Інформатика8.png",
        alt: "Інформатика 8 клас",
        title: "Інформатика 8  клас",
        cardText: "Шкільний підручник 8 клас інформатика Й.Я. Ривкінд «Генеза» 2016 рік",
        price: 320,
    },
    {
        id: 54,
        img: "Історія України8.png",
        alt: "Історія України 8 клас",
        title: "Історія України 8  клас",
        cardText: "Шкільний підручник 8 клас історія України О.В. Гісем «Ранок» 2016 рік",
        price: 320,
    },
    {
        id: 55,
        img: "Музичне мистецтво8.png",
        alt: "Музичне мистецтво 8 клас",
        title: "Музичне мистецтво 8  клас",
        cardText: "Шкільний підручник 8 клас музичне мистецтво Г.М. Макаренко 2008 рік",
        price: 320,
    },
    {
        id: 56,
        img: "Основи здоров'я8.png",
        alt: "Основи здоров'я 8 клас",
        title: "Основи здоров'я 8  клас",
        cardText: "Шкільний підручник 8 клас основи здоров’я І.Д. Бех «Алатон» 2016 рік",
        price: 320,
    },
    {
        id: 57,
        img: "Світова література8.png",
        alt: "Світова література 8 клас",
        title: "Світова література 8  клас",
        cardText: "Шкільний підручник 8 клас світова література О.М. Ніколенко 2016 рік",
        price: 320,
    },
    {
        id: 58,
        img: "Українська література8.png",
        alt: "Українська література 8 клас",
        title: "Українська література 8  клас",
        cardText: "Шкільний підручник 8 клас українська література О.М. Авраменко 2016 рік",
        price: 320,
    },
    {
        id: 59,
        img: "Українська мова8.png",
        alt: "Українська мова 8 клас",
        title: "Українська мова 8  клас",
        cardText: "Шкільний підручник 8 клас українська мова О.В. Заболотний «Генеза» 2016 рік",
        price: 320,
    },
    {
        id: 60,
        img: "Фізика8.png",
        alt: "Фізика 8 клас",
        title: "Фізика 8  клас",
        cardText: "Шкільний підручник 8 клас фізика В.Г. Бар’яхтар, С.О. Довгий «Ранок» 2016 рік",
        price: 320,
    },
    {
        id: 61,
        img: "Хімія8.png",
        alt: "Хімія 8 клас",
        title: "Хімія 8  клас",
        cardText: "Шкільний підручник 8 клас хімія М.М. Савчин «Грамота» 2016 рік",
        price: 320,
    },
    {
        id: 62,
        img: "Алгебра9.png",
        alt: "Алгебра 9 клас",
        title: "Алгебра 9 клас",
        cardText: "Шкільний підручник 9 клас алгебра О.С. Істер «Генеза» 2017 рік",
        price: 320,
    },
    {
        id: 63,
        img: "Біологія9.png",
        alt: "Біологія 9 клас",
        title: "Біологія 9 клас",
        cardText: "Шкільний підручник 9 клас біологія В.І. Соболь «Абетка» 2017 рік",
        price: 320,
    },
    {
        id: 64,
        img: "Всесвітня історія9.png",
        alt: "Всесвітня історія 9 клас",
        title: "Всесвітня історія 9 клас",
        cardText: "Шкільний підручник 9 клас всесвітня історія О.В. Гісем «Ранок» 2017 рік",
        price: 320,
    },
    {
        id: 65,
        img: "Географія9.png",
        alt: "Географія 9 клас",
        title: "Географія 9 клас",
        cardText: "Шкільний підручник 9 клас географія В.М. Бойко, І.Л. Дітчук 2017 рік",
        price: 320,
    },
    {
        id: 66,
        img: "Геометрія9.png",
        alt: "Геометрія 9 клас",
        title: "Геометрія 9 клас",
        cardText: "Шкільний підручник 9 клас геометрія А.Г. Мерзляк «Гімназія» 2017 рік",
        price: 320,
    },
    {
        id: 67,
        img: "Інформатика9.png",
        alt: "Інформатика 9 клас",
        title: "Інформатика 9 клас",
        cardText: "Шкільний підручник 9 клас інформатика Й.Я. Ривкінд «Генеза» 2017 рік ",
        price: 320,
    },
    {
        id: 68,
        img: "Історія України9.png",
        alt: "Історія України 9 клас",
        title: "Історія України 9 клас",
        cardText: "Шкільний підручник 9 клас історія України О.В. Гісем «Ранок» 2017 рік",
        price: 320,
    },
    {
        id: 69,
        img: "Основи здоров'я9.png",
        alt: "Основи здоров'я 9 клас",
        title: "Основи здоров'я 9 клас",
        cardText: "Шкільний підручник 9 клас основи здоров’я О.В. Тагліна «Ранок» 2017 рік",
        price: 320,
    },
    {
        id: 70,
        img: "Світова література9.png",
        alt: "Світова література 9 клас",
        title: "Світова література 9 клас",
        cardText: "Шкільний підручник 9 клас світова література О.О. Ісаєва «Оріон» 2017 рік",
        price: 320,
    },
    {
        id: 71,
        img: "Українська література9.png",
        alt: "Українська література 9 клас",
        title: "Українська література 9 клас",
        cardText: "Шкільний підручник 9 клас українська література О.М. Авраменко 2017 рік",
        price: 320,
    },
    {
        id: 72,
        img: "Українська мова9.png",
        alt: "Українська мова 9 клас",
        title: "Українська мова 9 клас",
        cardText: "Шкільний підручник 9 клас українська мова О.М. Авраменко 2017 рік",
        price: 320,
    },
    {
        id: 73,
        img: "Фізика9.png",
        alt: "Фізика 9 клас",
        title: "Фізика 9 клас",
        cardText: "Шкільний підручник 9 клас фізика В.Г. Бар’яхтар «Ранок» 2017 рік",
        price: 320,
    },
    {
        id: 74,
        img: "Хімія9.png",
        alt: "Хімія 9 клас",
        title: "Хімія 9 клас",
        cardText: "Шкільний підручник 9 клас хімія М.М. Савчин «Грамота» 2017 рік",
        price: 320,
    },
    {
        id: 75,
        img: "Біологія10.png",
        alt: "Біологія 10 клас",
        title: "Біологія 10 клас",
        cardText: "Шкільний підручник 10 клас біологія В.І. Соболь «Абетка» 2018 рік",
        price: 320,
    },
    {
        id: 76,
        img: "Всесвітня історія10.png",
        alt: "Всесвітня історія 10 клас",
        title: "Всесвітня історія 10 клас",
        cardText: "Шкільний підручник 10 клас всесвітня історія О.В. Гісем 2018 рік",
        price: 320,
    },
    {
        id: 77,
        img: "Географія10.png",
        alt: "Географія 10 клас",
        title: "Географія 10 клас",
        cardText: "Шкільний підручник 10 клас географія В.В. Безуглий «Генеза» 2018 рік",
        price: 320,
    },
    {
        id: 78,
        img: "Громадянська освіта10.png",
        alt: "Громадянська освіта 10 клас",
        title: "Громадянська освіта 10 клас",
        cardText: "Шкільний підручник 10 клас громадянська освіта О.О. Гісем «Ранок» 2018 рік",
        price: 320,
    },
    {
        id: 79,
        img: "Інформатика10.png",
        alt: "Інформатика 10 клас",
        title: "Інформатика 10 клас",
        cardText: "Шкільний підручник 10 клас інформатика Й.Я. Ривкінд «Генеза» 2018 рік",
        price: 320,
    },
    {
        id: 80,
        img: "Історія України10.png",
        alt: "Історія України 10 клас",
        title: "Історія України 10 клас",
        cardText: "Шкільний підручник 10 клас історія України О.В. Гісем «Ранок» 2018 рік",
        price: 320,
    },
    {
        id: 81,
        img: "Математика10.png",
        alt: "Математика 10 клас",
        title: "Математика 10 клас",
        cardText: "Шкільний підручник 10 клас математика О.С. Істер «Генеза» 2018 рік",
        price: 320,
    },
    {
        id: 82,
        img: "Світова література10.png",
        alt: "Світова література 10 клас",
        title: "Світова література 10 клас",
        cardText: "Шкільний підручник 10 клас світова література О.О. Ісаєва «Оріон» 2018 рік",
        price: 320,
    },
    {
        id: 83,
        img: "Українська література10.png",
        alt: "Українська література 10 клас",
        title: "Українська література 10 клас",
        cardText: "Шкільний підручник 10 клас українська література О.М. Авраменко 2018 рік",
        price: 320,
    },
    {
        id: 84,
        img: "Українська мова10.png",
        alt: "Українська мова 10 клас",
        title: "Українська мова 10 клас",
        cardText: "Шкільний підручник 10 клас українська мова О.М. Авраменко «Грамота» 2018 рік",
        price: 320,
    },
    {
        id: 85,
        img: "Фізика10.png",
        alt: "Фізика 10 клас",
        title: "Фізика 10 клас",
        cardText: "Шкільний підручник 10 клас фізика В.Г. Бар’яхтар «Ранок» 2018 рік",
        price: 320,
    },
    {
        id: 86,
        img: "Хімія10.png",
        alt: "Хімія 10 клас",
        title: "Хімія 10 клас",
        cardText: "Шкільний підручник 10 клас хімія М.М. Савчин «Грамота» 2018 рік",
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