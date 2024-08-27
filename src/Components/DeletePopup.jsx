import React from 'react'

export default function DeletePopup({ isOpen, onClose, onConfirm }) {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-[40%]">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Delete Member Details</h2>
              <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <p className="mb-6 text-gray-600">Are you sure you want to delete this Member details? This action cannot be undone.</p>
            <div className="flex justify-end">
              <button
                onClick={onConfirm}
                className="bg-[#6941c6] text-white px-4 py-2 rounded font-bold tracking-widest hover:bg-[#5f3ea7] mr-2"
              >
                DELETE
              </button>
            </div>
          </div>
        </div>
      );
}
