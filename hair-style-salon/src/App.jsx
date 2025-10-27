import { useState } from 'react'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">Hair Style</h1>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-pink-600 transition-colors">Home</a>
              <a href="#services" className="text-gray-700 hover:text-pink-600 transition-colors">Services</a>
              <a href="#about" className="text-gray-700 hover:text-pink-600 transition-colors">About</a>
              <a href="#testimonials" className="text-gray-700 hover:text-pink-600 transition-colors">Reviews</a>
              <a href="#contact" className="text-gray-700 hover:text-pink-600 transition-colors">Contact</a>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <button className="bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700 transition-colors">
                Book Now
              </button>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              <nav className="flex flex-col space-y-2">
                <a href="#home" className="text-gray-700 hover:text-pink-600 py-2">Home</a>
                <a href="#services" className="text-gray-700 hover:text-pink-600 py-2">Services</a>
                <a href="#about" className="text-gray-700 hover:text-pink-600 py-2">About</a>
                <a href="#testimonials" className="text-gray-700 hover:text-pink-600 py-2">Reviews</a>
                <a href="#contact" className="text-gray-700 hover:text-pink-600 py-2">Contact</a>
                <button className="bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700 transition-colors w-full mt-4">
                  Book Now
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-pink-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                Transform Your Look at
                <span className="text-pink-600 block">Hair Style Salon</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Experience premium hair care services with our expert stylists. From cuts to colors, 
                we bring your vision to life with the latest techniques and trends.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-700 transition-colors">
                  Book Appointment
                </button>
                <button className="border-2 border-pink-600 text-pink-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-600 hover:text-white transition-colors">
                  View Services
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-pink-200 rounded-full w-96 h-96 mx-auto flex items-center justify-center">
                <div className="text-6xl text-pink-600">✂️</div>
              </div>
              <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg">
                <div className="text-2xl">💇‍♀️</div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-4 shadow-lg">
                <div className="text-2xl">💄</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features/Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive range of beauty services designed to enhance your natural beauty
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-8 rounded-2xl text-center">
              <div className="text-4xl mb-4">✂️</div>
              <h4 className="text-2xl font-semibold text-gray-900 mb-4">Hair Cuts & Styling</h4>
              <p className="text-gray-600 mb-6">
                Professional cuts and styling for all hair types. From classic to trendy, we create the perfect look for you.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Precision Cuts</li>
                <li>• Layered Styles</li>
                <li>• Blowouts</li>
                <li>• Special Occasion Styling</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl text-center">
              <div className="text-4xl mb-4">🎨</div>
              <h4 className="text-2xl font-semibold text-gray-900 mb-4">Hair Coloring</h4>
              <p className="text-gray-600 mb-6">
                Express yourself with our expert coloring services. From subtle highlights to bold transformations.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Full Color</li>
                <li>• Highlights & Lowlights</li>
                <li>• Balayage</li>
                <li>• Color Correction</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-2xl text-center">
              <div className="text-4xl mb-4">💆‍♀️</div>
              <h4 className="text-2xl font-semibold text-gray-900 mb-4">Hair Treatments</h4>
              <p className="text-gray-600 mb-6">
                Restore and nourish your hair with our premium treatment services for healthy, beautiful hair.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Deep Conditioning</li>
                <li>• Keratin Treatments</li>
                <li>• Scalp Therapy</li>
                <li>• Hair Repair</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Hair Style?</h3>
            <p className="text-xl text-gray-600">Experience the difference with our premium salon services</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👥</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Expert Stylists</h4>
              <p className="text-gray-600">Certified professionals with years of experience</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌟</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Premium Products</h4>
              <p className="text-gray-600">High-quality, professional-grade hair care products</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏠</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Relaxing Atmosphere</h4>
              <p className="text-gray-600">Modern, comfortable salon environment</p>
            </div>

            <div className="text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📅</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Flexible Scheduling</h4>
              <p className="text-gray-600">Convenient appointment times that fit your schedule</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h3>
            <p className="text-xl text-gray-600">Real reviews from our satisfied customers</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg border">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-pink-600 font-semibold">SJ</span>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900">Sarah Johnson</h5>
                  <div className="flex text-yellow-400">
                    ⭐⭐⭐⭐⭐
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                "Amazing experience! The stylists really listened to what I wanted and delivered perfectly. 
                My hair has never looked better. Highly recommend!"
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-purple-600 font-semibold">MC</span>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900">Maria Chen</h5>
                  <div className="flex text-yellow-400">
                    ⭐⭐⭐⭐⭐
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                "Professional service and beautiful results. The color treatment exceeded my expectations. 
                The salon has such a relaxing atmosphere too."
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-semibold">ER</span>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900">Emily Rodriguez</h5>
                  <div className="flex text-yellow-400">
                    ⭐⭐⭐⭐⭐
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                "I've been coming here for months and every visit is fantastic. The team is skilled, 
                friendly, and always up-to-date with the latest trends."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact/CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-pink-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-4xl font-bold mb-4">Ready for Your Hair Transformation?</h3>
          <p className="text-xl mb-8 opacity-90">
            Book your appointment today and let our expert stylists bring your vision to life
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <button className="bg-white text-pink-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors">
              Book Appointment
            </button>
            <div className="flex items-center space-x-4">
              <span className="text-lg">📞 (555) 123-4567</span>
              <span className="text-lg">📧 info@hairstyle.com</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div>
              <h4 className="text-xl font-semibold mb-3">📍 Location</h4>
              <p className="opacity-90">
                123 Beauty Street<br />
                Downtown, City 12345<br />
                Near Central Mall
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-3">⏰ Hours</h4>
              <p className="opacity-90">
                Monday - Friday: 9AM - 8PM<br />
                Saturday: 8AM - 6PM<br />
                Sunday: 10AM - 5PM
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-3">💳 Services</h4>
              <p className="opacity-90">
                Walk-ins Welcome<br />
                Online Booking Available<br />
                Gift Cards Available
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-2xl font-bold mb-4">Hair Style</h4>
              <p className="text-gray-400">
                Your premier destination for professional hair care and styling services.
              </p>
            </div>
            
            <div>
              <h5 className="text-lg font-semibold mb-4">Services</h5>
              <ul className="space-y-2 text-gray-400">
                <li>Hair Cuts & Styling</li>
                <li>Hair Coloring</li>
                <li>Hair Treatments</li>
                <li>Special Occasions</li>
              </ul>
            </div>
            
            <div>
              <h5 className="text-lg font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="text-lg font-semibold mb-4">Follow Us</h5>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Facebook</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Hair Style Salon. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
