import React from "react";
import { Instagram, Linkedin, X } from "lucide-react";

const Footer1 = () => {
  return (
    <footer className="bg-[#15151F] w-full text-white py-12 px-4">
      <div className="border-t border-gray-700 py-6 px-4 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto gap-6 text-sm text-gray-300 mt-10">
        <div className="flex items-center gap-3">
          <img
            src="https://images.dmca.com/Badges/dmca_protected_sml_120n.png?ID=some-unique-id"
            alt="DMCA"
            className="h-8"
          />
          <p className="text-left text-[15px] leading-snug max-w-md">
            Full stack mobile (iOS, Android) and web app design and development
            agency
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-4 px-4 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto text-sm text-gray-400 gap-4">
        <div className="space-x-4">
          <span>Statutory legal information</span>
        </div>
        <div className="space-x-4">
          <span>2025-2026 (c) Appinventiv</span>
          <span className="text-[#7B9FFB]">SiteMap</span>
          <span className="text-[#7B9FFB]">Privacy Policy</span>
        </div>
        <div className="flex space-x-3 text-gray-300">
          <Instagram className="w-5 h-5" />
          <X className="w-5 h-5" />
          <Linkedin className="w-5 h-5" />
        </div>
      </div>
    </footer>
  );
};

export default Footer1;
