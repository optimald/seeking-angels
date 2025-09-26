import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-black text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-2xl font-bold">Seeking Angels Foundation</div>
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-green-400 transition-colors">Home</Link>
            <Link href="/mission" className="hover:text-green-400 transition-colors">Mission</Link>
            <Link href="/calendar" className="hover:text-green-400 transition-colors">Calendar</Link>
            <Link href="/donation" className="hover:text-green-400 transition-colors">Donate</Link>
            <Link href="/contact" className="hover:text-green-400 transition-colors">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900 to-black text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Seeking Angels Foundation
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-green-400">
            "Dedicated to First Responders"
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            Have you ever heard a person say that they believe their rescuers must be Angels? 
            We can all agree that First Responders are Heroes for their commitment to saving lives in any situation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/mission" 
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Learn About Our Mission
            </Link>
            <Link 
              href="/donation" 
              className="border-2 border-white hover:bg-white hover:text-black text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Donate Now
            </Link>
          </div>
        </div>
      </section>

      {/* PTSD vs C-PTSD Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
              Understanding PTSD vs C-PTSD
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-red-600">PTSD</h3>
                <p className="text-gray-700">
                  PTSD or "post traumatic stress disorder" is caused by the memory 
                  associated with a traumatic event. We repeatedly, consciously or 
                  subconsciously re-live the event which often causes disorders such as 
                  depression, anxiety and stress.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">C-PTSD</h3>
                <p className="text-gray-700">
                  C-PTSD or "complex traumatic stress disorder" is similar to PTSD but can 
                  have more severe effects due to the re-living of a repetitive trauma, or 
                  having witnessed too many traumatic events.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* First Responders Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">
              First Responders We Serve
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Many organizations encompass the First Responders designation and we salute them all. 
              However for the purposes of our mission at the Seeking Angels Foundation, we include:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2 text-blue-800">Firefighters</h3>
                <p className="text-gray-700">Brave heroes who rush into danger to save lives</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2 text-blue-800">Police Officers</h3>
                <p className="text-gray-700">Protecting and serving our communities</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2 text-blue-800">Paramedics & EMTs</h3>
                <p className="text-gray-700">Providing critical medical care in emergencies</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2 text-blue-800">Emergency Room Doctors</h3>
                <p className="text-gray-700">Saving lives in the most critical moments</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2 text-blue-800">Emergency Nurses</h3>
                <p className="text-gray-700">Providing compassionate care during crisis</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2 text-blue-800">All First Responders</h3>
                <p className="text-gray-700">Every hero who puts others before themselves</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Preview Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Our Mission
            </h2>
            <p className="text-lg mb-8">
              To provide support to First Responders with the goal to relieve C-PTSD 
              which is inherent to their careers. We organize a retreat that is all 
              inclusive, and 100% provided by our caring Donors.
            </p>
            <p className="text-lg mb-8">
              We invite First Responders to have a contemplative and relaxing experience with us, 
              we will show them how to use simple proven tactics of mindfulness for their 
              minds and bodies that can significantly decrease the reoccurrence of bad 
              memories, leaving them with an understanding of how to use these new 
              tools in the future for a much improved quality of life.
            </p>
            <Link 
              href="/mission" 
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
            >
              Learn More About Our Mission
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Every Dollar Counts, Invest In Someone's Future
          </h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Seeking Angels Foundation depends on donations to help establish a lasting difference 
            and future in the lives of our members. Please help us with whatever you can, 
            Veterans and First Responders are always there for us, but they see more than 
            their share of traumatic situations, let's turn the table and help them!
          </p>
          <Link 
            href="/donation" 
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