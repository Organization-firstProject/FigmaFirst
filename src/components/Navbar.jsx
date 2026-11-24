
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  return (
    <header className="w-full bg-[#fcf9ef]">
      <nav className="max-w-[1110px] mx-auto h-[80px] px-6 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-semibold tracking-tight text-[#633d2d]"
        >
          pattern<span className="font-light">.</span>
        </Link>

        {/* Navigation links */}
        <div className="flex items-center gap-8">

          <Link
            to="/"
            className={`text-sm transition-colors duration-300 ${
              location.pathname === "/"
                ? "text-[#633d2d] border-b border-[#633d2d]"
                : "text-[#9b8979] hover:text-[#633d2d]"
            } pb-1`}
          >
            Blog
          </Link>

          <Link
            to="/press"
            className={`text-sm transition-colors duration-300 ${
              location.pathname === "/press"
                ? "text-[#633d2d] border-b border-[#633d2d]"
                : "text-[#9b8979] hover:text-[#633d2d]"
            } pb-1`}
          >
            Press
          </Link>

          <a
            href="#contact"
            className="text-sm text-[#9b8979] hover:text-[#633d2d] transition-colors duration-300"
          >
            Join Us
          </a>

        </div>

      </nav>
    </header>
  );
}
