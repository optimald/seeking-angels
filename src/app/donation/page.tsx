"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Donation() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [donationType, setDonationType] = useState("one-time");
  const [campaignData, setCampaignData] = useState<any>(null);

  const predefinedAmounts = [25, 50, 100, 250, 500, 1000];

  // GiveButter Campaign ID - replace with your actual campaign ID
  const GIVEBUTTER_CAMPAIGN_ID = "seeking-angels-foundation";

  useEffect(() => {
    // Load GiveButter campaign data
    const loadCampaignData = async () => {
      try {
        // This would typically be done server-side for security
        // For now, we'll use the embedded widget approach
        console.log("Loading GiveButter campaign data...");
      } catch (error) {
        console.error("Error loading campaign data:", error);
      }
    };

    loadCampaignData();
  }, []);

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

      {/* GiveButter Donation Widget */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
              Support Our Heroes - Every Dollar Counts
            </h2>
            
            {/* GiveButter Embedded Widget */}
            <div className="bg-white rounded-lg shadow-xl p-8 border border-gray-200">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Let's Invest In Someone's Future
                </h3>
                <p className="text-gray-600 mb-6">
                  Please donate whatever amount you can and become a hero yourself! 
                  Our goals are impassioned and clear, this is the right thing to do for our 
                  Veterans and First Responders by replacing bad memories with new and good ones!
                </p>
              </div>

              {/* GiveButter Donation Form */}
              <div className="givebutter-widget-container">
                <iframe
                  src={`https://givebutter.com/embed/c/${GIVEBUTTER_CAMPAIGN_ID}`}
                  width="100%"
                  height="600"
                  frameBorder="0"
                  className="rounded-lg"
                  title="GiveButter Donation Form"
                ></iframe>
              </div>

              {/* Alternative: Direct Link Button */}
              <div className="mt-8 text-center">
                <p className="text-gray-600 mb-4">
                  Having trouble with the form above? 
                </p>
                <a
                  href={`https://givebutter.com/${GIVEBUTTER_CAMPAIGN_ID}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Donate on GiveButter →
                </a>
              </div>

              {/* Security Notice */}
              <div className="mt-8 p-4 bg-green-50 rounded-lg">
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
