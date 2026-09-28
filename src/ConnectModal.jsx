import { motion, AnimatePresence } from "framer-motion";

export default function ConnectModal({ isOpen, onClose, type = "demo" }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />

        {/* Modal Card */}
        <motion.div
          className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden"
          initial={{ opacity: 0, scale: 0.85, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", damping: 22, stiffness: 280 }}
        >
          {/* Top cute section */}
          <div className="bg-gradient-to-br from-[#fdf2f4] to-[#f8e8ec] pt-8 pb-6 px-6 text-center relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/80 text-stone-500 hover:text-stone-800 hover:bg-white transition-all flex items-center justify-center text-lg"
            >
              ×
            </button>

            {/* Cute girl with laptop */}
            <div className="text-6xl mb-3 select-none">👩‍💻</div>
            <p className="text-sm text-[#c45c6a] font-medium tracking-wide">
              Hey there!
            </p>
          </div>

          {/* Message Card */}
          <div className="px-7 py-6 text-center">
            <h3
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              className="text-2xl font-semibold text-stone-900 mb-3"
            >
              You’re on the right page ✨
            </h3>

            <p className="text-stone-600 text-sm leading-relaxed mb-5">
              I’d love to show you the {type === "github" ? "code" : "live demo"}!  
              Please connect with me first — I’m sure you’ll like my work.
            </p>

            {/* Contact Buttons */}
            <div className="space-y-3">
              <a
                href="https://wa.me/919594932292?text=Hi%20Trupti%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20see%20the%20demo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-[#25D366] text-white font-medium hover:bg-[#1ebe57] transition-all hover:scale-[1.02] active:scale-95 shadow-md"
              >
                <span className="text-lg">💬</span>
                WhatsApp Me
              </a>

              <a
                href="mailto:mishratrupti971@gmail.com?subject=Demo%20Request%20from%20Portfolio&body=Hi%20Trupti%2C%0A%0AI%20saw%20your%20portfolio%20and%20would%20like%20to%20see%20the%20demo%2Fcode."
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-[#c45c6a] text-white font-medium hover:bg-[#b04e5b] transition-all hover:scale-[1.02] active:scale-95 shadow-md"
              >
                <span className="text-lg">✉️</span>
                Email Me
              </a>

              <a
                href="https://www.instagram.com/mis_trupm"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-gradient-to-r from-[#f58529] via-[#dd2a7b] to-[#8134af] text-white font-medium hover:opacity-90 transition-all hover:scale-[1.02] active:scale-95 shadow-md"
              >
                <span className="text-lg">📸</span>
                Message on Instagram
              </a>
            </div>

            <p className="text-xs text-stone-400 mt-5 leading-relaxed">
              Don’t want WhatsApp or Email? Just message me on Instagram —  
              I’ll share the demo / code with you.
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}