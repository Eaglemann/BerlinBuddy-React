const Modal = ({
  toggleModal,
  language,
}: {
  toggleModal: () => void;
  language: "de" | "en";
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-[#1F1F1F] p-4 rounded-lg max-w-sm w-full">
        <h2 className="text-xl text-[#C8102E] font-bold mb-4">
          {language === "de" ? "Kontaktformular" : "Contact Form"}
        </h2>

        {/* Contact Form */}
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="block text-sm text-gray-400 mb-2">
              {language === "de" ? "Dein Name" : "Your Name"}
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-2 bg-transparent border border-gray-700 rounded-md text-white placeholder-gray-500"
              placeholder={language === "de" ? "Name" : "Name"}
            />
          </div>

          <div className="mb-3">
            <label
              htmlFor="message"
              className="block text-sm text-gray-400 mb-2"
            >
              {language === "de" ? "Deine Nachricht" : "Your Message"}
            </label>
            <textarea
              id="message"
              className="w-full p-2 bg-transparent border border-gray-700 rounded-md text-white placeholder-gray-500"
              rows={3}
              placeholder={
                language === "de"
                  ? "Schreibe uns deine Vorschläge, Beschwerden oder Anfragen..."
                  : "Write us your suggestions, complaints, or inquiries..."
              }
            ></textarea>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-[#C8102E] text-white py-2 px-6 rounded-md hover:bg-[#a60e1c] transition"
            >
              {language === "de" ? "Absenden" : "Submit"}
            </button>
          </div>
        </form>

        <button
          onClick={toggleModal}
          className="absolute top-2 right-2 text-white bg-[#C8102E] rounded-full p-2"
        >
          ✖
        </button>
      </div>
    </div>
  );
};

export default Modal;
