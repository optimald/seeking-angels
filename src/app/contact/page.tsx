"use client";

import Link from "next/link";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    userType: "supporter"
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
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
            <Link href="/donation" className="hover:text-green-400 transition-colors">Donate</Link>
            <Link href="/contact" className="text-green-400">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900 to-black text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-green-400">
            Ready to Make a Difference?
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
          Whether you&apos;re a First Responder seeking support, a potential donor, 
          or someone who wants to get involved, we&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
              Get In Touch
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="text-4xl mb-4 text-blue-600">📧</div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">Email Us</h3>
                <p className="text-gray-600 mb-4">
                  Send us a message and we&apos;ll respond within 24 hours
                </p>
                <a 
                  href="mailto:info@seekingangels.org" 
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  info@seekingangels.org
                </a>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="text-4xl mb-4 text-green-600">📞</div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">Call Us</h3>
                <p className="text-gray-600 mb-4">
                  Speak directly with our team about our programs
                </p>
                <a 
                  href="tel:+1-555-ANGELS" 
                  className="text-green-600 hover:text-green-800 font-semibold"
                >
                  (555) ANGELS-1
                </a>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="text-4xl mb-4 text-purple-600">📍</div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">Visit Us</h3>
                <p className="text-gray-600 mb-4">
                  Schedule a visit to learn more about our mission
                </p>
                <p className="text-purple-600 font-semibold">
                  By Appointment Only
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg shadow-xl p-8 border border-gray-200">
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
                Send Us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* User Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    I am a...
                  </label>
                  <select
                    name="userType"
                    value={formData.userType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="supporter">Supporter/Donor</option>
                    <option value="first-responder">First Responder</option>
                    <option value="volunteer">Potential Volunteer</option>
                    <option value="partner">Corporate Partner</option>
                    <option value="media">Media/Press</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Name and Email */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                {/* Phone and Subject */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="What is this regarding?"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Please tell us how we can help you or how you'd like to help us..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-colors"
                >
                  Send Message
                </button>
              </form>

              <p className="text-sm text-gray-500 text-center mt-4">
                We typically respond to all inquiries within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
              Frequently Asked Questions
            </h2>
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  How do I know if I qualify for your programs?
                </h3>
                <p className="text-gray-700">
                  Our programs are designed for active and retired First Responders, including 
                  firefighters, police officers, paramedics, EMTs, emergency room doctors, and nurses. 
                  If you&apos;re unsure about your eligibility, please contact us and we&apos;ll be happy to discuss your situation.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  Are your programs really free for First Responders?
                </h3>
                <p className="text-gray-700">
                  Yes! All of our retreat programs are 100% free for qualifying First Responders. 
                  This includes flights, accommodation, meals, and all activities. Our programs are 
                  funded entirely through donations from generous supporters.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  How can I volunteer with your organization?
                </h3>
                <p className="text-gray-700">
                  We welcome volunteers who are passionate about supporting First Responders. 
                  Opportunities include event coordination, transportation assistance, activity leadership, 
                  and administrative support. Contact us to learn about current volunteer opportunities.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  How do I book a spot on a retreat?
                </h3>
                <p className="text-gray-700">
                  You can view our flight schedule on the Calendar page and contact us to reserve a spot. 
                  We recommend booking early as spaces are limited to ensure a quality experience for all participants.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  Can family members participate in the retreats?
                </h3>
                <p className="text-gray-700">
                  Our current programs are designed specifically for First Responders, but we understand 
                  that trauma affects entire families. We&apos;re exploring family-oriented programs for the future. 
                  Please contact us to discuss your specific needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Resources */}
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-red-800">
              Need Immediate Help?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              If you&apos;re experiencing a mental health crisis, please reach out for immediate support:
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-red-600">Crisis Hotlines</h3>
                <div className="space-y-3 text-left">
                  <div>
                    <strong>National Suicide Prevention Lifeline:</strong>
                    <br />
                    <a href="tel:988" className="text-red-600 font-semibold">988</a>
                  </div>
                  <div>
                    <strong>Crisis Text Line:</strong>
                    <br />
                    Text HOME to <a href="sms:741741" className="text-red-600 font-semibold">741741</a>
                  </div>
                  <div>
                    <strong>First Responder Trauma Counselors:</strong>
                    <br />
                    <a href="tel:1-800-731-4327" className="text-red-600 font-semibold">1-800-731-4327</a>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-blue-600">Professional Resources</h3>
                <div className="space-y-3 text-left">
                  <div>
                    <strong>PTSD Foundation of America:</strong>
                    <br />
                    <a href="https://ptsdusa.org" className="text-blue-600 font-semibold">ptsdusa.org</a>
                  </div>
                  <div>
                    <strong>First Responder Support Network:</strong>
                    <br />
                    <a href="https://frsn.org" className="text-blue-600 font-semibold">frsn.org</a>
                  </div>
                  <div>
                    <strong>International Association of Fire Chiefs:</strong>
                    <br />
                    <a href="https://iafc.org" className="text-blue-600 font-semibold">iafc.org</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Ready to Make a Difference?
          </h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Whether you&apos;re seeking support or want to support others, we&apos;re here to help. 
            Contact us today to learn more about our programs and how you can get involved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/donation" 
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
            >
              Make a Donation
            </Link>
            <Link 
              href="/calendar" 
              className="border-2 border-white hover:bg-white hover:text-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
            >
              View Programs
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
              <p className="text-gray-400 mb-2">
                <strong>Email:</strong> info@seekingangels.org
              </p>
              <p className="text-gray-400 mb-2">
                <strong>Phone:</strong> (555) ANGELS-1
              </p>
              <p className="text-gray-400">
                <strong>Emergency:</strong> Call 988 for immediate help
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
