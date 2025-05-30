import { Link } from 'react-router-dom';
import { Scissors, Phone, MapPin, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-neutral-100 pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Intro */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Scissors className="w-6 h-6 text-primary" />
              <span className="text-xl font-bold font-heading">
                <span className="text-primary">Glow</span> & <span className="text-secondary">Style</span>
              </span>
            </Link>
            <p className="text-neutral-300 mb-6">
              Premium unisex salon offering top-quality haircuts, styling, coloring, facials, and spa services for men and women.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-300 hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-neutral-300 hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-neutral-300 hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-neutral-300 hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/services" className="text-neutral-300 hover:text-primary transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-300 hover:text-primary transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-300 hover:text-primary transition-colors">Book Appointment</Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-primary mt-0.5" />
                <span className="text-neutral-300">123 Beauty Lane, Stylish City, SC 12345</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-primary" />
                <span className="text-neutral-300">(123) 456-7890</span>
              </li>
              <li className="flex items-start">
                <Clock className="w-5 h-5 mr-3 text-primary mt-0.5" />
                <div className="text-neutral-300">
                  <p>Mon-Fri: 9:00 AM - 8:00 PM</p>
                  <p>Sat: 10:00 AM - 6:00 PM</p>
                  <p>Sun: Closed</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Newsletter</h3>
            <p className="text-neutral-300 mb-4">Subscribe to our newsletter for special offers and updates.</p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 rounded bg-neutral-800 border border-neutral-700 text-white"
                required
              />
              <button type="submit" className="btn btn-primary w-full">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-neutral-800 text-center text-neutral-400">
          <p>© {currentYear} Glow & Style. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;