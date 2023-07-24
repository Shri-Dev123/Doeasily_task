import React from "react";
import PartyForm from "./PartyForm";

const PartyFormPopup = ({ onClose, ...props }) => {
    const handleClose = () => {
        onClose();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-4 w-1/4 md:w-2/3 lg:w-2/3 rounded-lg shadow-lg">
                <button
                    className="absolute top-2 right-2 bg-red-500 rounded-xl p-2 text-gray-600 hover:text-gray-800"
                    onClick={handleClose}
                >
                    X-Close
                </button>
                <PartyForm onClose={onClose} {...props} />
            </div>
        </div>
    );
};

export default PartyFormPopup;
