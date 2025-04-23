// src/components/Footer.jsx
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#255F38] text-white py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            AgriForecast
          </h2>
          <p className="text-gray-300 text-sm">
            Empowering farmers and traders with real-time agricultural data,
            trends, and accurate forecasting — enabling smarter decisions for a
            better tomorrow.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <Link to="/" className="hover:text-[#1F7D53] transition-all">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard"
                className="hover:text-[#1F7D53] transition-all"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/reports"
                className="hover:text-[#1F7D53] transition-all"
              >
                Reports
              </Link>
            </li>
            <li>
              <Link
                to="/profile"
                className="hover:text-[#1F7D53] transition-all"
              >
                Profile
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Email: support@agriforecast.com</li>
            <li>Phone: +880 1234 567890</li>
            <li>Address: AgriForecast HQ, Dhaka, Bangladesh</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#1F7D53] mt-10 pt-6 text-center text-gray-400 text-xs">
        &copy; {new Date().getFullYear()} AgriForecast. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
