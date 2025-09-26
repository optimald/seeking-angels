import Link from "next/link";
import DonationProgress from "@/components/DonationProgress";

export default function Home() {
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
            <Link href="/donation" className="hover:text-green-400 transition-colors">Help & Resources</Link>
            <Link href="/contact" className="hover:text-green-400 transition-colors">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/80"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Supporting The Rights And Mental Wellness For Veterans And First Responders
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto">
            We are dedicated to helping veterans, first responders, retirees, and their families 
            receive the resources they need for a blessed life. A life full of abundance, health and happiness.
          </p>
          <Link 
            href="/donation" 
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
          >
            Donate Now
          </Link>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800">
                  Who We Are
                </h2>
                <div className="space-y-6 text-gray-700">
                  <p className="text-lg leading-relaxed">
                    Seeking Angels is a non-profit foundation created to help people suffering from Post Traumatic Stress. 
                    Our founder was previously involved with the Mental Restorations Foundation in Hawaii, sponsoring 
                    events for veterans and first responders.
                  </p>
                  <p className="text-lg leading-relaxed">
                    With the increasing natural disasters across the country, we recognized the need to help Heroes of ours 
                    replace bad memories with good ones. Our mission is to provide support, resources, and healing 
                    opportunities for those who have served our communities.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <p className="text-gray-700 leading-relaxed">
                    The Seeking Angels Foundation has many needs to fulfill to make a lasting difference for our members 
                    and future generations. We need support for general operations and upcoming events.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    We would love to chat on the phone or schedule an appointment to discuss how you can help.
                  </p>
                  <Link 
                    href="/mission" 
                    className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors mt-4"
                  >
                    About Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Veterans & First Responders Resources Section */}
      <section className="py-16 bg-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-gradient-to-br from-blue-600 to-blue-800"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  Veterans & First Responders Resources
                </h2>
                <div className="space-y-4 text-lg leading-relaxed">
                  <p>
                    We honor the sacrifices made by our veterans and first responders. Our comprehensive 
                    support system provides the resources needed for mental wellness and successful transitions.
                  </p>
                  <p>
                    We advocate for mental health resources, career counseling, and community recognition 
                    to ensure every veteran and first responder has the opportunity to thrive during and after service.
                  </p>
                  <p>
                    Every veteran and first responder deserves the opportunity to thrive during and after service.
                  </p>
                </div>
                <Link 
                  href="/calendar" 
                  className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Explore Veteran Resources
                </Link>
              </div>
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                  <div className="text-6xl mb-4">🛡️</div>
                  <h3 className="text-2xl font-bold mb-4">Supporting Our Heroes</h3>
                  <p className="text-lg">
                    Comprehensive resources for mental wellness and successful transitions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Our Heroes Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <Link 
                href="/donation" 
                className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors mb-8"
              >
                Donate Here
              </Link>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-8 mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                Support Our Heroes...
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Please donate whatever amount you can and become a hero yourself! 
                Our goals are impassioned and clear, this is the right thing to do for our 
                Veterans and First Responders by replacing bad memories with new and good ones!
              </p>
              
              {/* Donation Progress */}
              <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
                <DonationProgress />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                  Get Our Monthly Newsletter For Current Events with Seeking Angels Foundation
                </h2>
              </div>
              <div className="flex gap-4">
                <input 
                  type="email" 
                  placeholder="Enter Your Email Address"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-800"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Foundation Info */}
            <div className="space-y-4">
              <div className="text-2xl font-bold">
                <div className="text-3xl">Seeking Angels</div>
                <div className="text-lg">Foundation</div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                We are dedicated to helping veterans, first responders, retirees, and their families 
                receive the resources they need for a blessed life. A life full of abundance, health and happiness.
              </p>
            </div>
            
            {/* Office */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Office</h3>
              <div className="space-y-2 text-gray-300">
                <p>330 SW 43rd St, Suite K406</p>
                <p>Renton, WA 98057</p>
                <p>
                  <a href="mailto:seekingangelsfoundation@gmail.com" className="hover:text-green-400 transition-colors">
                    seekingangelsfoundation@gmail.com
                  </a>
                </p>
                <p>
                  <a href="tel:206-609-4020" className="hover:text-green-400 transition-colors">
                    206-609-4020
                  </a>
                </p>
              </div>
            </div>
            
            {/* Useful Links */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Useful Links</h3>
              <div className="space-y-2">
                <Link href="/" className="block text-gray-300 hover:text-green-400 transition-colors">Home</Link>
                <Link href="/mission" className="block text-gray-300 hover:text-green-400 transition-colors">About Us</Link>
                <Link href="/calendar" className="block text-gray-300 hover:text-green-400 transition-colors">Events</Link>
                <Link href="/donation" className="block text-gray-300 hover:text-green-400 transition-colors">Help & Resources</Link>
                <Link href="/contact" className="block text-gray-300 hover:text-green-400 transition-colors">Veterans Support</Link>
                <Link href="/contact" className="block text-gray-300 hover:text-green-400 transition-colors">Shop</Link>
              </div>
            </div>
            
            {/* Follow Us */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">f Facebook</a>
                <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Twitter</a>
                <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Instagram</a>
              </div>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              All Copyright 2025 All Rights Reserved.
            </div>
            <div className="flex items-center space-x-2 text-gray-400 text-sm mt-4 md:mt-0">
              <span>Powered by</span>
              <span className="text-green-400">NitroPack</span>
              <span>Automated page speed optimizations for fast site performance</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}