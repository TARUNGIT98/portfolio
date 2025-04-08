import { FaDownload } from "react-icons/fa";
import resume from "../assets/TarunSirapurapuResume.pdf"; // fixed quote issue

function Navbar() {
  return (
    <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-white rounded-full shadow-md px-6 py-3 flex items-center gap-6">
        {/* Name */}
        <div className="text-lg font-semibold whitespace-nowrap">Tarun Sirapurapu</div>

        {/* Nav Links */}
        <div className="flex gap-6 text-sm font-medium text-gray-700">
          <a href="#projects" className="hover:text-black transition">Projects</a>
          <a href="#careerpath" className="hover:text-black transition">Career</a>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Contact + Resume Buttons */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="px-4 py-1.5 border border-gray-300 rounded-full text-sm hover:bg-gray-100 transition"
          >
            Contact
          </a>
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1.5 bg-black text-white rounded-full text-sm flex items-center gap-2 hover:bg-gray-800 transition"
          >
            <FaDownload className="text-xs" />
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
