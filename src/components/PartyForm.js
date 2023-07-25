import React, { useState, useEffect } from "react";
import Select from "react-select";
import SelectedPartyGroups from "./SelectedPartyGroups";

const PartyForm = ({ addParty, editingParty, updateParty, onClose }) => {
    const [selectedGroups, setSelectedGroups] = useState([]);
    const [party, setParty] = useState({
        id: "",
        name: "",
        mobile: "",
        aadhaar: "",
        city: "",
        pin: "",
        gst: "",
        pan: "",
        aadhar: "",
        groups: [...selectedGroups],
    });

    const partyGroupOptions = [
        { value: "Bullion", label: "Bullion" },
        { value: "Customer", label: "Customer" },
        { value: "Karigar", label: "Karigar" },
        { value: "Supplier", label: "Supplier" },
    ];

    useEffect(() => {
        if (editingParty) {
            setParty(editingParty);
        } else {
            setParty({
                id: "",
                name: "",
                mobile: "",
                aadhaar: "",
                city: "",
                pin: "",
                gst: "",
                pan: "",
                aadhar: "",
                groups: [...selectedGroups],
            });
        }
    }, [editingParty]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setParty({ ...party, [name]: value.toUpperCase() });
    };

    const handleGroupChange = (selectedOptions) => {
        setSelectedGroups(selectedOptions);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!editingParty) {
            addParty({ ...party, id: Date.now(), groups: selectedGroups });
        } else {
            updateParty({ ...party, groups: selectedGroups });
        }
        setParty({
            id: "",
            name: "",
            mobile: "",
            address: "",
            city: "",
            pin: "",
            gst: "",
            pan: "",
            aadhaar: "",
            groups: [...selectedGroups],
        });
        setSelectedGroups([]);
        onClose();
    };

    return (
        <form className="mb-4" onSubmit={handleSubmit}>
            <h2 className="text-xl font-semibold mb-2">
                {editingParty ? "Edit Party" : "Add Party"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-1 flex flex-col space-y-2">
                    <label htmlFor="partyGroups">Party Groups</label>
                    <Select
                        id="partyGroups"
                        options={partyGroupOptions}
                        value={selectedGroups}
                        isMulti
                        onChange={handleGroupChange}
                        placeholder="Select Party Groups"
                        required
                    />
                    <SelectedPartyGroups
                        selectedGroups={selectedGroups}
                        onRemoveGroup={(group) =>
                            setSelectedGroups(
                                selectedGroups.filter((g) => g !== group)
                            )
                        }
                    />
                </div>
                <div className="md:col-span-1 grid grid-cols-2 gap-4">
                    <div className="flex flex-col">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={party.name}
                            onChange={handleChange}
                            placeholder="Enter Name"
                            className="border p-2 rounded"
                            required
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="mobile">Mobile</label>
                        <input
                            type="text"
                            id="mobile"
                            name="mobile"
                            value={party.mobile}
                            onChange={handleChange}
                            placeholder="Enter 10 digit number"
                            className="border p-2 rounded"
                            pattern="[0-9]{10}"
                            required
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="address">Address</label>
                        <input
                            type="text"
                            name="address"
                            value={party.address}
                            onChange={handleChange}
                            placeholder="Enter Address"
                            className="border p-2 rounded"
                            required
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="city">City</label>
                        <input
                            type="text"
                            name="city"
                            value={party.city}
                            onChange={handleChange}
                            placeholder="Enter City"
                            className="border p-2 rounded"
                            required
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="pin">Pincode</label>
                        <input
                            type="text"
                            name="pin"
                            value={party.pin}
                            onChange={handleChange}
                            placeholder="Enter Pincode"
                            className="border p-2 rounded"
                            pattern="[0-9]{6}"
                            required
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="hst">GSTIN</label>
                        <input
                            type="text"
                            name="gst"
                            value={party.gst}
                            onChange={handleChange}
                            placeholder="Enter 16 Digit GSTIN"
                            className="border p-2 rounded"
                            pattern="[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}"
                            required
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="pan">PAN</label>
                        <input
                            type="text"
                            name="pan"
                            value={party.pan}
                            onChange={handleChange}
                            placeholder="Enter 10 PAN number"
                            className="border p-2 rounded"
                            pattern="[A-Za-z]{5}[0-9]{4}[A-Za-z]{1}"
                            required
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="aadhar">Aadhaar</label>
                        <input
                            type="text"
                            name="aadhaar"
                            value={party.aadhaar}
                            onChange={handleChange}
                            placeholder="Enter 12 digit Aadhaar"
                            className="border p-2 rounded"
                            pattern="[0-9]{12}"
                            required
                        />
                    </div>
                </div>
            </div>
            <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 mt-4 rounded"
            >
                {editingParty ? "Update Party" : "Add Party"}
            </button>
        </form>
    );
};

export default PartyForm;
