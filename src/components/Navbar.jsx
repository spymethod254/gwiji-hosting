import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-slate-950 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-cyan-400">
          GwijiHost
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#hosting" className="hover:text-cyan-400 transition">
            Hosting
          </a>

          <a href="#features" className="hover:text-cyan-400 transition">
            Features
          </a>

          <a href="#pricing" className="hover:text-cyan-400 transition">
            Pricing
          </a>

          <Link to="/login" className="hover:text-cyan-400 transition">
            Login
          </Link>

          <Link
            to="/register"
            className="bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-lg font-semibold transition"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;