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

const products = [
    {
        id: 1,
        slug: "gaming-pc",
        name: "Gaming PC",
        price: 1500.00,
        description: "High-performance gaming PC with RTX 3080 and 32GB RAM.",
        image: laptop ,
    },
    {
        id: 2,
        slug: "laptop",
        name: "Acer",
        price: 299.00,
        description: "Powerful laptop for work and entertainment.",
        image: laptop ,
    },
    {
        id: 3,
        slug: "iphone",
        name: "iPhone",
        price: 899.00, // Change this to a number
         description: "Latest iPhone with cutting-edge technology.",
        image: iphone,
    },
       
    {
        id: 4,
        slug: "wireless mouse",
        name: "Wireless Mouse",
        price: 49.00,
        description: "Latest iPhone with cutting-edge technology.",
        image: wirelessMouse,
    },
    {
        id: 5,
        slug: "samsung A54",
        name: "Samsung A54",
        price: 49.00,
        description: "Latest iPhone with cutting-edge technology.",
        image: samsungA54,
    },


    /*!!! Smartphones !!!*/

    
        { id: 1, name: "iPhone", brand: "iPhone", price: 899.00, slug: "iphone", image: iphone, description: "iPhone детайли", stock: true },
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
    },
    {
        id: 7,
        slug: "laptop_Acer2",
        name: "Acer2",
        price: 299.00,
        description: "Powerful laptop for work and entertainment.",
        image: acer_laptop,
    },
    /*Lenovo*/
    {
        id: 8,
        slug: "laptop_Lenovo",
        name: "Lenovo ThinkBook",
        price: 450.00,
        description: "Powerful laptop for work and entertainment.",
        image: lenovo_laptop,
    },
     /*Apple*/
    {
        id: 9,
        slug: "laptop_Apple",
        name: "MacBook Air 15",
        price: 999.00,
        description: "Powerful laptop for work and entertainment.",
        image: apple_laptop,
    },
    /*HP*/
    {
        id: 10,
        slug: "laptop_HP",
        name: "HP",
        price: 199.00,
        description: "Powerful laptop for work and entertainment.",
        image: hp_laptop,
    },
    /*ASUS*/
    {
        id: 11,
        slug: "laptop_ASUS",
        name: "ASUS Vivobook",
        price: 199.00,
        description: "Powerful laptop for work and entertainment.",
        image: asus_laptop,
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
    },
    /*Gigabyte*/
    {
        id: 15,
        slug: "pc_gigabyte",
        name: "GIGABYTE PC",
        price: 199.00,
        description: "Powerful laptop for work and entertainment.",
        image: gigabyte_pc,
    },
    /*HP*/
    {
        id: 16,
        slug: "pc_hp",
        name: "HP PC",
        price: 199.00,
        description: "Powerful laptop for work and entertainment.",
        image: hp_pc,
    },

     /*!!! T-Shirts !!!*/

     {
        id: 17,
        slug: "cklein",
        name: "Calvin Clein T-Shirt",
        price: 39.00,
        description: "Powerful laptop for work and entertainment.",
        image: cklein,
        stock:true
    },
    {
        id: 18,
        slug: "gucci",
        name: "GUCCI T-Shirt",
        price: 39.00,
        description: "Powerful laptop for work and entertainment.",
        image: tshirt_gucci,
        stock:true
    },
    {
        id: 19,
        slug: "nortface",
        name: "The Nort Face T-Shirt",
        price: 39.00,
        description: "Powerful laptop for work and entertainment.",
        image: nortface,
        stock:true
    },
    {
        id: 20,
        slug: "polo",
        name: "Polo T-Shirt",
        price: 39.00,
        description: "Powerful laptop for work and entertainment.",
        image: tshirt_polo,
        stock:true
    },
    {
        id: 21,
        slug: "adidasT",
        name: "Adidas T-Shirt",
        price: 39.00,
        description: "Powerful laptop for work and entertainment.",
        image: tshirt_adidas,
        stock:true
    },
    {
        id: 22,
        slug: "nikeT",
        name: "Nike T-Shirt",
        price: 39.00,
        description: "Powerful laptop for work and entertainment.",
        image: tshirt_nike,
        stock:true
    },

    /*!!! Shoes !!!*/

    {
        id: 23,
        slug: "nikeG",
        name: "Nike Gold Shoes",
        price: 39.00,
        description: "Powerful laptop for work and entertainment.",
        image: nikeG,
        stock:true
    },
    {
        id: 24,
        slug: "nikeJ",
        name: "Nike Jordan Shoes",
        price: 39.00,
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
        description: "Powerful laptop for work and entertainment.",
        image: banan,
        stock:true
    },
    {
        id: 38,
        slug: "portokal",
        name: "Портокали",
        price: 4.00,
        description: "Powerful laptop for work and entertainment.",
        image:portokal,
        stock:true
    },
    {
        id: 39,
        slug: "qbylka",
        name: "Ябълки",
        price: 4.00,
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
        description: "Powerful laptop for work and entertainment.",
        image:marula ,
        stock:true
    },
    {
        id: 41,
        slug: "domat",
        name: "Домати",
        price: 4.00,
        description: "Powerful laptop for work and entertainment.",
        image:domat ,
        stock:true
    },
    {
        id: 42,
        slug: "krastavica",
        name: "Краставици",
        price: 4.00,
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
        description: "Powerful laptop for work and entertainment.",
        image:oriz ,
        stock:true
    },
    {
        id: 44,
        slug: "beans",
        name: "Боб",
        price: 4.00,
        description: "Powerful laptop for work and entertainment.",
        image:bob,
        stock:true
    },
    {
        id: 45,
        slug: "grah",
        name: "Грах",
        price: 4.00,
        description: "Powerful laptop for work and entertainment.",
        image:grah ,
        stock:true
    },
    
];

export default products;
