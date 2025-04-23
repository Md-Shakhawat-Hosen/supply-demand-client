// src/pages/Profile.jsx
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const Profile = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
 
  return (
    <div className="bg-[#27391C]">
      <div className="max-w-7xl mx-auto min-h-screen flex">
        {/* Sidebar */}
        <div
          className={`fixed md:static top-0 left-0 h-full min-h-screen bg-[#18230F] w-64 p-6 shadow-lg transition-transform duration-300 z-50 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0`}
        >
          <div className="flex  justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-[#1F7D53]">My Profile</h2>
            {/* Cross Button */}
            <button onClick={toggleSidebar} className="md:hidden">
              <X size={28} />
            </button>
          </div>

          {/* Profile Navigation Options */}
          <nav className="space-y-6">
            
            <Link to="/" className="block w-full text-left text-gray-300 hover:text-[#1F7D53] transition-all">
             Home
            </Link>
            <button className="block w-full text-left text-gray-300 hover:text-[#1F7D53] transition-all">
              My Information
            </button>
            <button className="block w-full text-left text-gray-300 hover:text-[#1F7D53] transition-all">
              Preferences
            </button>
            <button className="block w-full text-left text-gray-300 hover:text-[#1F7D53] transition-all">
              Recent Activity
            </button>
            <button className="block w-full text-left text-gray-300 hover:text-[#1F7D53] transition-all">
              Settings
            </button>
            <button className="block w-full text-left text-red-400 hover:text-red-600 transition-all">
              Logout
            </button>
          </nav>
        </div>

        {/* Hamburger Menu Button (shown only on mobile) */}
        {!sidebarOpen && (
          <button
            onClick={toggleSidebar}
            className="md:hidden fixed top-4 left-4 z-50 bg-[#1F7D53] p-2 rounded-md shadow-md"
          >
            <Menu size={28} color="white" />
          </button>
        )}

        {/* Main Content */}
        <div className="flex-1 p-6 md:ml-64">
          <div className="bg-[#18230F] p-8 rounded-xl shadow-lg">
            <h1 className="text-3xl font-bold text-[#1F7D53] mb-6">
              Welcome, Farmer!
            </h1>
            <p className="text-gray-300 text-sm leading-relaxed">
              Manage your personal information, commodity preferences, and view
              your recent activities here. Stay updated and make smarter
              decisions with AgriForecast!
            </p>

            {/* Example Content Sections (You can expand later) */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#255F38] p-6 rounded-lg">
                <h2 className="text-xl font-semibold text-[#1F7D53] mb-4">
                  Personal Info
                </h2>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>Name: John Doe</li>
                  <li>Email: johndoe@gmail.com</li>
                  <li>Role: Farmer</li>
                </ul>
              </div>

              <div className="bg-[#255F38] p-6 rounded-lg">
                <h2 className="text-xl font-semibold text-[#1F7D53] mb-4">
                  Preferences
                </h2>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>Favorite Commodity: Corn</li>
                  <li>Preferred Region: North</li>
                  <li>Notifications: Enabled</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
