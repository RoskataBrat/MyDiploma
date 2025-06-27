// productData.js

import iphone from "../../assets/images/iphone.jpg";
import laptop from "../../assets/images/laptop.png";
import samsungA54 from "../../assets/images/samsungA54.jpg";
import wirelessMouse from "../../assets/images/wireless_mouse.jpg";
import redmiA3 from "../../assets/images/redmi a3.jpg";
import huawei_mate_40 from "../../assets/images/huawei_mate_40.jpg";
import acer_laptop from "../../assets/images/acer_laptop.jpg";
import lenovo_laptop from "../../assets/images/lenovo_thinkbook.jpg";
import apple_laptop from "../../assets/images/macbookAir15.jpg";
import asus_laptop from "../../assets/images/asus_vivobook.jpg";
import hp_laptop from "../../assets/images/laptop.png";
import acer_pc from "../../assets/images/pc-acer.jpg";
import apple_pc from "../../assets/images/macbookAir15.jpg";
import asus_pc from "../../assets/images/pc_asus.jpg";
import gigabyte_pc from "../../assets/images/pc-gigabyte.jpg";
import hp_pc from "../../assets/images/pc_hp.jpg";
import cklein from "../../assets/images/tshirt_cklein.jpg";
import tshirt_gucci from "../../assets/images/tshirt_gucci.webp";
import nortface from "../../assets/images/tshirt_theNortFace.jpg";
import tshirt_polo from "../../assets/images/tshirt_polo.webp";
import tshirt_adidas from "../../assets/images/t_shirt_adidas_green.jpg";
import tshirt_nike from "../../assets/images/t_shirt_nike_blue_red.png";
import nikeG from "../../assets/images/shoes_nike_gold.jpg";
import nikeJ from "../../assets/images/jordan.webp";
import hat_flexit from "../../assets/images/hats_flexit_acient.jpg";
import hat_new_york from "../../assets/images/hat_new_york.jpg";
import bakery_kroasan from "../../assets/images/kroasan.png";
import bakery_myphin from "../../assets/images/bakery_myfin.jpg";
import bakery_chreno_cadife from "../../assets/images/bakery_cakes_cherno_kadife.png";
import bakery_cherveno_cadife from "../../assets/images/bakery_cakes_cherveno_kadife.webp";
import bakery_ketyring from "../../assets/images/bakery_cakes_kroasan_ketyring.jpg";
import bakery_baklava from "../../assets/images/bakery_cakes_baklava_shan_fustuk.jpg";
import torta_saher from "../../assets/images/torta_shokoladova.webp";
import bread_vita from "../../assets/images/bread_vita.webp";
import bread_energy from "../../assets/images/bread_energy.webp";
import bread_baked from "../../assets/images/bread_baked.webp";
import banan from "../../assets/images/banan.png";
import portokal from "../../assets/images/portokal.png";
import qbylka from "../../assets/images/qbylka.jpg";
import marula from "../../assets/images/marula.jpg";
import domat from "../../assets/images/domat.jpeg";
import krastavica from "../../assets/images/krastavica.jpg";
import oriz from "../../assets/images/oriz.webp";
import bob from "../../assets/images/bob.jpg";
import grah from "../../assets/images/grah.webp";
import portfeil from "../../assets/images/portfeil.webp";
import ochila_boss from "../../assets/images/ochila_boss.avif";
import ochila_carera from "../../assets/images/ochila_carera.avif";
import pyteka from "../../assets/images/pyteka.webp";
import dymbeli from "../../assets/images/dymbeli.webp";
import giletka from "../../assets/images/giletka.webp";
import suitsher_women from "../../assets/images/suitsher_women.jpg";
import converse_shoes_women from "../../assets/images/converse_shoes_women.webp";
import pola_puma from "../../assets/images/pola_women.jpg";
import nike_shoes_women from "../../assets/images/nike_shoes_women.jpg";
import elek_carly from "../../assets/images/elek_women.jpg";
import roklq_women from "../../assets/images/roklq_women.webp";
import razer from "../../assets/images/razer.jpg";
import keis_porshe from "../../assets/images/keis_porshe.jpg";
import keis_sofia from "../../assets/images/keis_sofia.webp";
import keis_levski from "../../assets/images/keis_levski.jpg";
import keis_w1 from "../../assets/images/keis_w1.jpg";
import keis_w2 from "../../assets/images/keis_w2.jpg";
import keis_time from "../../assets/images/keis_time.jpeg";
import cake_fruit from "../../assets/images/cakes_fruit.jpg";
import cake_malina from "../../assets/images/cakes_malina.webp";
import shoko_biskvita from "../../assets/images/cakes_shoko_biskvita.webp";
import damski_maratonki from "../../assets/images/damski_maratonki.avif";
import damski_tokcheta from "../../assets/images/damski_tokcheta.avif";
import shoes_official from "../../assets/images/shoes_officiall.avif";
import shoes_nike from "../../assets/images/shoes_nike.avif";
import shoes_unknown from "../../assets/images/shoes_unknown.avif";
import shoes_adidas from "../../assets/images/shoes_adidas.webp";

const products = [
    {
        id: 1,
        slug: "gaming-pc",
        name: "Gaming PC",
        price: 1500,
        description: "Високопроизводителен гейминг компютър, оборудван с NVIDIA RTX 3080, 32 GB RAM и SSD диск, предназначен за гладко изживяване при най-новите AAA заглавия.",
        image: laptop,
        stock: true
    },
    {
        id: 2,
        slug: "laptop",
        name: "Acer",
        price: 299,
        description: "Мощен лаптоп от Acer с Intel процесор, 8 GB RAM и 256 GB SSD за безпроблемна работа и забавление навсякъде.",
        image: laptop,
        stock: true
    },
    {
        id: 3,
        slug: "iphone",
        name: "iPhone",
        price: 899,
        description: "Премиум смартфон с OLED Super Retina дисплей, процесор от серията A, усъвършенствана система от камери с нощен режим и поддръжка на 5G.",
        image: iphone,
        stock: true
    },
    {
        id: 4,
        slug: "mouse",
        name: "Wireless Mouse",
        price: 125,
        description: "Безжична мишка с ергономичен дизайн, високочувствителен сензор и дълъг живот на батерията за ефективна работа и гейминг.",
        image: wirelessMouse,
        stock: true
    },
    {
        id: 5,
        slug: "samsung-a54",
        name: "Samsung A54",
        price: 49,
        description: "Среден клас смартфон с 6.4\" Super AMOLED дисплей, Exynos 1380, 8 GB RAM, 50 MP камера и батерия 5000 mAh с бързо зареждане 25W.",
        image: samsungA54,
        stock: true
    },
    {
        id: 6,
        slug: "headphones_razer",
        name: "Razer - headphones",
        price: 50.00,
        description: "Гейминг слушалки Razer с обгръщащ звук, регулируема лента и микрофон с шумопотискане за кристално чиста комуникация.",
        image: razer,
        stock: true
    },

    /*!!! Smartphones !!!*/

    {
        id: 1,
        name: "iPhone",
        brand: "iPhone",
        price: 899.00,
        slug: "iphone",
        image: iphone,
        description: (
            <div className="space-y-2 text-gray-700">
                <p>
                    <strong>iPhone</strong> е премиум смартфон, съчетаващ елегантен дизайн, мощна производителност и безупречна интеграция с екосистемата на Apple.
                </p>
                <p className="text-sm">
                    <strong>Характеристики:</strong> OLED Super Retina дисплей, процесор A-серия, подобрена система от камери с нощен режим, поддръжка на 5G и дълъг живот на батерията.
                </p>
                <p>
                    <strong>Наличен в цветове:</strong> Midnight, Starlight, Product RED, Blue, Green.
                </p>
            </div>
        ),
        stock: true,
    },
    {
        id: 2,
        name: "Samsung A54",
        brand: "Samsung",
        price: 250.00,
        slug: "samsung-a54",
        image: samsungA54,
        description: (
            <div className="space-y-2 text-gray-700">
                <p>
                    <strong>Samsung Galaxy A54 5G</strong> е смартфон от среден клас, представен през март 2023 г., който предлага балансирано съчетание от производителност, камера и издръжливост на батерията.
                </p>
                <p className="text-sm">
                    <strong>Характеристики:</strong> 6.4-инчов Super AMOLED дисплей с 120 Hz, процесор Exynos 1380, до 8 GB RAM, до 256 GB памет, 50 MP основна камера, 5000 mAh батерия с 25 W зареждане, IP67 защита.
                </p>
                <p>
                    <strong>Наличен в цветове:</strong> Graphite, White, Violet, Lime.
                </p>
            </div>
        ),
        stock: true
    },
    {
        id: 3,
        name: "Xiaomi Redmi Note",
        brand: "Xiaomi",
        price: 250.00,
        slug: "xiaomi-redmi-note",
        image: redmiA3,
        description: (
            <div className="space-y-2 text-gray-700">
                <p>
                    <strong>Xiaomi Redmi Note</strong> е смартфон от среден клас, който предлага отлична стойност за цената си.
                </p>
                <p className="text-sm">
                    <strong>Характеристики:</strong> 6.67-инчов FHD+ AMOLED дисплей, Snapdragon процесор, до 6 GB RAM, 128 GB памет, 108 MP основна камера и батерия 5000 mAh с бързо зареждане 33 W.
                </p>
                <p>
                    <strong>Наличен в цветове:</strong> Onyx Gray, Glacier Blue, Gradient Bronze.
                </p>
            </div>
        ),
        stock: true,
    },
    {
        id: 4,
        name: "Huawei Mate 40",
        brand: "Huawei",
        price: 250.00,
        slug: "huawei-mate-40",
        image: huawei_mate_40,
        description: (
            <div className="space-y-2 text-gray-700">
                <p>
                    <strong>Huawei Mate 40</strong> е мощен смартфон, известен със своя иновативен дизайн и камера система, разработена с Leica.
                </p>
                <p className="text-sm">
                    <strong>Характеристики:</strong> 6.76-инчов OLED дисплей, Kirin 9000 процесор, до 8 GB RAM, до 256 GB памет, система от камери Ultra Vision, 4400 mAh батерия с 66 W бързо зареждане.
                </p>
                <p>
                    <strong>Наличен в цветове:</strong> Mystic Silver, White, Black, Green, Yellow.
                </p>
            </div>
        ),
        stock: true,
    },

    /*!!! Laptops !!!*/

    {
        id: 6,
        slug: "laptop_Acer",
        name: "Acer",
        price: 299.00,
        description: "Стилен лаптоп Acer с Intel Core i5, 8 GB RAM и 256 GB SSD за надеждна работа и забавление през целия ден.",
        image: acer_laptop,
        stock: true
    },
    {
        id: 7,
        slug: "laptop_Acer2",
        name: "Acer2",
        price: 299.00,
        description: "Компактен лаптоп Acer2 с AMD Ryzen, 8 GB оперативна памет и бърз SSD за офисни задачи и мултимедия.",
        image: acer_laptop,
        stock: true
    },
    {
        id: 8,
        slug: "laptop_Lenovo",
        name: "Lenovo ThinkBook",
        price: 450.00,
        description: "Lenovo ThinkBook с Intel Core i7, 16 GB RAM и 512 GB SSD – идеален за професионални задачи и мултитаскинг.",
        image: lenovo_laptop,
        stock: true
    },
    {
        id: 9,
        slug: "laptop_Apple",
        name: "MacBook Air 15",
        price: 999.00,
        description: "Лек MacBook Air 15\" с Apple M2 чип, 8 GB RAM и 256 GB SSD за бърза работа и дълъг живот на батерията.",
        image: apple_laptop,
        stock: true
    },
    {
        id: 10,
        slug: "laptop_HP",
        name: "HP",
        price: 199.00,
        description: "HP лаптоп с Intel Core i3, 4 GB RAM и 128 GB SSD за ежедневни задачи и онлайн забавления.",
        image: hp_laptop,
        stock: true
    },
    {
        id: 11,
        slug: "laptop_ASUS",
        name: "ASUS Vivobook",
        price: 199.00,
        description: "ASUS Vivobook с AMD Ryzen 5, 8 GB RAM и 256 GB SSD – перфектен за студенти и леки офисни приложения.",
        image: asus_laptop,
        stock: true
    },

    /*!!! Computers !!!*/

    {
        id: 12,
        slug: "pc_Acer",
        name: "Acer PC",
        price: 199.00,
        description: "Настолен компютър Acer с Intel Core i5, 8 GB RAM и 1 TB HDD – надеждно решение за домашна употреба и офис.",
        image: acer_pc,
        stock: true
    },
    {
        id: 13,
        slug: "pc_Apple",
        name: "IPAd",
        price: 199.00,
        description: "Мощен Apple настолен компютър с M1 чип, 8 GB RAM и 256 GB SSD за креативни задачи и мултимедия.",
        image: apple_pc,
        stock: true
    },
    {
        id: 14,
        slug: "pc_Asus",
        name: "ASUS PC",
        price: 199.00,
        description: "Настолен компютър ASUS с AMD Ryzen 7, 16 GB RAM и 512 GB SSD – отличен за гейминг и продуктивност.",
        image: asus_pc,
        stock: true
    },
    {
        id: 15,
        slug: "pc_gigabyte",
        name: "GIGABYTE PC",
        price: 199.00,
        description: "GIGABYTE настолен компютър с Intel Core i7, 16 GB RAM и 1 TB SSD за безкомпромисна производителност.",
        image: gigabyte_pc,
        stock: true
    },
    {
        id: 16,
        slug: "pc_hp",
        name: "HP PC",
        price: 199.00,
        description: "HP настолен компютър с Intel Core i5, 8 GB RAM и 512 GB SSD – стабилен за офис и развлечение.",
        image: hp_pc,
        stock: true
    },

    /*!!! T-Shirts !!!*/

    {
        id: 17,
        slug: "cklein",
        name: "Calvin Klein T-Shirt",
        category: "tshirt",
        price: 60.00,
        description: "Елегантна тениска Calvin Klein, изработена от висококачествен памук, с изчистен дизайн и дискретно лого на гърдите.",
        image: cklein,
        stock: true
    },
    {
        id: 18,
        slug: "gucci",
        name: "GUCCI T-Shirt",
        category: "tshirt",
        price: 60.00,
        description: "Луксозна тениска GUCCI от органичен памук с емблематичното лого 'GG' отпред, подходяща за изискани визии.",
        image: tshirt_gucci,
        stock: true
    },
    {
        id: 19,
        slug: "nortface",
        name: "The North Face T-Shirt",
        category: "tshirt",
        price: 60.00,
        description: "Удобна тениска The North Face от дишаща материя, подходяща за спорт и активен начин на живот със стилизирано лого отпред.",
        image: nortface,
        stock: true
    },
    {
        id: 20,
        slug: "polo",
        name: "Polo T-Shirt",
        category: "tshirt",
        price: 60.00,
        description: "Класическа тениска Polo от мек памук, с дискретно лого в горната част и елегантно прилепване по тялото.",
        image: tshirt_polo,
        stock: true
    },
    {
        id: 21,
        slug: "adidasT",
        name: "Adidas T-Shirt",
        category: "tshirt",
        price: 60.00,
        description: "Спортна тениска Adidas от дишаща материя, с отличителните три черти и лого, идеална за тренировки и ежедневие.",
        image: tshirt_adidas,
        stock: true
    },
    {
        id: 22,
        slug: "nikeT",
        name: "Nike T-Shirt",
        category: "tshirt",
        price: 60.00,
        description: "Модерна тениска Nike от висококачествена материя с технология за отвеждане на влагата и емблематичното лого 'Just Do It'.",
        image: tshirt_nike,
        stock: true
    },

    /*!!! Shoes !!!*/

    {
        id: 23,
        slug: "nikeF",
        name: "Nike Gold Shoes",
        category: "shoes",
        price: 80.00,
        description: "Стилни Nike Gold маратонки с амортизираща междинна подметка и издръжлив дизайн за комфорт при всяко стъпване.",
        image: nikeG,
        stock: true
    },
    {
        id: 24,
        slug: "nikeJ",
        name: "Nike Jordan Shoes",
        category: "shoes",
        price: 80.00,
        description: "Легендарни Nike Jordan обувки с емблематичен силует, висококачествена кожа и специална подметка за максимално сцепление.",
        image: nikeJ,
        stock: true
    },
    {
        id: 68,
        slug: "official",
        name: "Официални обувки",
        category: "Официални",
        price: 80.00,
        description: "Елегантни официални обувки от естествена кожа с класически дизайн и лека подметка за удобство през целия ден.",
        image: shoes_official,
        stock: true
    },
    {
        id: 69,
        slug: "nikeG",
        name: "Найк - за бягане",
        category: "Спортни",
        price: 80.00,
        description: "Спортни маратонки Nike за бягане с дишаща горна част и реагираща между­подметка за максимален комфорт по време на тренировка.",
        image: shoes_nike,
        stock: true
    },
    {
        id: 70,
        slug: "damski_maratonki",
        name: "Маратонки",
        category: "Спортни",
        price: 80.00,
        description: "Дамски спортни маратонки с лек дизайн, меко амортизиращо ходило и дишаща материя за оптимален комфорт при упражнения.",
        image: damski_maratonki,
        stock: true
    },
    {
        id: 71,
        slug: "damski_tokcheta",
        name: "Токчета",
        category: "Дамски",
        price: 80.00,
        description: "Елегантни дамски токчета с тънък ток и грапаво ходило, изработени от висококачествени материали за стабилност и стил.",
        image: damski_tokcheta,
        stock: true
    },
    {
        id: 72,
        slug: "red_runners",
        name: "Skorpion - за бягане",
        category: "Спортни",
        price: 80.00,
        description: "Маратонки Skorpion за бягане с иновативна подметка, дишаща горна част и отлична опора на стъпалото.",
        image: shoes_unknown,
        stock: true
    },
    {
        id: 73,
        slug: "adidas",
        name: "Адидас - спортно-елегантни",
        category: "Спортни",
        price: 80.00,
        description: "Спортно-елегантни обувки Adidas с класическа визия, мека подметка и дишаща материя, подходящи за всеки ден.",
        image: shoes_adidas,
        stock: true
    },

    /*!!! Hats !!!*/

    {
        id: 25,
        slug: "hatFlexit",
        name: "Flexit Hat",
        category: "hats",
        price: 29.00,
        description: "Стилна Flexit шапка с регулиращ се размер и класическо лого на предната част, изработена от мека памучна материя.",
        image: hat_flexit,
        stock: true
    },
    {
        id: 26,
        slug: "hatNewYork",
        name: "New York Hat",
        category: "hats",
        price: 29.00,
        description: "Шапка New York с плътен надпис отпред, регулируема закопчалка и здрава конструкция за ежедневно носене.",
        image: hat_new_york,
        stock: true
    },

    /*!!! Bakery !!!*/

    {
        id: 27,
        slug: "kroasan",
        name: "Кроасан - Френски",
        price: 10.00,
        description: "Автентичен френски кроасан, приготвен от качествено масло и брашно, с хрупкава коричка и мека, пухкава среда.",
        image: bakery_kroasan,
        stock: true
    },
    {
        id: 28,
        slug: "myphin",
        name: "Мъфин - шоколадов",
        price: 5.00,
        description: "Шоколадов мъфин с парченца натурален шоколад, пухкав и ароматен, идеален за следобедна закуска.",
        image: bakery_myphin,
        stock: true
    },
    {
        id: 29,
        slug: "cherno_kadife",
        name: "Торта - Черно кадифе",
        price: 50.00,
        description: "Невероятна торта Черно кадифе с шоколадови блатове, шоколадов мус и глазура, декорирана с хрупкави шоколадови макарони.",
        image: bakery_chreno_cadife,
        stock: true
    },
    {
        id: 30,
        slug: "cherveno_kadife",
        name: "Торта - Червено кадифе",
        price: 50.00,
        description: "Изискана торта Червено кадифе с блата с какао и кафе, обвити в крема сирене и ванилов крем.",
        image: bakery_cherveno_cadife,
        stock: true
    },
    {
        id: 31,
        slug: "ketyring",
        name: "Кроасан - Кетъринг",
        price: 10.00,
        description: "Порция кроасани за кетъринг – свежи, ръчно приготвени, подходящи за всяко събитие или бизнес среща.",
        image: bakery_ketyring,
        stock: true
    },
    {
        id: 32,
        slug: "baklava",
        name: "Баклава - Шан Фъстък",
        price: 50.00,
        description: "Традиционна баклава с фини кори, богата фъстъчна пълнеж и сироп, приготвена по майсторска рецепта.",
        image: bakery_baklava,
        stock: true
    },

    /* !!! Cakes !!! */

    {
        id: 33,
        slug: "saher",
        name: "Сахер",
        price: 50.00,
        description: "Класическа торта Сахер с плътен шоколадов блат и кайсиев мармалад, покрита с гланцова глазура от тъмен шоколад.",
        image: torta_saher,
        stock: true
    },
    {
        id: 65,
        slug: "cake_fruit",
        name: "Плодова торта",
        price: 50.00,
        description: "Пухкава торта с ванилов блат, крем маскарпоне и свежи плодове – ягоди, боровинки и киви.",
        image: cake_fruit,
        stock: true
    },
    {
        id: 66,
        slug: "cake_malina",
        name: "Торта - Малина",
        price: 50.00,
        description: "Ароматна торта с блат овкусен с малиново пюре, крем сирене и пресни малини отгоре.",
        image: cake_malina,
        stock: true
    },
    {
        id: 67,
        slug: "shoko_cookie",
        name: "Шоко бисквита",
        price: 50.00,
        description: "Домашна бисквитена торта с шоколадов мус, орехи и брауни, декорирана с хрупкави шоко парченца.",
        image: shoko_biskvita,
        stock: true
    },

    /* !!! Bread !!! */

    {
        id: 34,
        slug: "vita",
        name: "Пълнозърнест хляб - Вита",
        price: 50.00,
        description: "Здравословен пълнозърнест хляб Вита, приготвен от семена и трици за богат вкус и фибри.",
        image: bread_vita,
        stock: true
    },
    {
        id: 35,
        slug: "simid",
        name: "Пълнозърнест хляб - Симид",
        price: 50.00,
        description: "Пълнозърнест хляб Симид с маково семе и сусам, мек отвътре и хрупкав отвън.",
        image: bread_energy,
        stock: true
    },
    {
        id: 36,
        slug: "domashen",
        name: "Хляб - Домашен",
        price: 50.00,
        description: "Ароматен домашен хляб, приготвен на дървена пещ, с ръчно месене и хрупкава коричка.",
        image: bread_baked,
        stock: true
    },

    /*!!! Grocery !!!*/

    /* Fruits */

    {
        id: 37,
        slug: "banan",
        name: "Банани",
        price: 4.00,
        category: "fruits",
        description: "Пресни банани със свеж вкус и богата текстура, идеални за закуска или десерт.",
        image: banan,
        stock: true
    },
    {
        id: 38,
        slug: "portokal",
        name: "Портокали",
        price: 4.00,
        category: "fruits",
        description: "Сочно сладки портокали, богати на витамин C, подходящи за сокове и здравословни закуски.",
        image: portokal,
        stock: true
    },
    {
        id: 39,
        slug: "qbylka",
        name: "Ябълки",
        price: 4.00,
        category: "fruits",
        description: "Хрупкави ябълки с освежаващ вкус, идеални за междинна закуска и приготвяне на десерти.",
        image: qbylka,
        stock: true
    },

    /* Vegetables */

    {
        id: 40,
        slug: "marula",
        name: "Марула",
        price: 5.00,
        category: "vegetables",
        description: "Сочни марули, отгледани на открито, свежи и хрупкави – идеални за салати и сандвичи.",
        image: marula,
        stock: true
    },
    {
        id: 41,
        slug: "domat",
        name: "Домати",
        price: 4.00,
        category: "vegetables",
        description: "Пресни домати от грозд, сладки и сочни, подходящи за салати, сосове и леки ястия.",
        image: domat,
        stock: true
    },
    {
        id: 42,
        slug: "krastavica",
        name: "Краставици",
        price: 4.00,
        category: "vegetables",
        description: "Хрупкави краставици със свеж аромат, идеални за салати, туршии и закуски.",
        image: krastavica,
        stock: true
    },

    /* Beans & Grains */

    {
        id: 43,
        slug: "rice",
        name: "Ориз",
        price: 4.00,
        category: "beansgoods",
        description: "Висококачествен бял ориз, подходящ за гарнитури, ризото и азиатски специалитети.",
        image: oriz,
        stock: true
    },
    {
        id: 44,
        slug: "beans",
        name: "Боб",
        price: 4.00,
        category: "beansgoods",
        description: "Сушен фасул, богат на протеини и фибри, подходящ за супи, гювечи и салати.",
        image: bob,
        stock: true
    },
    {
        id: 45,
        slug: "grah",
        name: "Грах",
        price: 4.00,
        category: "beansgoods",
        description: "Зелен фасул (грах) в зърна, пресен и замразен, идеален за супи, гарнитури и сандвичи.",
        image: grah,
        stock: true
    },

    /* !!! Others !!!*/

    {
        id: 46,
        slug: "portfeil",
        name: "Портфейл - Естествена кожа",
        price: 19.99,
        description: "Елегантен портфейл от естествена кожа с няколко отделения за карти, банкноти и монети.",
        image: portfeil,
        stock: true
    },
    {
        id: 47,
        slug: "ochila_boss",
        name: "Boss - слънчеви очила",
        price: 99.99,
        description: "Луксозни слънчеви очила Boss със защитни UV лещи, метална рамка и изчист дизайн.",
        image: ochila_boss,
        stock: true
    },
    {
        id: 48,
        slug: "ochila_carera",
        name: "Carera - слънчеви очила",
        price: 99.99,
        description: "Стилни слънчеви очила Carrera с издръжлива пластмасова рамка и поляризирани лещи за максимален комфорт.",
        image: ochila_carera,
        stock: true
    },
    {
        id: 49,
        slug: "pyteka",
        name: "Пътека за бягане",
        price: 199.99,
        description: "Домашна пътека за бягане с регулируема скорост, LCD дисплей и възможност за сгъване, подходяща за тренировки вкъщи.",
        image: pyteka,
        stock: true
    },
    {
        id: 50,
        slug: "dymbeli",
        name: "Дъмбели до 30 кг",
        price: 99.99,
        description: "Комплект дъмбели с регулируемо тегло до 30 кг, изработени от здрава стомана и гумено покритие.",
        image: dymbeli,
        stock: true
    },
    {
        id: 51,
        slug: "giletka",
        name: "Жилетка до 20 кг",
        price: 99.99,
        description: "Регулируема жилетка за фитнес с възможност за добавяне на тежести до 20 кг за интензивни тренировки.",
        image: giletka,
        stock: true
    },

    /* !!! SportsGoods for Women !!! */

    {
        id: 52,
        slug: "suitsher_spring",
        name: "Суитшър - ELEONOR SPRING",
        price: 39.99,
        description: "Женски суитшърт ELEONOR SPRING от мека памучна материя с дизайнерски принт, идеален за пролетния сезон.",
        image: suitsher_women,
        stock: true
    },
    {
        id: 53,
        slug: "converse_obuvki",
        name: "CONVERSE Обувки - Chuck Taylor All Star",
        price: 99.99,
        description: "Класически дамски Converse Chuck Taylor All Star с плоска подметка, издръжливо платнено горно и емблематично лого.",
        image: converse_shoes_women,
        stock: true
    },
    {
        id: 54,
        slug: "pola_dynkova",
        name: "Пола - OLNSOPHIA",
        price: 99.99,
        description: "Женска пола OLNSOPHIA от лека, ефирна материя с висока талия и еластично коланче за комфорт и стил.",
        image: pola_puma,
        stock: true
    },
    {
        id: 55,
        slug: "obuvki_w",
        name: "NIKE - Обувки W UPLIFT SC",
        price: 199.99,
        description: "Дамски маратонки Nike W UPLIFT SC с лека конструкция, удобна мека подметка и дишаща горна част.",
        image: nike_shoes_women,
        stock: true
    },
    {
        id: 56,
        slug: "puma_roklq",
        name: "PUMA Рокля - ESS Slim",
        price: 99.99,
        description: "Женска рокля PUMA ESS Slim от еластична материя, прилепнал силует и елегантен спортен дизайн.",
        image: roklq_women,
        stock: true
    },
    {
        id: 57,
        slug: "elek_carly",
        name: "BRILLE Елек Carly",
        price: 99.99,
        description: "Женски елек BRILLE Carly от вата, подходящ за преходни сезони, с цип отпред и джобове за удобство.",
        image: elek_carly,
        stock: true
    },

    /* !!! Cases !!! */

    {
        id: 58,
        slug: "kporshe",
        name: "Калъф Porshe",
        price: 99.99,
        description: "Стилен калъф Porshe за смартфон, изработен от висококачествена полиуретанова кожа с дискретно лого.",
        image: keis_porshe,
        stock: true
    },
    {
        id: 59,
        slug: "kporshe",
        name: "Калъф Porshe",
        price: 99,
        description: "Елегантен калъф Porshe за телефон с плъзгащ механизъм и мека подплата отвътре за защита.",
        image: keis_porshe,
        stock: true
    },
    {
        id: 60,
        slug: "klevski",
        name: "Калъф Levski",
        price: 99,
        description: "Официален калъф Levski от устойчив материал със светлосиня декорация и емблематичното лого на отбора.",
        image: keis_levski,
        stock: true
    },
    {
        id: 61,
        slug: "ksofia",
        name: "Калъф Sofia",
        price: 99,
        description: "Калъф за телефон Sofia с модерен принт на градски пейзаж, изработен от здрав силиконов материал.",
        image: keis_sofia,
        stock: true
    },
    {
        id: 62,
        slug: "k_w1",
        name: "Калъф Butterfly",
        price: 90,
        description: "Лек калъф Butterfly за смартфон с прозрачна корица и 3D релефен дизайн на пеперуди.",
        image: keis_w1,
        stock: true
    },
    {
        id: 63,
        slug: "k_w2",
        name: "Калъф SunShine",
        price: 90,
        description: "Слънчев калъф SunShine с ярък летен принт и хибридна защита от удари и драскотини.",
        image: keis_w2,
        stock: true
    },
    {
        id: 64,
        slug: "ktime",
        name: "Калъф OnTime",
        price: 90,
        description: "Функционален калъф OnTime с прозорец за уведомления, магнитно закопчаване и пълна защита от надраскване.",
        image: keis_time,
        stock: true
    }
];


export default products;
