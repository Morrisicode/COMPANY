import { AiOutlineWhatsApp } from "react-icons/ai";

const WHATSAPP_NUMBER = "231888636071";
const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20SVL%2C%20I%27d%20like%20to%20learn%20more%20about%20your%20services.`;

function WhatsAppFloating() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg shadow-green-500/30 transition-transform duration-200 hover:scale-105"
      aria-label="Chat on WhatsApp"
    >
      <AiOutlineWhatsApp size={26} />
    </a>
  );
}

export default WhatsAppFloating;
