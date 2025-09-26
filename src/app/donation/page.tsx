"use client";

import Link from "next/link";
import { useState } from "react";

export default function Donation() {
  // GiveButter Campaign ID - replace with your actual campaign ID
  const GIVEBUTTER_CAMPAIGN_ID = "seeking-angels-foundation";

  // State for donation form
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [donorInfo, setDonorInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comment: ""
  });

  const handleDonation = async () => {
    if (!donorInfo.firstName || !donorInfo.email || (!selectedAmount && !customAmount)) {
      alert("Please fill in all required fields and select a donation amount.");
      return;
    }

    setIsProcessing(true);
    
    try {
      // Create donation data
      const donationData = {
        campaign_id: GIVEBUTTER_CAMPAIGN_ID,
        amount: selectedAmount || parseFloat(customAmount),
        donor: {
          first_name: donorInfo.firstName,
          last_name: donorInfo.lastName,
          email: donorInfo.email
        },
        comment: donorInfo.comment,
        payment_method: "card" // Default to card payment
      };

      // Call our API route to process the donation
      const response = await fetch('/api/givebutter/donate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(donationData),
      });

      if (response.ok) {
        const result = await response.json();
        // Redirect to GiveButter payment page or show success
        if (result.payment_url) {
          window.location.href = result.payment_url;
        } else {
          alert("Donation processed successfully! Thank you for your support.");
          // Reset form
          setSelectedAmount(null);
          setCustomAmount("");
          setDonorInfo({ firstName: "", lastName: "", email: "", comment: "" });
        }
      } else {
        const error = await response.json();
        alert(`Error processing donation: ${error.message}`);
      }
    } catch (error) {
      console.error('Donation error:', error);
      alert("There was an error processing your donation. Please try again.");
    } finally {
      setIsProcessing(false);
    }
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
            <Link href="/calendar" className="hover:text-green-400 transition-colors">Events</Link>
            <Link href="/donation" className="text-green-400">Help & Resources</Link>
            <Link href="/contact" className="hover:text-green-400 transition-colors">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/image_7.png')" }}
        ></div>
        <div className="absolute inset-0 bg-blue-900/80"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Support Our Heroes
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-green-400">
            Every Dollar Counts, Invest In Someone&apos;s Future
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
                <p className="text-gray-700">Funds one person&apos;s retreat experience</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">$1000</div>
                <p className="text-gray-700">Sponsors a complete healing program</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GiveButter Donation Widget */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
              Support Our Heroes - Every Dollar Counts
            </h2>
            
            {/* Custom Donation Form */}
            <div className="bg-white rounded-lg shadow-xl p-8 border border-gray-200">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Let&apos;s Invest In Someone&apos;s Future
                </h3>
                <p className="text-gray-600 mb-6">
                  Please donate whatever amount you can and become a hero yourself! 
                  Our goals are impassioned and clear, this is the right thing to do for our 
                  Veterans and First Responders by replacing bad memories with new and good ones!
                </p>
              </div>

              {/* Donation Amount Selection */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Donation Amount</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  {[10, 50, 100, 200].map((amount) => (
                    <button
                      key={amount}
                      onClick={() => setSelectedAmount(amount)}
                      className={`p-4 rounded-lg border-2 font-semibold transition-colors ${
                        selectedAmount === amount
                          ? 'border-green-600 bg-green-50 text-green-700'
                          : 'border-gray-300 hover:border-green-400 text-gray-700'
                      }`}
                    >
                      ${amount}
                    </button>
                  ))}
                </div>
                <div className="flex gap-4">
                  <input
                    type="number"
                    placeholder="Custom Amount"
                    value={customAmount || ''}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedAmount(null);
                    }}
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <button
                    onClick={() => {
                      setCustomAmount('');
                      setSelectedAmount(null);
                    }}
                    className="px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
                  >
                    Clear
                  </button>
                </div>
              </div>

              {/* Donor Information */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Donor Information</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name *"
                    value={donorInfo.firstName}
                    onChange={(e) => setDonorInfo({...donorInfo, firstName: e.target.value})}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={donorInfo.lastName}
                    onChange={(e) => setDonorInfo({...donorInfo, lastName: e.target.value})}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <input
                    type="email"
                    placeholder="Email Address *"
                    value={donorInfo.email}
                    onChange={(e) => setDonorInfo({...donorInfo, email: e.target.value})}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 md:col-span-2"
                    required
                  />
                </div>
                <textarea
                  placeholder="Comment (optional)"
                  value={donorInfo.comment}
                  onChange={(e) => setDonorInfo({...donorInfo, comment: e.target.value})}
                  className="w-full mt-4 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  rows={3}
                />
              </div>

              {/* Donation Summary */}
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-semibold text-gray-800">Donation Total:</span>
                  <span className="text-2xl font-bold text-green-600">
                    ${selectedAmount || customAmount || 0}
                  </span>
                </div>
                <button
                  onClick={handleDonation}
                  disabled={!donorInfo.firstName || !donorInfo.email || (!selectedAmount && !customAmount)}
                  className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white py-4 rounded-lg font-semibold transition-colors"
                >
                  {isProcessing ? 'Processing...' : 'Donate Now'}
                </button>
              </div>

              {/* Security Notice */}
              <div className="p-4 bg-green-50 rounded-lg">
                <div className="flex items-center">
                  <div className="text-green-600 mr-3">🔒</div>
                  <div>
                    <h4 className="font-semibold text-green-800">Secure Donation</h4>
                    <p className="text-green-700 text-sm">
                      Your donation is processed securely through GiveButter.
                      You will receive a tax-deductible receipt via email.
                    </p>
                  </div>
                </div>
              </div>
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
            their share of traumatic situations. Let&apos;s turn the table and help them! 
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
