import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-3 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-green-600">
        SmartGrow
      </Link>

      <div className="flex space-x-4">
        <Link to="/" className="text-gray-700 hover:text-green-600">
          Dashboard
        </Link>
        <Link to="/login" className="text-gray-700 hover:text-green-600">
          Login
        </Link>
      </div>
    </nav>
  );
}
