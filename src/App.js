import "../src/input.css";
import React, { useState } from "react";
import PartyFormPopup from "./components/PartyFormPopup";
import PartyTable from "./components/PartyTable";
import SearchBar from "./components/SearchBar";

const App = () => {
    const [parties, setParties] = useState([]);
    const [editingParty, setEditingParty] = useState(null);
    const [searchResults, setSearchResults] = useState([]);
    const [showPopup, setShowPopup] = useState(false);

    const handleOpenPopup = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    const addParty = (party) => {
        setParties([...parties, party]);
    };

    const editParty = (party) => {
        setEditingParty(party);
    };

    const updateParty = (updatedParty) => {
        setParties(
            parties.map((party) =>
                party.id === updatedParty.id ? updatedParty : party
            )
        );
        setEditingParty(null);
    };

    const deleteParty = (partyId) => {
        setParties(parties.filter((party) => party.id !== partyId));
    };
    const handleSearch = (searchTerm) => {
        const filteredParties = parties.filter((party) =>
            party.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(filteredParties);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Party Management App</h1>
            <button
                onClick={handleOpenPopup}
                className="bg-blue-500 text-white py-2 px-4 mt-2 rounded"
            >
                {editingParty ? "Edit Party" : "Add Party +"}
            </button>
            {showPopup && (
                <PartyFormPopup
                    onClose={handleClosePopup}
                    addParty={addParty}
                    editingParty={editingParty}
                    updateParty={updateParty}
                />
            )}
            <SearchBar onSearch={handleSearch} />
            <PartyTable
                parties={searchResults.length > 0 ? searchResults : parties}
                editParty={editParty}
                deleteParty={deleteParty}
            />
        </div>
    );
};

export default App;
