// SearchBar.js

import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(searchTerm);
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <input
                type="text"
                value={searchTerm}
                onChange={handleChange}
                placeholder="Search by name..."
                className="border p-2 rounded"
            />
            <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 ml-2 rounded"
            >
                Search
            </button>
        </form>
    );
};

export default SearchBar;
