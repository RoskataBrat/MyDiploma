import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
    const [query, setQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const navigate = useNavigate();

    const suggestionList = [
        { name: "Adidas T-Shirt", slug: "adidasT" },
        { name: "Acer", slug: "laptop_Acer" },
        { name: "Acer2", slug: "laptop_Acer2" },
        { name: "Acer PC", slug: "pc_Acer" },
        { name: "Apple iPad", slug: "pc_Apple" },
        { name: "ASUS", slug: "laptop_ASUS" },
        { name: "ASUS PC", slug: "pc_Asus" },
        { name: "Баклава - Шан Фъстък", slug: "baklava" },
        { name: "Банани", slug: "banan" },
        { name: "Боб", slug: "beans" },
        { name: "Boss - слънчеви очила", slug: "ochila_boss" },
        { name: "Calvin Clein T-Shirt", slug: "cklein" },
        { name: "Carera - слънчеви очила", slug: "ochila_carera" },
        { name: "Домат", slug: "domat" },
        { name: "Дъмбели до 30 кг", slug: "dymbeli" },
        { name: "Flexit Hat", slug: "hatFlexit" },
        { name: "Грах", slug: "grah" },
        { name: "GUCCI T-Shirt", slug: "gucci" },
        { name: "Gaming PC", slug: "gaming-pc" },
        { name: "HP", slug: "laptop_HP" },
        { name: "HP PC", slug: "pc_hp" },
        { name: "Huawei Mate 40", slug: "huawei-mate-40" },
        { name: "iPhone", slug: "iphone" },
        { name: "Краставици", slug: "krastavica" },
        { name: "Кроасан - Кетъринг", slug: "ketyring" },
        { name: "Кроасан - Френски", slug: "kroasan" },
        { name: "Lenovo ThinkBook", slug: "laptop_Lenovo" },
        { name: "MacBook Air 15", slug: "laptop_Apple" },
        { name: "Марула", slug: "marula" },
        { name: "Мъфин - шоколадов", slug: "myphin" },
        { name: "Nike Gold Shoes", slug: "nikeG" },
        { name: "Nike Jordan Shoes", slug: "nikeJ" },
        { name: "Nike T-Shirt", slug: "nikeT" },
        { name: "New York Hat", slug: "hatNewYork" },
        { name: "Ориз", slug: "rice" },
        { name: "Портокали", slug: "portokal" },
        { name: "Портфейл - Естествена кожа", slug: "portfeil" },
        { name: "Пълнозърнест хляб - Вита", slug: "vita" },
        { name: "Пълнозърнест хляб - Симид", slug: "simid" },
        { name: "Пътека за бягане", slug: "pyteka" },
        { name: "Поло T-Shirt", slug: "polo" },
        { name: "Samsung A54", slug: "samsung-a54" },
        { name: "Торта - Сахер", slug: "saher" },
        { name: "Торта - Черно кадифе", slug: "cherno_kadife" },
        { name: "Торта - Червено кадифе", slug: "cherveno_kadife" },
        { name: "The Nort Face T-Shirt", slug: "nortface" },
        { name: "Wireless Mouse", slug: "wireless mouse" },
        { name: "Xiaomi Redmi Note", slug: "xiaomi-redmi-note" },
        { name: "Ябълки", slug: "qbylka" },
        { name: "Хляб - Домашен", slug: "domashen" },
        { name: "Жилетка до 20 кг", slug: "giletka" },
    ];
    

    const handleInputChange = (e) => {
        const value = e.target.value;
        setQuery(value);

        if (value) {
            const filteredSuggestions = suggestionList.filter((item) =>
                item.name.toLowerCase().includes(value.toLowerCase())
            );
            setSuggestions(filteredSuggestions);
        } else {
            setSuggestions([]);
        }
    };

    const handleSuggestionClick = (suggestion) => {
        setQuery(suggestion.name);
        setSuggestions([]);

        // Navigate to the product page
        navigate(`/product/${suggestion.slug}`);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();

        // Check if query matches any product in the list
        const matchedProduct = suggestionList.find(
            (item) => item.name.toLowerCase() === query.toLowerCase()
        );

        if (matchedProduct) {
            navigate(`/product/${matchedProduct.slug}`);
        } else {
            // Handle case where no product matches
            alert("Product not found!");
        }
    };

    const handleClear = () => {
        setQuery("");
        setSuggestions([]);
    };

    return (
        <div className="search-container">
            <form className="headerSearch" onSubmit={handleSearchSubmit}>
                <input
                    type="text"
                    placeholder="Търсене на продукти....."
                    className="search-input"
                    value={query}
                    onChange={handleInputChange}
                />
                <Button type="submit" className="search-button">
                    <FaSearch />
                </Button>
                <Button
                    type="button"
                    className="clear-button"
                    onClick={handleClear}
                    style={{
                        marginLeft: "8px",
                        backgroundColor: "#f44336",
                        color: "white",
                        border: "none",
                        padding: "0.4em 0.6em",
                        cursor: "pointer",
                    }}
                >
                    X
                </Button>
            </form>
            {suggestions.length > 0 && (
                <ul className="suggestion-list">
                    {suggestions.map((suggestion, index) => (
                        <li
                            key={index}
                            className="suggestion-item"
                            onClick={() => handleSuggestionClick(suggestion)}
                        >
                            {suggestion.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchBox;
