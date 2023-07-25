import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const PartyTable = ({ parties, editParty, deleteParty }) => {
    return (
        <table className="w-full mt-4 border-collapse border border-gray-400">
            <thead>
                <tr>
                    <th className="py-2 px-3 bg-gray-300 border border-gray-400">
                        Name
                    </th>
                    <th className="py-2 px-3 bg-gray-300 border border-gray-400">
                        Mobile
                    </th>
                    <th className="py-2 px-3 bg-gray-300 border border-gray-400">
                        Address
                    </th>
                    <th className="py-2 px-3 bg-gray-300 border border-gray-400">
                        City
                    </th>
                    <th className="py-2 px-3 bg-gray-300 border border-gray-400">
                        Pincode
                    </th>
                    <th className="py-2 px-3 bg-gray-300 border border-gray-400">
                        GSTIN
                    </th>
                    <th className="py-2 px-3 bg-gray-300 border border-gray-400">
                        PAN
                    </th>
                    <th className="py-2 px-3 bg-gray-300 border border-gray-400">
                        Aadhaar
                    </th>
                    <th className="py-2 px-3 bg-gray-300 border border-gray-400">
                        groups
                    </th>
                    <th className="py-2 px-3 bg-gray-300 border border-gray-400">
                        Actions
                    </th>
                </tr>
            </thead>
            <tbody>
                {parties.map((party) => (
                    <tr key={party.id}>
                        <td className="py-2 px-4 border border-gray-400">
                            {party.name}
                        </td>
                        <td className="py-2 px-4 border border-gray-400">
                            {party.mobile}
                        </td>
                        <td className="py-2 px-4 border border-gray-400">
                            {party.address}
                        </td>
                        <td className="py-2 px-4 border border-gray-400">
                            {party.city}
                        </td>
                        <td className="py-2 px-4 border border-gray-400">
                            {party.pin}
                        </td>
                        <td className="py-2 px-4 border border-gray-400">
                            {party.gst}
                        </td>
                        <td className="py-2 px-4 border border-gray-400">
                            {party.pan}
                        </td>
                        <td className="py-2 px-4 border border-gray-400">
                            {party.aadhaar}
                        </td>
                        <td className="py-2 px-4 border border-gray-400">
                            {party.groups.map((group, index) => (
                                <ul key={index}>
                                    <li>{group.value}</li>
                                </ul>
                            ))}
                        </td>
                        <td className="py-1 px-2 border border-gray-400">
                            <button
                                onClick={() => editParty(party)}
                                className="bg-green-500 text-white py-1 px-1 rounded mr-2"
                            >
                                <FontAwesomeIcon icon={faEdit} />{" "}
                            </button>
                            <button
                                onClick={() => deleteParty(party.id)}
                                className="bg-red-500 text-white py-1 px-1 rounded"
                            >
                                <FontAwesomeIcon icon={faTrash} />{" "}
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default PartyTable;
