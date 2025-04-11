import React from 'react';

interface PopupProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Popup: React.FC<PopupProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center"
            onClick={onClose}
        >
            <div
                className="relative bg-white p-6 shadow-lg md:w-5/6 overflow-y-auto h-full"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="mb-2 pt-5 md:pt-0">{children}</div>
                <button className="bg-red-500 text-white p-2 rounded w-full md:w-auto" onClick={onClose}>Закрити</button>
                <button
                    className="absolute top-2 right-2 md:top-5 md:right-5 bg-red-500 text-white p-2 rounded w-10 h-10 rounded-full"
                    onClick={onClose}
                >
                    X
                </button>
            </div>
        </div>
    );
};

export default Popup;
