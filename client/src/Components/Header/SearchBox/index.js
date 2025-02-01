import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
    const [query, setQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const navigate = useNavigate();

    const suggestionList = [
        { name: "Gaming PC", slug: "gaming-pc" },
        { name: "Laptop", slug: "laptop" },
        { name: "iPhone", slug: "iphone" },
        { name: "Wireless mouse", slug: "wireless mouse" },
        { name: "Samsung A54", slug: "samsung A54" },
        {name: "Xiaomi Redmi Note", slug: "xiaomi-redmi-note"},
        {name: "Huawei Mate 40", slug: "huawei-mate-40"},
        { name: "Acer", slug: "laptop_Acer" },
        { name: "Acer2", slug: "laptop_Acer2" },
        { name: "Lenovo ThinkBook", slug: "laptop_Lenovo" },
        { name: "MacBook Air 15", slug: "laptop_Apple" },
        { name: "HP", slug: "laptop_HP" },
        { name: "ASUS", slug: "laptop_ASUS" },
        { name: "ASUS PC", slug: "pc_Asus" },
        { name: "IPad", slug: "pc_Apple" },
        { name: "Acer PC", slug: "pc_Acer" },
        { name: "GIGABYTE PC", slug: "pc_gigabyte" },
        { name: "HP PC", slug: "pc_hp" },
        { name: "Calvin Clein T-Shirt", slug: "cklein" },
        { name: "GUCCI T-Shirt", slug: "gucci" },
        { name: "The Nort Face T-Shirt", slug: "nortface" },
        { name: "Polo T-Shirt", slug: "polo" },
        { name: "Adidas T-Shirt", slug: "adidasT" },
        { name: "Nike T-Shirt", slug: "nikeT" },
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
                    placeholder="Search for products....."
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
                    Clear
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
