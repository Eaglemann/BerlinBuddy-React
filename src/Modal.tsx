import React from "react";

interface ModalProps {
  toggleModal: () => void;
  language: "de" | "en";
}

const Modal: React.FC<ModalProps> = ({ toggleModal, language }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div
        className="absolute inset-0 bg-black bg-opacity-60"
        onClick={toggleModal}
      ></div>

      <div className="relative bg-[#1F1F1F] border border-gray-700 rounded-lg shadow-lg max-w-md w-full mx-auto p-6 space-y-4 z-10">
        <h2 className="text-xl font-semibold text-[#C8102E]">
          {language === "de" ? "Info über BerlinBuddy" : "About BerlinBuddy"}
        </h2>
        <p className="text-sm text-gray-300">
          {language === "de"
            ? "BerlinBuddy hilft dir, bürokratische Hürden in Berlin zu meistern. Einfach fragen – wir finden die Antwort."
            : "BerlinBuddy helps you navigate Berlin's bureaucracy. Ask anything – we’ll find the answer."}
        </p>
        <button
          onClick={toggleModal}
          className="mt-4 px-4 py-2 bg-[#C8102E] text-white rounded hover:bg-[#a60e1c] transition w-full"
        >
          {language === "de" ? "Schließen" : "Close"}
        </button>
      </div>
    </div>
  );
};

export default Modal;
