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

const products = [
    {
        id: 1,
        slug: "gaming-pc",
        name: "Gaming PC",
        price: 1500.00,
        description: "High-performance gaming PC with RTX 3080 and 32GB RAM.",
        image: laptop ,
        stock: true
    },
    {
        id: 2,
        slug: "laptop",
        name: "Acer",
        price: 299.00,
        description: "Powerful laptop for work and entertainment.",
        image: laptop ,
        stock: true
    },
    {
        id: 3,
        slug: "iphone",
        name: "iPhone",
        price: 899.00, // Change this to a number
         description: "Latest iPhone with cutting-edge technology.",
        image: iphone,
        stock: true
    },
       
    {
        id: 4,
        slug: "mouse",
        name: "Wireless Mouse",
        price: 125.00,
        description: "Latest iPhone with cutting-edge technology.",
        image: wirelessMouse,
        stock: true
    },
    {
        id: 5,
        slug: "samsung A54",
        name: "Samsung A54",
        price: 49.00,
        description: "Latest iPhone with cutting-edge technology.",
        image: samsungA54,
        stock: true
    },
    {
        id: 6,
        slug: "headphones_razer",
        name: "Razer - headphones",
        price: 50.00,
        description: "Latest iPhone with cutting-edge technology.",
        image:razer,
        stock: true
    },


    /*!!! Smartphones !!!*/

    
        { id: 1, name: "iPhone", brand: "iPhone", price: 899.00, slug: "iphone", image: iphone, description: "iPhone детайли", stock: true, },
        { id: 2, name: "Samsung A54", brand: "Samsung", price: 250.00, slug: "samsung-a54", image: samsungA54, description: "Samsung детайли", stock: true },
        { id: 3, name: "Xiaomi Redmi Note", brand: "Xiaomi", price: 250.00, slug: "xiaomi-redmi-note", image: redmiA3, description: "Xiaomi детайли", stock: true },
        { id: 4, name: "Huawei Mate 40", brand: "Huawei", price: 250.00, slug: "huawei-mate-40", image: huawei_mate_40, description: "Huawei детайли", stock: true },
        // Add more products
      

    /*!!! Laptops !!!*/

    /*Acer*/
    {
        id: 6,
        slug: "laptop_Acer",
        name: "Acer",
        price: 299.00,
        description: "Powerful laptop for work and entertainment.",
        image: acer_laptop,
        stock: true
    },
    {
        id: 7,
        slug: "laptop_Acer2",
        name: "Acer2",
        price: 299.00,
        description: "Powerful laptop for work and entertainment.",
        image: acer_laptop,
        stock: true
    },
    /*Lenovo*/
    {
        id: 8,
        slug: "laptop_Lenovo",
        name: "Lenovo ThinkBook",
        price: 450.00,
        description: "Powerful laptop for work and entertainment.",
        image: lenovo_laptop,
        stock: true
    },
     /*Apple*/
    {
        id: 9,
        slug: "laptop_Apple",
        name: "MacBook Air 15",
        price: 999.00,
        description: "Powerful laptop for work and entertainment.",
        image: apple_laptop,
        stock: true
    },
    /*HP*/
    {
        id: 10,
        slug: "laptop_HP",
        name: "HP",
        price: 199.00,
        description: "Powerful laptop for work and entertainment.",
        image: hp_laptop,
        stock: true
    },
    /*ASUS*/
    {
        id: 11,
        slug: "laptop_ASUS",
        name: "ASUS Vivobook",
        price: 199.00,
        description: "Powerful laptop for work and entertainment.",
        image: asus_laptop,
        stock: true
    },

    /*!!! Computers !!!*/

    /*Acer*/
    {
        id: 12,
        slug: "pc_Acer",
        name: "Acer PC",
        price: 199.00,
        description: "Powerful laptop for work and entertainment.",
        image: acer_pc,
        stock: true
    },
    /*Apple*/
    {
        id: 13,
        slug: "pc_Apple",
        name: "IPAd",
        price: 199.00,
        description: "Powerful laptop for work and entertainment.",
        image: apple_pc,
    },
    /*Asus*/
    {
        id: 14,
        slug: "pc_Asus",
        name: "ASUS PC",
        price: 199.00,
        description: "Powerful laptop for work and entertainment.",
        image: asus_pc,
        stock: true
    },
    /*Gigabyte*/
    {
        id: 15,
        slug: "pc_gigabyte",
        name: "GIGABYTE PC",
        price: 199.00,
        description: "Powerful laptop for work and entertainment.",
        image: gigabyte_pc,
        stock: true
    },
    /*HP*/
    {
        id: 16,
        slug: "pc_hp",
        name: "HP PC",
        price: 199.00,
        description: "Powerful laptop for work and entertainment.",
        image: hp_pc,
        stock: true
    },

     /*!!! T-Shirts !!!*/

     {
        id: 17,
        slug: "cklein",
        name: "Calvin Klein T-Shirt",
        category:"tshirt",
        price: 99.00,
        description: "Елегантна и минималистична тениска на Calvin Klein, изработена от висококачествен памук или смес от памук и еластан. Семпъл дизайн с логото 'Calvin Klein' на гърдите, подходящ за ежедневна или елегантна визия.",
        image: cklein,
        stock: true
    },
    {
        id: 18,
        slug: "gucci",
        name: "GUCCI T-Shirt",
        category:"tshirt",
        price: 45.00,
        description: "Луксозна тениска на Gucci с уникален дизайн, изработена от висококачествен органичен памук. Отличава се с емблематични елементи като логото 'GG' или принтове, подходяща за модни изявления.",
        image: tshirt_gucci,
        stock: true
    },
    
    {
        id: 19,
        slug: "nortface",
        name: "The North Face T-Shirt",
        category:"tshirt",
        price: 39.00,
        description: "Удобна и функционална тениска на The North Face, изработена от дишащи и висококачествени материи. Подходяща за спорт и активен начин на живот, с емблематичното лого на марката отпред.",
        image: nortface,
        stock: true
    },
    {
        id: 20,
        slug: "polo",
        name: "Polo T-Shirt",
        category:"tshirt",
        price: 39.00,
        description: "Класическа тениска на Polo, изработена от мек и устойчив памук. С емблематичното лого на марката и стилен дизайн, подходяща за ежедневна визия с изискан акцент.",
        image: tshirt_polo,
        stock: true
    },
    {
        id: 21,
        slug: "adidasT",
        name: "Adidas T-Shirt",
        category:"tshirt",
        price: 39.00,
        description: "Спортна тениска на Adidas, изработена от лека и дишаща материя. Дизайнът включва отличителните три ленти и лого на марката, което я прави идеална за тренировки или ежедневие.",
        image: tshirt_adidas,
        stock: true
    },
    {
        id: 22,
        slug: "nikeT",
        name: "Nike T-Shirt",
        category:"tshirt",
        price: 39.00,
        description: "Модерна тениска на Nike, съчетаваща комфорт и стил. Изработена от висококачествени материи с технология за отвеждане на влагата и логото 'Just Do It', подходяща за активен живот.",
        image: tshirt_nike,
        stock: true
    },
    

    /*!!! Shoes !!!*/

    {
        id: 23,
        slug: "nikeG",
        name: "Nike Gold Shoes",
        category:"shoes",
        price: 79.00,
        description: "Powerful laptop for work and entertainment.",
        image: nikeG,
        stock:true
    },
    {
        id: 24,
        slug: "nikeJ",
        name: "Nike Jordan Shoes",
        category:"shoes",
        price: 79.00,
        description: "Powerful laptop for work and entertainment.",
        image: nikeJ,
        stock:true
    },

    /*!!! Hats !!!*/

    /*Flexit*/
    {
        id: 25,
        slug: "hatFlexit",
        name: "Flexit Hat",
        category:"hats",
        price: 29.00,
        description: "Powerful laptop for work and entertainment.",
        image: hat_flexit,
        stock:true
    },
    /*New York*/
    {
        id: 26,
        slug: "hatNewYork",
        name: "New York Hat",
        category:"hats",
        price: 29.00,
        description: "Powerful laptop for work and entertainment.",
        image: hat_new_york,
        stock:true
    },
    

    /*!!! Bakery !!!*/

    {
        id: 27,
        slug: "kroasan",
        name: "Кроасан - Френски",
        price: 10.00,
        description: "Powerful laptop for work and entertainment.",
        image:bakery_kroasan ,
        stock:true
    },
    {
        id: 28,
        slug: "myphin",
        name: "Мъфин - шоколадов",
        price: 5.00,
        description: "Powerful laptop for work and entertainment.",
        image:bakery_myphin ,
        stock:true
    },
    {
        id: 29,
        slug: "cherno_kadife",
        name: "Торта - Черно кадифе",
        price: 50.00,
        description: "Powerful laptop for work and entertainment.",
        image:bakery_chreno_cadife ,
        stock:true
    },
    {
        id: 30,
        slug: "cherveno_kadife",
        name: "Торта - Червено кадифе",
        price: 50.00,
        description: "Powerful laptop for work and entertainment.",
        image:bakery_cherveno_cadife ,
        stock:true
    },
    {
        id: 31,
        slug: "ketyring",
        name: "Кроасан - Кетъринг",
        price: 10.00,
        description: "Powerful laptop for work and entertainment.",
        image:bakery_ketyring ,
        stock:true
    },
    {
        id: 32,
        slug: "baklava",
        name: "Баклава - Шан Фъстък",
        price: 50.00,
        description: "Powerful laptop for work and entertainment.",
        image:bakery_baklava ,
        stock:true
    },

    /* !!!Cakes!!! */
    {
        id: 33,
        slug: "saher",
        name: "Торта - Сахер",
        price: 50.00,
        description: "Powerful laptop for work and entertainment.",
        image:torta_saher ,
        stock:true
    },
     /* !!!Bread!!! */
     {
        id: 34,
        slug: "vita",
        name: "Пълнозърнест хляб - Вита",
        price: 50.00,
        description: "Powerful laptop for work and entertainment.",
        image:bread_vita ,
        stock:true
    },
     {
        id: 35,
        slug: "simid",
        name: "Пълнозърнест хляб - Симид",
        price: 50.00,
        description: "Powerful laptop for work and entertainment.",
        image:bread_energy ,
        stock:true
    },
    {
        id: 36,
        slug: "domashen",
        name: "Хляб - Домашен",
        price: 50.00,
        description: "Powerful laptop for work and entertainment.",
        image:bread_baked ,
        stock:true
    },

    /*!!! Grocery !!!*/

    /* Fruits */

    {
        id: 37,
        slug: "banan",
        name: "Банани",
        price: 4.00,
        category:"fruits",
        description: "Powerful laptop for work and entertainment.",
        image: banan,
        stock:true
    },
    {
        id: 38,
        slug: "portokal",
        name: "Портокали",
        price: 4.00,
        category:"fruits",
        description: "Powerful laptop for work and entertainment.",
        image:portokal,
        stock:true
    },
    {
        id: 39,
        slug: "qbylka",
        name: "Ябълки",
        price: 4.00,
        category:"fruits",
        description: "Powerful laptop for work and entertainment.",
        image:qbylka ,
        stock:true
    },

     /* Vegetables */

     {
        id: 40,
        slug: "marula",
        name: "Марула",
        price: 5.00,
        category:"vegetables",
        description: "Powerful laptop for work and entertainment.",
        image:marula ,
        stock:true
    },
    {
        id: 41,
        slug: "domat",
        name: "Домати",
        price: 4.00,
        category:"vegetables",
        description: "Powerful laptop for work and entertainment.",
        image:domat ,
        stock:true
    },
    {
        id: 42,
        slug: "krastavica",
        name: "Краставици",
        price: 4.00,
        category:"vegetables",
        description: "Powerful laptop for work and entertainment.",
        image:krastavica ,
        stock:true
    },

    
     /* Oat cultures */

    {
        id: 43,
        slug: "rice",
        name: "Ориз",
        price: 4.00,
        category:"beansgoods",
        description: "Powerful laptop for work and entertainment.",
        image:oriz ,
        stock:true
    },
    {
        id: 44,
        slug: "beans",
        name: "Боб",
        price: 4.00,
        category:"beansgoods",
        description: "Powerful laptop for work and entertainment.",
        image:bob,
        stock:true
    },
    {
        id: 45,
        slug: "grah",
        name: "Грах",
        price: 4.00,
        category:"beansgoods",
        description: "Powerful laptop for work and entertainment.",
        image:grah ,
        stock:true
    },

    /* !!! Others !!!*/

    {
        id: 46,
        slug: "portfeil",
        name: "Портфейл - Естествена кожа",
        price: 19.99,
        description: "Powerful laptop for work and entertainment.",
        image:portfeil ,
        stock:true
    },

    {
        id: 47,
        slug: "ochila_boss",
        name: "Boss - слънчеви очила",
        price: 99.99,
        description: "Powerful laptop for work and entertainment.",
        image:ochila_boss ,
        stock:true
    },

    {
        id: 48,
        slug: "ochila_carera",
        name: "Carera - слънчеви очила",
        price: 99.99,
        description: "Powerful laptop for work and entertainment.",
        image:ochila_carera ,
        stock:true
    },

    {
        id: 49,
        slug: "pyteka",
        name: "Пътека за бягане",
        price: 199.99,
        description: "Powerful laptop for work and entertainment.",
        image:pyteka ,
        stock:true
    },

    {
        id: 50,
        slug: "dymbeli",
        name: "Дъмбели до 30 кг",
        price: 99.99,
        description: "Powerful laptop for work and entertainment.",
        image:dymbeli ,
        stock:true
    },

    {
        id: 51,
        slug: "giletka",
        name: "Жилетка до 20 кг",
        price: 99.99,
        description: "Powerful laptop for work and entertainment.",
        image:giletka ,
        stock:true
    },
    

    /* !!! SportsGoods for Women !!!*/

    {
        id: 52,
        slug: "suitsher_spring",
        name: "Суитшър - ELEONOR SPRING",
        price: 39.99,
        description: "Powerful laptop for work and entertainment.",
        image:suitsher_women ,
        stock:true
    },

    {
        id: 53,
        slug: "converse_obuvki",
        name: "CONVERSE Обувки - Chuck Taylor All Star",
        price: 99.99,
        description: "Powerful laptop for work and entertainment.",
        image:converse_shoes_women ,
        stock:true
    },

    {
        id: 54,
        slug: "pola_dynkova",
        name: "Пола - OLNSOPHIA",
        price: 99.99,
        description: "Powerful laptop for work and entertainment.",
        image:pola_puma ,
        stock:true
    },

    {
        id: 55,
        slug: "obuvki_w",
        name: "NIKE - Обувки W UPLIFT SC",
        price: 199.99,
        description: "Powerful laptop for work and entertainment.",
        image:nike_shoes_women ,
        stock:true
    },

    {
        id: 56,
        slug: "puma_roklq",
        name: "PUMA Рокля - ESS Slim",
        price: 99.99,
        description: "Powerful laptop for work and entertainment.",
        image:roklq_women ,
        stock:true
    },

    {
        id: 57,
        slug: "elek_carly",
        name: "BRILLE Елек Carly",
        price: 99.99,
        description: "Powerful laptop for work and entertainment.",
        image:elek_carly ,
        stock:true
    },

];

export default products;
