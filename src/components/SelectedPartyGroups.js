import React from "react";

const SelectedPartyGroups = ({ selectedGroups, onRemoveGroup }) => {
    return (
        <div className="mb-4">
            {selectedGroups.map((group) => (
                <div
                    key={group.value}
                    className="flex items-center bg-gray-100 rounded p-2 m-1"
                >
                    <span>{group.label}</span>
                    <button
                        className="ml-2 text-red-600"
                        onClick={() => onRemoveGroup(group)}
                    >
                        &#x2716;
                    </button>
                </div>
            ))}
        </div>
    );
};

export default SelectedPartyGroups;
