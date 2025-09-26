import Link from "next/link";

export default function Mission() {
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
            <Link href="/mission" className="text-green-400">About Us</Link>
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our Mission
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-green-400">
            Supporting First Responders Through Healing and Hope
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800">
                Our Core Mission
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                To provide support to First Responders with the goal to relieve C-PTSD 
                which is inherent to their careers. We organize a retreat that is all 
                inclusive, and 100% provided by our caring Donors.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We invite First Responders to have a contemplative and relaxing experience with us, 
                we will show them how to use simple proven tactics of mindfulness for their 
                minds and bodies that can significantly decrease the reoccurrence of bad 
                memories, leaving them with an understanding of how to use these new 
                tools in the future for a much improved quality of life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
              The Challenge First Responders Face
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-red-600">Trauma Impact</h3>
                <p className="text-gray-700 mb-4">
                  Trauma not only affects the victims but has a profound effect on First 
                  Responders and their families due to the repetitive nature of what they do!
                </p>
                <p className="text-gray-700">
                  These are the men and women that are always on the front lines, fighting 
                  to save lives and witnessing many tragedies that sometimes do not have 
                  the desired outcome, sadly they cannot save everyone.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">Hidden Heroes</h3>
                <p className="text-gray-700 mb-4">
                  Have you ever heard a person say that they believe their rescuers must 
                  be Angels? We can all agree that First Responders are Heroes for their 
                  commitment to saving lives in any situation.
                </p>
                <p className="text-gray-700">
              Yet these heroes often struggle in silence with the weight of what 
              they&apos;ve witnessed and experienced in their service to others.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
              Our Healing Approach
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🧘</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-green-800">Mindfulness Training</h3>
                <p className="text-gray-700">
                  Simple proven tactics of mindfulness for minds and bodies that can 
                  significantly decrease the reoccurrence of bad memories.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🏞️</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-blue-800">Retreat Experience</h3>
                <p className="text-gray-700">
                  All-inclusive retreats in peaceful settings, providing a contemplative 
                  and relaxing experience away from daily stressors.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🤝</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-purple-800">Community Support</h3>
                <p className="text-gray-700">
                  Building connections with others who understand, creating lasting 
                  support networks for continued healing and growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Who We Serve
            </h2>
            <p className="text-lg text-center mb-8 text-gray-300">
              Many organizations encompass the First Responders designation and we salute them all. 
              However for the purposes of our mission at the Seeking Angels Foundation, we include:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <span className="text-4xl mb-4 block">🚒</span>
                <h3 className="text-xl font-bold mb-2">Firefighters</h3>
                <p className="text-gray-300">Brave souls who run toward danger</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <span className="text-4xl mb-4 block">👮</span>
                <h3 className="text-xl font-bold mb-2">Police Officers</h3>
                <p className="text-gray-300">Protectors of our communities</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <span className="text-4xl mb-4 block">🚑</span>
                <h3 className="text-xl font-bold mb-2">Paramedics & EMTs</h3>
                <p className="text-gray-300">First line of medical response</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <span className="text-4xl mb-4 block">👨‍⚕️</span>
                <h3 className="text-xl font-bold mb-2">Emergency Room Doctors</h3>
                <p className="text-gray-300">Life-savers in critical moments</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <span className="text-4xl mb-4 block">👩‍⚕️</span>
                <h3 className="text-xl font-bold mb-2">Emergency Nurses</h3>
                <p className="text-gray-300">Compassionate care providers</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <span className="text-4xl mb-4 block">⭐</span>
                <h3 className="text-xl font-bold mb-2">All First Responders</h3>
                <p className="text-gray-300">Every hero who serves others</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Help Us Support Our Heroes
          </h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Your support makes our mission possible. Every donation helps us provide 
            life-changing retreats and support services to First Responders who have 
            given so much to protect and serve our communities.
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
              View Our Programs
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
