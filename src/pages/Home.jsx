// src/pages/Home.jsx
import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ChevronDown, ChevronUp } from "lucide-react";
import img1 from "../assets/images/agri-01.jpg"
import img2 from "../assets/images/agri-02.jpg"
import img3 from "../assets/images/agri-03.jpg"
import img4 from "../assets/images/agri-04.jpg"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Helmet } from "react-helmet";

// Sample dummy data for charts (you can later replace it with real data)
const cornData = [
  { month: "Jan", price: 120 },
  { month: "Feb", price: 130 },
  { month: "Mar", price: 125 },
  { month: "Apr", price: 140 },
];

const soybeanOilData = [
  { month: "Jan", price: 100 },
  { month: "Feb", price: 110 },
  { month: "Mar", price: 105 },
  { month: "Apr", price: 115 },
];

const rapeseedOilData = [
  { month: "Jan", price: 90 },
  { month: "Feb", price: 95 },
  { month: "Mar", price: 92 },
  { month: "Apr", price: 98 },
];

// FAQ content
const faqs = [
  {
    question: "How does AgriForecast help farmers?",
    answer:
      "It predicts supply-demand trends, helping farmers plan production and maximize profits.",
  },
  {
    question: "Which products are covered in forecasts?",
    answer:
      "The system covers grains, vegetables, fruits, and cash crops based on market and weather data.",
  },
  {
    question: "How accurate are the demand predictions?",
    answer:
      "We use real-time data, historical trends, and weather forecasts to provide reliable predictions.",
  },
];

const Home = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#27391C] text-white min-h-screen">
      <Helmet>
        <title>Home</title>
      </Helmet>
      {/* Banner Carousel */}
      <section className="bg-[#18230F]">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          interval={2000}
        >
          <div>
            <img
              src={img1}
              alt="Agriculture Banner 1"
              className="object-cover h-64 md:h-[400px] w-full"
            />
          </div>
          <div>
            <img
              src={img2}
              alt="Agriculture Banner 2"
              className="object-cover h-64 md:h-[400px] w-full"
            />
          </div>
          <div>
            <img
              src={img3}
              alt="Agriculture Banner 3"
              className="object-cover h-64 md:h-[400px] w-full"
            />
          </div>
          <div>
            <img
              src={img4}
              alt="Agriculture Banner 3"
              className="object-cover h-64 md:h-[400px] w-full"
            />
          </div>
        </Carousel>
      </section>

      {/* Empowering Farmers + FAQ Section */}
      <section className="py-10 px-4 max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Left Content */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-[#6cb996]">
            Empowering Farmers with Data
          </h2>
          <p className="text-gray-300">
            AgriForecast provides powerful insights by combining market data,
            weather forecasts, and historical trends. Farmers and traders can
            now plan smarter, minimize wastage, and maximize their profits.
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Accurate Demand-Supply Predictions</li>
            <li>Real-Time Market Monitoring</li>
            <li>Smart Pricing Strategies</li>
            <li>Scenario Simulation for Climate Impacts</li>
          </ul>
          <button className="bg-[#1F7D53] hover:bg-[#18230F] text-white px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300">
            Learn More
          </button>
        </div>

        {/* Right Content (FAQ Accordion) */}
        <div className="bg-[#255F38] rounded-2xl p-6 shadow-lg">
          <h3 className="text-2xl font-bold mb-4">
            Frequently Asked Questions
          </h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-[#1F7D53] pb-2">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center text-left text-lg font-semibold text-[#6cb996] hover:text-[#1F7D53] focus:outline-none"
                >
                  {faq.question}
                  {openIndex === index ? (
                    <ChevronUp size={20} />
                  ) : (
                    <ChevronDown size={20} />
                  )}
                </button>
                {openIndex === index && (
                  <p className="mt-2 text-gray-300 text-sm">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Agricultural Historical Prices (Charts) */}
      <section className="py-12 px-4 bg-[#18230F]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#6cb996] mb-8 text-center">
            Featured Agricultural Historical Prices & Trends
          </h2>

          <p className="text-center max-w-2xl mx-auto text-gray-300 mb-12">
            Our forecasts for grains, oilseeds, animal fats, and oils are backed
            by IOSCO-approved price reporting services, ensuring accuracy and
            reliability.
          </p>

          {/* Charts */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Corn */}
            <div className="bg-[#255F38] p-6 rounded-xl shadow-md hover:shadow-xl transition-all">
              <h3 className="text-xl font-bold text-[#1F7D53] mb-4">Corn</h3>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={cornData}>
                    <XAxis dataKey="month" stroke="#ccc" />
                    <YAxis stroke="#ccc" />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="price"
                      stroke="#1F7D53"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* RBD Soybean Oil */}
            <div className="bg-[#255F38] p-6 rounded-xl shadow-md hover:shadow-xl transition-all">
              <h3 className="text-xl font-bold text-[#1F7D53] mb-4">
                RBD Soybean Oil
              </h3>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={soybeanOilData}>
                    <XAxis dataKey="month" stroke="#ccc" />
                    <YAxis stroke="#ccc" />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="price"
                      stroke="#1F7D53"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Rapeseed Oil */}
            <div className="bg-[#255F38] p-6 rounded-xl shadow-md hover:shadow-xl transition-all">
              <h3 className="text-xl font-bold text-[#1F7D53] mb-4">
                Rapeseed Oil
              </h3>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={rapeseedOilData}>
                    <XAxis dataKey="month" stroke="#ccc" />
                    <YAxis stroke="#ccc" />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="price"
                      stroke="#1F7D53"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plan with Confidence Section */}
      <section className="py-16 px-4 bg-[#27391C]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          {/* Left Text Content */}
          <div>
            <h2 className="text-3xl font-bold text-[#6cb996] mb-6">
              Plan with Confidence
            </h2>
            <h3 className="text-xl font-semibold text-white mb-4">
              What makes our forecasts better?
            </h3>
            <p className="text-gray-300 mb-4">
              Our unique history of 150+ years in the agriculture space has
              allowed us to amass data and experience on agricultural
              commodities that are unrivaled.
            </p>
            <p className="text-gray-300 mb-4">
              All our data feeds into an augmented intelligence platform where
              forecasting is created, measured for accuracy, and refined. We
              have no market positions, ensuring neutrality.
            </p>
            <p className="text-gray-300 mb-6">
              We openly share our forecast history to refine our predictive
              abilities and maintain transparency.
            </p>
            <button className="bg-[#1F7D53] hover:bg-[#18230F] text-white px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300">
              Schedule a Demo
            </button>
          </div>

          {/* Right Image */}
          <div>
            <img
              src={img1}
              alt="Agriculture Planning"
              className="w-full rounded-xl shadow-lg object-cover h-80 md:h-[400px]"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
