import { MessageCircle } from 'lucide-react';

const WhatsAppFloatingButton = () => {
    const whatsappNumber = "+919876543210";
    const message = "Hello Singh Photographers! I would like to inquire about your services.";

    const href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#128C7E] transition-all duration-300 hover:scale-110 flex items-center justify-center"
            aria-label="Chat on WhatsApp"
        >
            <MessageCircle size={28} />
        </a>
    );
};

export default WhatsAppFloatingButton;
