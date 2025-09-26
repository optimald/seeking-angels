"use client";

import Link from "next/link";
import { useState } from "react";

export default function Donation() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [donationType, setDonationType] = useState("one-time");

  const predefinedAmounts = [25, 50, 100, 250, 500, 1000];

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleCustomAmount = (value: string) => {
    setCustomAmount(value);
    setSelectedAmount(null);
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
            <Link href="/calendar" className="hover:text-green-400 transition-colors">Calendar</Link>
            <Link href="/donation" className="text-green-400">Donate</Link>
            <Link href="/contact" className="hover:text-green-400 transition-colors">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900 to-black text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Support Our Heroes
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-green-400">
            Every Dollar Counts, Invest In Someone's Future
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            Your donation directly supports First Responders in their healing journey, 
            providing life-changing retreats and therapeutic programs.
          </p>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
              Your Impact
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">$25</div>
                <p className="text-gray-700">Provides one meal during retreat</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">$100</div>
                <p className="text-gray-700">Covers transportation costs</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">$500</div>
                <p className="text-gray-700">Funds one person's retreat experience</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">$1000</div>
                <p className="text-gray-700">Sponsors a complete healing program</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg shadow-xl p-8 border border-gray-200">
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
                Make a Donation
              </h2>
              
              {/* Donation Type */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Donation Type
                </label>
                <div className="flex space-x-4">
                  <button
                    onClick={() => setDonationType("one-time")}
                    className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-colors ${
                      donationType === "one-time"
                        ? "bg-green-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    One-Time
                  </button>
                  <button
                    onClick={() => setDonationType("monthly")}
                    className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-colors ${
                      donationType === "monthly"
                        ? "bg-green-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    Monthly
                  </button>
                </div>
              </div>

              {/* Amount Selection */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Select Amount
                </label>
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {predefinedAmounts.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => handleAmountSelect(amount)}
                      className={`py-3 px-4 rounded-lg font-semibold transition-colors ${
                        selectedAmount === amount
                          ? "bg-green-600 text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      ${amount}
                    </button>
                  ))}
                </div>
                
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                  <input
                    type="number"
                    placeholder="Custom amount"
                    value={customAmount}
                    onChange={(e) => handleCustomAmount(e.target.value)}
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Donor Information */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">Donor Information</h3>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent mb-4"
                />
                <input
                  type="tel"
                  placeholder="Phone Number (Optional)"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              {/* Payment Method */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">Payment Method</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <input type="radio" id="card" name="payment" defaultChecked className="text-green-600" />
                    <label htmlFor="card" className="text-gray-700">Credit/Debit Card</label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <input type="radio" id="paypal" name="payment" className="text-green-600" />
                    <label htmlFor="paypal" className="text-gray-700">PayPal</label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <input type="radio" id="bank" name="payment" className="text-green-600" />
                    <label htmlFor="bank" className="text-gray-700">Bank Transfer</label>
                  </div>
                </div>
              </div>

              {/* Special Instructions */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Special Instructions (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Any special instructions or dedication for your donation..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-colors">
                Donate {selectedAmount ? `$${selectedAmount}` : customAmount ? `$${customAmount}` : ""} 
                {donationType === "monthly" ? " Monthly" : " Now"}
              </button>

              <p className="text-sm text-gray-500 text-center mt-4">
                Your donation is secure and tax-deductible. You will receive a receipt via email.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How Donations Help */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
              How Your Donations Help
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="text-4xl mb-4">🏠</div>
                <h3 className="text-xl font-bold mb-4 text-blue-800">Facility Operations</h3>
                <p className="text-gray-700 mb-4">
                  Seeking Angels Foundation depends on donations to help establish a lasting 
                  difference and future in the lives of our members. Our current needs include 
                  rent for our facilities and insurance.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Facility rent and maintenance</li>
                  <li>• Insurance coverage</li>
                  <li>• Utilities and operational costs</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="text-4xl mb-4">🚐</div>
                <h3 className="text-xl font-bold mb-4 text-green-800">Transportation</h3>
                <p className="text-gray-700 mb-4">
                  Transportation for our members to and from our events is essential. 
                  We also need to replace our current pickup truck and events trailer 
                  with newer models.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Member transportation</li>
                  <li>• Vehicle maintenance and replacement</li>
                  <li>• Equipment trailer upgrades</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="text-4xl mb-4">⚽</div>
                <h3 className="text-xl font-bold mb-4 text-purple-800">Equipment & Activities</h3>
                <p className="text-gray-700 mb-4">
                  New sports equipment and funding for our events and activities is 
                  essential for what we do, including private fishing charters, 
                  fly fishing, and building your own fishing rod classes.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Sports and recreational equipment</li>
                  <li>• Fishing charters and equipment</li>
                  <li>• Activity supplies and materials</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="text-4xl mb-4">👥</div>
                <h3 className="text-xl font-bold mb-4 text-orange-800">Staff & Programs</h3>
                <p className="text-gray-700 mb-4">
                  To keep us up and running we must pay our small staff for their 
                  dedication to our cause. This includes kayaking, hiking, cookouts 
                  and more therapeutic activities.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Staff salaries and benefits</li>
                  <li>• Program development</li>
                  <li>• Therapeutic activity coordination</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways to Help */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">
              Other Ways to Help
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-bold mb-4 text-blue-800">Volunteer</h3>
                <p className="text-gray-700 mb-4">
                  Join our team of dedicated volunteers and help make a direct 
                  impact in the lives of First Responders.
                </p>
                <Link 
                  href="/contact" 
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  Learn More →
                </Link>
              </div>
              
              <div className="p-6">
                <div className="text-4xl mb-4">📢</div>
                <h3 className="text-xl font-bold mb-4 text-green-800">Spread the Word</h3>
                <p className="text-gray-700 mb-4">
                  Share our mission with your network and help us reach more 
                  First Responders who need our support.
                </p>
                <Link 
                  href="/mission" 
                  className="text-green-600 hover:text-green-800 font-semibold"
                >
                  Share Our Story →
                </Link>
              </div>
              
              <div className="p-6">
                <div className="text-4xl mb-4">🏢</div>
                <h3 className="text-xl font-bold mb-4 text-purple-800">Corporate Partnership</h3>
                <p className="text-gray-700 mb-4">
                  Partner with us as a corporate sponsor and help us expand 
                  our reach and impact.
                </p>
                <Link 
                  href="/contact" 
                  className="text-purple-600 hover:text-purple-800 font-semibold"
                >
                  Partner With Us →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Help Us Turn the Tables
          </h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Veterans and First Responders are always there for us, but they see more than 
            their share of traumatic situations. Let's turn the table and help them! 
            Every donation, no matter the size, makes a meaningful difference.
          </p>
          <Link 
            href="#donation-form" 
            className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
          >
            Donate Now
          </Link>
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
