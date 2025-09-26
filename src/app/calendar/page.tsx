"use client";

import Link from "next/link";
import { useState } from "react";

interface ReservationFormData {
  name: string;
  email: string;
  phone: string;
  groupSize: number;
  startDate: string;
  endDate: string;
  specialRequests: string;
}

export default function Calendar() {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedWeek, setSelectedWeek] = useState<{start: Date, end: Date} | null>(null);
  const [showReservationForm, setShowReservationForm] = useState(false);
  const [hoveredWeek, setHoveredWeek] = useState<{start: Date, end: Date} | null>(null);
  const [reservationData, setReservationData] = useState<ReservationFormData>({
    name: "",
    email: "",
    phone: "",
    groupSize: 1,
    startDate: "",
    endDate: "",
    specialRequests: ""
  });

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const years = Array.from({ length: 3 }, (_, i) => new Date().getFullYear() + i);

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month, 1).getDay();
  };

  const isRetreatWeek = (day: number, month: number, year: number) => {
    const date = new Date(year, month, day);
    const dayOfWeek = date.getDay();
    // Retreat weeks run from Saturday (6) to Thursday (4)
    // Saturday=6, Sunday=0, Monday=1, Tuesday=2, Wednesday=3, Thursday=4
    return dayOfWeek === 6 || dayOfWeek <= 4;
  };

  const getRetreatWeek = (day: number, month: number, year: number) => {
    const date = new Date(year, month, day);
    const dayOfWeek = date.getDay();
    
    let startDate: Date;
    if (dayOfWeek === 6) { // Saturday
      startDate = date;
    } else if (dayOfWeek <= 4) { // Sunday to Thursday
      startDate = new Date(date);
      // Go back to the previous Saturday
      startDate.setDate(date.getDate() - (dayOfWeek + 1));
    } else { // Friday
      startDate = new Date(date);
      // Go back to the previous Saturday
      startDate.setDate(date.getDate() - 6);
    }
    
    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + 5); // Thursday (5 days after Saturday)
    
    return { start: startDate, end: endDate };
  };

  const handleDateClick = (day: number, month: number, year: number) => {
    if (isRetreatWeek(day, month, year)) {
      const week = getRetreatWeek(day, month, year);
      setSelectedWeek(week);
      setReservationData({
        ...reservationData,
        startDate: week.start.toISOString().split('T')[0],
        endDate: week.end.toISOString().split('T')[0]
      });
      setShowReservationForm(true);
    }
  };

  const handleDateHover = (day: number, month: number, year: number) => {
    if (isRetreatWeek(day, month, year)) {
      const week = getRetreatWeek(day, month, year);
      setHoveredWeek(week);
    }
  };

  const handleDateLeave = () => {
    setHoveredWeek(null);
  };

  const handleReservationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the reservation data to your backend
    console.log('Reservation submitted:', reservationData);
    alert('Reservation request submitted! We will contact you within 24 hours to confirm.');
    setShowReservationForm(false);
    setSelectedWeek(null);
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(selectedMonth, selectedYear);
    const firstDay = getFirstDayOfMonth(selectedMonth, selectedYear);
    const days = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-12"></div>);
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(selectedYear, selectedMonth, day);
      const dayOfWeek = date.getDay();
      const isRetreat = isRetreatWeek(day, selectedMonth, selectedYear);
      const isToday = new Date().toDateString() === date.toDateString();
      
      // Determine if this day is part of a hovered week
      const isHovered = hoveredWeek && 
        date >= hoveredWeek.start && 
        date <= hoveredWeek.end;
      
      days.push(
        <div
          key={day}
          onClick={() => handleDateClick(day, selectedMonth, selectedYear)}
          onMouseEnter={() => handleDateHover(day, selectedMonth, selectedYear)}
          onMouseLeave={handleDateLeave}
          className={`h-12 flex items-center justify-center border border-gray-200 cursor-pointer transition-colors relative ${
            isRetreat 
              ? 'bg-green-100 hover:bg-green-200 text-green-800 font-semibold' 
              : 'hover:bg-gray-50'
          } ${isToday ? 'ring-2 ring-blue-500' : ''} ${
            isHovered ? 'bg-green-200' : ''
          }`}
        >
          {day}
          {/* Add flight info tooltip for Saturday and Thursday */}
          {(dayOfWeek === 6 || dayOfWeek === 4) && isRetreat && (
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 hover:opacity-100 transition-opacity whitespace-nowrap z-10">
              {dayOfWeek === 6 ? 'LAX → Loreto' : 'Loreto → LAX'}
            </div>
          )}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-blue-900 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-2xl font-bold">
            <div className="text-3xl">Seeking Angels</div>
            <div className="text-lg">Foundation</div>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-green-400 transition-colors">Home</Link>
            <Link href="/mission" className="hover:text-green-400 transition-colors">About Us</Link>
            <Link href="/calendar" className="text-green-400">Events</Link>
            <Link href="/donation" className="hover:text-green-400 transition-colors">Help & Resources</Link>
            <Link href="/contact" className="hover:text-green-400 transition-colors">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/80"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
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
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-gray-800">
              Retreat Schedule
            </h2>
            <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg text-center">
                <div className="text-3xl md:text-4xl mb-3 md:mb-4">✈️</div>
                <h3 className="text-lg md:text-xl font-bold mb-2 text-blue-800">Weekly Retreats</h3>
                <p className="text-sm md:text-base text-gray-700">Saturday to Thursday retreats in Loreto</p>
              </div>
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg text-center">
                <div className="text-3xl md:text-4xl mb-3 md:mb-4">👥</div>
                <h3 className="text-lg md:text-xl font-bold mb-2 text-green-800">Group Size</h3>
                <p className="text-sm md:text-base text-gray-700">2 groups of 4-6 people per retreat</p>
              </div>
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg text-center">
                <div className="text-3xl md:text-4xl mb-3 md:mb-4">🏖️</div>
                <h3 className="text-lg md:text-xl font-bold mb-2 text-orange-800">Destination</h3>
                <p className="text-sm md:text-base text-gray-700">Beautiful Loreto, Baja California Sur, Mexico</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Calendar */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-8">
              {/* Previous Year Button */}
              <button
                onClick={() => setSelectedYear(selectedYear - 1)}
                className="p-3 rounded-lg bg-gray-100 hover:bg-gray-200 border border-gray-300 transition-colors"
                title="Previous Year"
              >
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                </svg>
              </button>
              
              {/* Previous Month Button */}
              <button
                onClick={() => {
                  if (selectedMonth === 0) {
                    setSelectedMonth(11);
                    setSelectedYear(selectedYear - 1);
                  } else {
                    setSelectedMonth(selectedMonth - 1);
                  }
                }}
                className="p-3 rounded-lg bg-gray-100 hover:bg-gray-200 border border-gray-300 transition-colors"
                title="Previous Month"
              >
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Current Month/Year Display */}
              <div className="text-center min-w-[200px]">
                <h2 className="text-2xl font-bold text-gray-800">
                  {months[selectedMonth]} {selectedYear}
                </h2>
              </div>

              {/* Next Month Button */}
              <button
                onClick={() => {
                  if (selectedMonth === 11) {
                    setSelectedMonth(0);
                    setSelectedYear(selectedYear + 1);
                  } else {
                    setSelectedMonth(selectedMonth + 1);
                  }
                }}
                className="p-3 rounded-lg bg-gray-100 hover:bg-gray-200 border border-gray-300 transition-colors"
                title="Next Month"
              >
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Next Year Button */}
              <button
                onClick={() => setSelectedYear(selectedYear + 1)}
                className="p-3 rounded-lg bg-gray-100 hover:bg-gray-200 border border-gray-300 transition-colors"
                title="Next Year"
              >
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg>
              </button>

              {/* Today Button */}
              <button
                onClick={() => {
                  const today = new Date();
                  setSelectedMonth(today.getMonth());
                  setSelectedYear(today.getFullYear());
                }}
                className="ml-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors shadow-md"
                title="Go to Current Month"
              >
                Today
              </button>
            </div>

            {/* Calendar Legend */}
            <div className="mb-6 p-4 bg-green-50 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-2">Calendar Legend</h3>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-100 border border-green-300 rounded"></div>
                  <span className="text-green-700">Retreat Week (Saturday-Thursday)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-blue-500 rounded"></div>
                  <span className="text-blue-700">Today</span>
                </div>
              </div>
            </div>

            {/* Calendar Grid */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
              {/* Calendar Header */}
              <div className="grid grid-cols-7 bg-gray-100">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                  <div key={day} className="p-3 text-center font-semibold text-gray-700 border-r border-gray-200 last:border-r-0">
                    {day}
                  </div>
                ))}
              </div>
              
              {/* Calendar Body */}
              <div className="grid grid-cols-7">
                {renderCalendar()}
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-gray-600 mb-4">
                Click on any highlighted day to make a reservation for that retreat week.
              </p>
              <p className="text-sm text-gray-500">
                Retreat weeks run from Saturday to Thursday. All activities, meals, and accommodations are included.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation Form Modal */}
      {showReservationForm && selectedWeek && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800">Make a Reservation</h3>
                <button
                  onClick={() => setShowReservationForm(false)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>

              <div className="mb-6 p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Selected Retreat Week</h4>
                <p className="text-green-700">
                  {selectedWeek.start.toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })} - {selectedWeek.end.toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
              </div>

              <form onSubmit={handleReservationSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={reservationData.name}
                      onChange={(e) => setReservationData({...reservationData, name: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={reservationData.email}
                      onChange={(e) => setReservationData({...reservationData, email: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={reservationData.phone}
                      onChange={(e) => setReservationData({...reservationData, phone: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Group Size *</label>
                    <select
                      required
                      value={reservationData.groupSize}
                      onChange={(e) => setReservationData({...reservationData, groupSize: parseInt(e.target.value)})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value={1}>1 person</option>
                      <option value={2}>2 people</option>
                      <option value={3}>3 people</option>
                      <option value={4}>4 people</option>
                      <option value={5}>5 people</option>
                      <option value={6}>6 people</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Special Requests or Notes</label>
                  <textarea
                    value={reservationData.specialRequests}
                    onChange={(e) => setReservationData({...reservationData, specialRequests: e.target.value})}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Please let us know about any dietary restrictions, accessibility needs, or other special requirements..."
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button
                    type="submit"
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
                  >
                    Submit Reservation Request
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowReservationForm(false)}
                    className="flex-1 border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 py-3 px-6 rounded-lg font-semibold transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Information Section */}
      <section className="py-12 md:py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-gray-800">
              About Our Retreats
            </h2>
            <p className="text-base md:text-lg text-gray-700 mb-6 md:mb-8">
              Our therapeutic retreats in Loreto provide First Responders with a peaceful 
              environment to heal, learn mindfulness techniques, and connect with others 
              who understand their experiences.
            </p>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg">
                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-blue-800">What&apos;s Included</h3>
                <ul className="text-left text-sm md:text-base text-gray-700 space-y-2">
                  <li>✈️ Round-trip flights from LAX to Loreto</li>
                  <li>🏨 Accommodation and meals</li>
                  <li>🧘 Mindfulness and meditation sessions</li>
                  <li>🎣 Therapeutic activities (fishing, hiking)</li>
                  <li>👥 Group therapy and support sessions</li>
                  <li>🌅 All activities and excursions</li>
                </ul>
              </div>
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg">
                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-green-800">Eligibility</h3>
                <ul className="text-left text-sm md:text-base text-gray-700 space-y-2">
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
      <section className="py-12 md:py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl md:text-4xl font-bold mb-6 md:mb-8">
            Ready to Begin Your Healing Journey?
          </h2>
          <p className="text-base md:text-lg mb-6 md:mb-8 max-w-3xl mx-auto">
            Contact us to learn more about our retreat programs and how to reserve 
            your spot on one of our therapeutic retreats to Loreto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-green-600 hover:bg-gray-100 px-6 md:px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
            >
              Contact Us
            </Link>
            <Link 
              href="/donation" 
              className="border-2 border-white hover:bg-white hover:text-green-600 text-white px-6 md:px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
            >
              Support Our Mission
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-6 md:py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Seeking Angels Foundation</h3>
              <p className="text-sm md:text-base text-gray-400">
                Dedicated to supporting First Responders and helping them overcome 
                the challenges of C-PTSD through mindfulness and community.
              </p>
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/mission" className="text-sm md:text-base text-gray-400 hover:text-white transition-colors">Our Mission</Link></li>
                <li><Link href="/calendar" className="text-sm md:text-base text-gray-400 hover:text-white transition-colors">Calendar</Link></li>
                <li><Link href="/donation" className="text-sm md:text-base text-gray-400 hover:text-white transition-colors">Donate</Link></li>
                <li><Link href="/contact" className="text-sm md:text-base text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Contact Info</h3>
              <p className="text-sm md:text-base text-gray-400">
                Ready to make a difference? Contact us to learn more about 
                our programs and how you can help.
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-6 md:mt-8 pt-6 md:pt-8 text-center text-sm md:text-base text-gray-400">
            <p>&copy; 2024 Seeking Angels Foundation. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
