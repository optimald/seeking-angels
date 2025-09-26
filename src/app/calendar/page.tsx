"use client";

import Link from "next/link";
import { useState } from "react";

// Generate flight schedule for the year
const generateFlightSchedule = () => {
  const flights = [];
  const startDate = new Date(2024, 0, 4); // First Thursday of 2024
  
  for (let week = 0; week < 52; week++) {
    const flightDate = new Date(startDate);
    flightDate.setDate(startDate.getDate() + (week * 7));
    
    flights.push({
      id: week + 1,
      date: flightDate,
      departure: "LAX - Los Angeles International",
      arrival: "LTO - Loreto Airport, Baja California Sur",
      departureTime: "8:00 AM",
      arrivalTime: "11:30 AM",
      group1Spots: 6,
      group1Available: Math.floor(Math.random() * 7), // Random availability for demo
      group2Spots: 6,
      group2Available: Math.floor(Math.random() * 7),
      status: week < 10 ? "Available" : "Open for Booking"
    });
  }
  
  return flights;
};

export default function Calendar() {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const flights = generateFlightSchedule();

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const filteredFlights = flights.filter(flight => 
    flight.date.getMonth() === selectedMonth && 
    flight.date.getFullYear() === selectedYear
  );

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-black text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">Seeking Angels Foundation</Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-green-400 transition-colors">Home</Link>
            <Link href="/mission" className="hover:text-green-400 transition-colors">Mission</Link>
            <Link href="/calendar" className="text-green-400">Calendar</Link>
            <Link href="/donation" className="hover:text-green-400 transition-colors">Donate</Link>
            <Link href="/contact" className="hover:text-green-400 transition-colors">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900 to-black text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Flight Schedule
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-green-400">
            LAX to Loreto, Baja California Sur - Every Thursday
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            Join us for healing retreats in beautiful Loreto. Two groups of 4-6 people per week, 
            52 weeks per year. Experience the therapeutic power of nature and community.
          </p>
        </div>
      </section>

      {/* Flight Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
              Flight Information
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="text-4xl mb-4">✈️</div>
                <h3 className="text-xl font-bold mb-2 text-blue-800">Weekly Flights</h3>
                <p className="text-gray-700">Every Thursday departure from LAX to Loreto</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="text-4xl mb-4">👥</div>
                <h3 className="text-xl font-bold mb-2 text-green-800">Group Size</h3>
                <p className="text-gray-700">2 groups of 4-6 people per flight</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="text-4xl mb-4">🏖️</div>
                <h3 className="text-xl font-bold mb-2 text-orange-800">Destination</h3>
                <p className="text-gray-700">Beautiful Loreto, Baja California Sur, Mexico</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calendar Filter */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Month</label>
                <select 
                  value={selectedMonth} 
                  onChange={(e) => setSelectedMonth(parseInt(e.target.value))}
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  {months.map((month, index) => (
                    <option key={index} value={index}>{month}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Year</label>
                <select 
                  value={selectedYear} 
                  onChange={(e) => setSelectedYear(parseInt(e.target.value))}
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value={2024}>2024</option>
                  <option value={2025}>2025</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flight Schedule */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center text-gray-800">
              {months[selectedMonth]} {selectedYear} Flight Schedule
            </h2>
            
            {filteredFlights.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No flights scheduled for this month.</p>
              </div>
            ) : (
              <div className="space-y-6">
                {filteredFlights.map((flight) => (
                  <div key={flight.id} className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div>
                          <h3 className="text-xl font-bold mb-2">
                            Flight #{flight.id} - {formatDate(flight.date)}
                          </h3>
                          <div className="flex items-center space-x-4 text-sm">
                            <span>🛫 {flight.departureTime}</span>
                            <span>🛬 {flight.arrivalTime}</span>
                          </div>
                        </div>
                        <div className="mt-4 md:mt-0">
                          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            flight.status === "Available" 
                              ? "bg-green-500 text-white" 
                              : "bg-yellow-500 text-black"
                          }`}>
                            {flight.status}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">🛫 Departure</h4>
                          <p className="text-gray-600">{flight.departure}</p>
                          <p className="text-sm text-gray-500">{flight.departureTime}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">🛬 Arrival</h4>
                          <p className="text-gray-600">{flight.arrival}</p>
                          <p className="text-sm text-gray-500">{flight.arrivalTime}</p>
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-blue-800 mb-2">Group 1</h4>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-700">Available Spots:</span>
                            <span className="font-bold text-blue-800">
                              {flight.group1Available}/{flight.group1Spots}
                            </span>
                          </div>
                          <div className="mt-2">
                            <div className="bg-blue-200 rounded-full h-2">
                              <div 
                                className="bg-blue-600 h-2 rounded-full" 
                                style={{width: `${(flight.group1Available / flight.group1Spots) * 100}%`}}
                              ></div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-green-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-green-800 mb-2">Group 2</h4>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-700">Available Spots:</span>
                            <span className="font-bold text-green-800">
                              {flight.group2Available}/{flight.group2Spots}
                            </span>
                          </div>
                          <div className="mt-2">
                            <div className="bg-green-200 rounded-full h-2">
                              <div 
                                className="bg-green-600 h-2 rounded-full" 
                                style={{width: `${(flight.group2Available / flight.group2Spots) * 100}%`}}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-6 flex flex-col sm:flex-row gap-3">
                        <button 
                          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
                          disabled={flight.group1Available === 0}
                        >
                          {flight.group1Available > 0 ? "Book Group 1" : "Group 1 Full"}
                        </button>
                        <button 
                          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
                          disabled={flight.group2Available === 0}
                        >
                          {flight.group2Available > 0 ? "Book Group 2" : "Group 2 Full"}
                        </button>
                        <Link 
                          href="/contact" 
                          className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 px-6 py-2 rounded-lg font-semibold transition-colors text-center"
                        >
                          Contact for Info
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">
              About Our Retreats
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Our therapeutic retreats in Loreto provide First Responders with a peaceful 
              environment to heal, learn mindfulness techniques, and connect with others 
              who understand their experiences.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-blue-800">What's Included</h3>
                <ul className="text-left text-gray-700 space-y-2">
                  <li>✈️ Round-trip flights from LAX to Loreto</li>
                  <li>🏨 Accommodation and meals</li>
                  <li>🧘 Mindfulness and meditation sessions</li>
                  <li>🎣 Therapeutic activities (fishing, hiking)</li>
                  <li>👥 Group therapy and support sessions</li>
                  <li>🌅 All activities and excursions</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-green-800">Eligibility</h3>
                <ul className="text-left text-gray-700 space-y-2">
                  <li>🚒 Active or retired Firefighters</li>
                  <li>👮 Active or retired Police Officers</li>
                  <li>🚑 Paramedics and EMTs</li>
                  <li>👨‍⚕️ Emergency Room Doctors</li>
                  <li>👩‍⚕️ Emergency Room Nurses</li>
                  <li>⭐ Other qualifying First Responders</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Ready to Begin Your Healing Journey?
          </h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Contact us to learn more about our retreat programs and how to reserve 
            your spot on one of our therapeutic flights to Loreto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
            >
              Contact Us
            </Link>
            <Link 
              href="/donation" 
              className="border-2 border-white hover:bg-white hover:text-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
            >
              Support Our Mission
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Seeking Angels Foundation</h3>
              <p className="text-gray-400">
                Dedicated to supporting First Responders and helping them overcome 
                the challenges of C-PTSD through mindfulness and community.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/mission" className="text-gray-400 hover:text-white transition-colors">Our Mission</Link></li>
                <li><Link href="/calendar" className="text-gray-400 hover:text-white transition-colors">Calendar</Link></li>
                <li><Link href="/donation" className="text-gray-400 hover:text-white transition-colors">Donate</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Info</h3>
              <p className="text-gray-400">
                Ready to make a difference? Contact us to learn more about 
                our programs and how you can help.
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Seeking Angels Foundation. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
