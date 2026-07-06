import { Phone } from "lucide-react";

export default function CallButton() {
  return (
    <a
      href="tel:1-800-879-0156"
      className="fixed right-0 top-1/2 z-50 flex items-center gap-2 -translate-y-1/2 rotate-[-90deg] origin-bottom-right rounded-t-lg bg-[#193315] px-4 py-2 text-sm font-semibold text-white shadow-lg transition hover:bg-green-700"
      aria-label="Call us at 1-800-879-0156"
    >
      <Phone size={16} />
      <span>1-800-879-0156</span>
    </a>
  );
}