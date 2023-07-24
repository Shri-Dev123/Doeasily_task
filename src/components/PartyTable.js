// PartyTable.js

import React from "react";

const PartyTable = ({ parties, editParty, deleteParty }) => {
    return (
        <table className="w-full mt-4">
            <thead>
                <tr>
                    <th className="py-2 px-3 bg-gray-300">Name</th>
                    <th className="py-2 px-3 bg-gray-300">Mobile</th>
                    <th className="py-2 px-3 bg-gray-300">Address</th>
                    <th className="py-2 px-3 bg-gray-300">City</th>
                    <th className="py-2 px-3 bg-gray-300">Pincode</th>
                    <th className="py-2 px-3 bg-gray-300">GSTIN</th>
                    <th className="py-2 px-3 bg-gray-300">PAN</th>
                    <th className="py-2 px-3 bg-gray-300">Aadhaar</th>
                    <th className="py-2 px-3 bg-gray-300">groups</th>
                    <th className="py-2 px-3 bg-gray-300">Actions</th>
                </tr>
            </thead>
            <tbody>
                {parties.map((party) => (
                    <tr key={party.id}>
                        <td className="py-2 px-4">{party.name}</td>
                        <td className="py-2 px-4">{party.mobile}</td>
                        <td className="py-2 px-4">{party.address}</td>
                        <td className="py-2 px-4">{party.city}</td>
                        <td className="py-2 px-4">{party.pin}</td>
                        <td className="py-2 px-4">{party.gst}</td>
                        <td className="py-2 px-4">{party.pan}</td>
                        <td className="py-2 px-4">{party.aadhaar}</td>
                        <td className="py-2 px-4">
                            {party.groups.map((group, index) => (
                                <ul>
                                    <li key={index}>{group.value}</li>
                                </ul>
                            ))}
                        </td>
                        <td className="py-2 px-4">
                            <button
                                onClick={() => editParty(party)}
                                className="bg-green-500 text-white py-1 px-2 rounded mr-2"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => deleteParty(party.id)}
                                className="bg-red-500 text-white py-1 px-2 rounded"
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default PartyTable;
