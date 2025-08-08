import { useState } from "react";
import { Menu, X, Leaf, User, Bell, Settings, LogOut } from "lucide-react";
import { Link } from "react-router-dom";

const Profile = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="bg-[#1B2B16] min-h-screen">
      <div className="max-w-7xl mx-auto flex min-h-screen text-white">
        {/* Sidebar */}
        <aside
          className={`fixed md:static top-0 left-0 h-full w-64 bg-[#27391C] p-6 shadow-lg transition-transform duration-300 z-50 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0`}
        >
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-[#7CB87A] flex items-center gap-2">
              <Leaf size={28} />
              My ForestWatch Profile
            </h2>
            {/* Close Button */}
            <button
              onClick={toggleSidebar}
              className="md:hidden text-[#7CB87A]"
              aria-label="Close Sidebar"
            >
              <X size={28} />
            </button>
          </div>

          {/* Navigation */}
          <nav className="space-y-6">
            <Link
              to="/"
              className="flex items-center gap-2 text-gray-300 hover:text-[#7CB87A] transition-colors"
            >
              <User size={18} />
              Dashboard
            </Link>
            <Link
              to="/profile/info"
              className="flex items-center gap-2 text-gray-300 hover:text-[#7CB87A] transition-colors"
            >
              <User size={18} />
              Personal Information
            </Link>
            <Link
              to="/profile/alerts"
              className="flex items-center gap-2 text-gray-300 hover:text-[#7CB87A] transition-colors"
            >
              <Bell size={18} />
              Alerts & Notifications
            </Link>
            <Link
              to="/profile/settings"
              className="flex items-center gap-2 text-gray-300 hover:text-[#7CB87A] transition-colors"
            >
              <Settings size={18} />
              Settings
            </Link>
            <button className="flex items-center gap-2 text-red-400 hover:text-red-600 transition-colors mt-6">
              <LogOut size={18} />
              Logout
            </button>
          </nav>
        </aside>

        {/* Hamburger menu for mobile */}
        {!sidebarOpen && (
          <button
            onClick={toggleSidebar}
            className="md:hidden fixed top-4 left-4 z-50 bg-[#7CB87A] p-2 rounded-md shadow-md text-[#18230F]"
            aria-label="Open Sidebar"
          >
            <Menu size={28} />
          </button>
        )}

        {/* Main Content */}
        <main className="flex-1 p-6 md:ml-64 overflow-auto">
          <section className="bg-[#182B0C] p-8 rounded-xl shadow-lg">
            <h1 className="text-3xl font-bold text-[#7CB87A] mb-6">
              Welcome, Forest Guardian!
            </h1>
            <p className="text-gray-300 text-sm leading-relaxed max-w-2xl">
              Monitor your personal info, alert preferences, and recent forest
              activity updates here. Stay connected with ForestWatch to protect
              and preserve your local ecosystem.
            </p>

            {/* Profile Details */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#255F38] p-6 rounded-lg">
                <h2 className="text-xl font-semibold text-[#7CB87A] mb-4">
                  Personal Information
                </h2>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>
                    <strong>Name:</strong> Jane Forest
                  </li>
                  <li>
                    <strong>Email:</strong> jane.forest@watch.com
                  </li>
                  <li>
                    <strong>Role:</strong> Field Observer
                  </li>
                  <li>
                    <strong>Region:</strong> Eastern Woodlands
                  </li>
                </ul>
              </div>

              <div className="bg-[#255F38] p-6 rounded-lg">
                <h2 className="text-xl font-semibold text-[#7CB87A] mb-4">
                  Notification Preferences
                </h2>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>
                    <strong>Wildfire Alerts:</strong> Enabled
                  </li>
                  <li>
                    <strong>Illegal Logging Alerts:</strong> Enabled
                  </li>
                  <li>
                    <strong>Weather Updates:</strong> Enabled
                  </li>
                  <li>
                    <strong>Monthly Reports:</strong> Subscribed
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Profile;
