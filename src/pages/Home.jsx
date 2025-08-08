
// src/pages/Home.jsx
import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ChevronDown, ChevronUp } from "lucide-react";
import forest1 from "../assets/images/forest-01.jpg";
import forest2 from "../assets/images/forest-02.jpg";
import forest3 from "../assets/images/forest-03.jpg";
import forest4 from "../assets/images/forest-04.jpg";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Helmet } from "react-helmet";

// Sample dummy data for charts (replace later with live stats)
const plantationData = [
  { month: "Jan", trees: 200 },
  { month: "Feb", trees: 350 },
  { month: "Mar", trees: 500 },
  { month: "Apr", trees: 800 },
];

const survivalRateData = [
  { month: "Jan", rate: 85 },
  { month: "Feb", rate: 87 },
  { month: "Mar", rate: 89 },
  { month: "Apr", rate: 92 },
];

const co2OffsetData = [
  { month: "Jan", co2: 1.2 },
  { month: "Feb", co2: 2.4 },
  { month: "Mar", co2: 3.1 },
  { month: "Apr", co2: 4.5 },
];

// FAQ content
const faqs = [
  {
    question: "How does the system monitor reforestation?",
    answer:
      "We use satellite imagery, drone mapping, and on-ground surveys to track tree growth, survival rates, and forest health.",
  },
  {
    question: "Can it track individual projects?",
    answer:
      "Yes, every project has GPS-based location tracking, growth analytics, and carbon offset estimation.",
  },
  {
    question: "Who can use this system?",
    answer:
      "It’s designed for government agencies, NGOs, environmental groups, and corporate CSR programs.",
  },
];

const Home = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#102418] text-white min-h-screen">
      <Helmet>
        <title>Reforestation Monitoring</title>
      </Helmet>

      {/* Banner Carousel */}
      <section className="bg-[#0B1A12]">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          interval={2500}
        >
          {[forest1, forest2, forest3, forest4].map((img, i) => (
            <div key={i}>
              <img
                src={img}
                alt={`Forest Banner ${i + 1}`}
                className="object-cover h-64 md:h-[400px] w-full"
              />
            </div>
          ))}
        </Carousel>
      </section>

      {/* Empowering Communities + FAQ */}
      <section className="py-10 px-4 max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Left Content */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-green-400">
            Restoring Forests, Protecting the Future
          </h2>
          <p className="text-gray-300">
            Our Reforestation Monitoring System combines modern technology with
            local action to track, analyze, and enhance reforestation efforts
            worldwide.
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Satellite & Drone-based Monitoring</li>
            <li>Tree Growth & Health Analytics</li>
            <li>Carbon Offset Measurement</li>
            <li>Community Participation Tracking</li>
          </ul>
          <button className="bg-green-700 hover:bg-green-900 text-white px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300">
            Learn More
          </button>
        </div>

        {/* Right Content (FAQ) */}
        <div className="bg-[#184E32] rounded-2xl p-6 shadow-lg">
          <h3 className="text-2xl font-bold mb-4">Frequently Asked Questions</h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-green-700 pb-2">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center text-left text-lg font-semibold text-green-300 hover:text-green-500"
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

      {/* Project Progress Charts */}
      <section className="py-12 px-4 bg-[#0B1A12]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-green-400 mb-8 text-center">
            Reforestation Progress & Impact
          </h2>
          <p className="text-center max-w-2xl mx-auto text-gray-300 mb-12">
            Live tracking of plantation numbers, survival rates, and CO₂
            absorption to measure the real impact of our initiatives.
          </p>

          {/* Charts */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Plantation Count */}
            <div className="bg-[#184E32] p-6 rounded-xl shadow-md hover:shadow-xl transition-all">
              <h3 className="text-xl font-bold text-green-300 mb-4">
                Trees Planted
              </h3>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={plantationData}>
                    <XAxis dataKey="month" stroke="#ccc" />
                    <YAxis stroke="#ccc" />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="trees"
                      stroke="#22C55E"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Survival Rate */}
            <div className="bg-[#184E32] p-6 rounded-xl shadow-md hover:shadow-xl transition-all">
              <h3 className="text-xl font-bold text-green-300 mb-4">
                Survival Rate (%)
              </h3>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={survivalRateData}>
                    <XAxis dataKey="month" stroke="#ccc" />
                    <YAxis stroke="#ccc" />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="rate"
                      stroke="#22C55E"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* CO₂ Offset */}
            <div className="bg-[#184E32] p-6 rounded-xl shadow-md hover:shadow-xl transition-all">
              <h3 className="text-xl font-bold text-green-300 mb-4">
                CO₂ Offset (tons)
              </h3>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={co2OffsetData}>
                    <XAxis dataKey="month" stroke="#ccc" />
                    <YAxis stroke="#ccc" />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="co2"
                      stroke="#22C55E"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-[#102418]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          {/* Left Text */}
          <div>
            <h2 className="text-3xl font-bold text-green-400 mb-6">
              Plan, Monitor & Protect
            </h2>
            <h3 className="text-xl font-semibold text-white mb-4">
              Why our monitoring system stands out?
            </h3>
            <p className="text-gray-300 mb-4">
              Combining real-time monitoring, data analytics, and community
              engagement, we ensure every tree planted is a step toward a
              sustainable future.
            </p>
            <p className="text-gray-300 mb-4">
              Our AI-driven analytics predict growth patterns and detect threats
              early, maximizing forest survival.
            </p>
            <p className="text-gray-300 mb-6">
              We partner with local communities to ensure long-term care and
              benefits from the forests.
            </p>
            <button className="bg-green-700 hover:bg-green-900 text-white px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300">
              Start a Project
            </button>
          </div>

          {/* Right Image */}
          <div>
            <img
              src={forest1}
              alt="Reforestation Planning"
              className="w-full rounded-xl shadow-lg object-cover h-80 md:h-[400px]"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
