import { Link } from "react-router";
import { motion } from "motion/react";
// icons
import { FaXTwitter, FaYoutube, FaSquareFacebook, FaLinkedin, FaInstagram } from "react-icons/fa6";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGraduationCap } from "react-icons/fa";


function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-gradient-to-br from-base-300 to-base-200">
      {/* Main Footer */}
      <footer className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary rounded-lg">
                <FaGraduationCap className="text-2xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-primary">ScholarStream</h3>
            </div>
            <p className="text-base-content/80 mb-6 leading-relaxed">
              Connecting students with scholarship opportunities worldwide. Your gateway to educational excellence and financial support.
            </p>
            
            {/* Social Media */}
            <div className="flex gap-3">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-base-100 hover:bg-primary hover:text-white rounded-lg transition-all duration-300 shadow-sm hover:shadow-md"
                aria-label="Twitter"
              >
                <FaXTwitter className="text-lg" />
              </a>

              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-base-100 hover:bg-primary hover:text-white rounded-lg transition-all duration-300 shadow-sm hover:shadow-md"
                aria-label="YouTube"
              >
                <FaYoutube className="text-lg" />
              </a>

              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-base-100 hover:bg-primary hover:text-white rounded-lg transition-all duration-300 shadow-sm hover:shadow-md"
                aria-label="Facebook"
              >
                <FaSquareFacebook className="text-lg" />
              </a>

              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-base-100 hover:bg-primary hover:text-white rounded-lg transition-all duration-300 shadow-sm hover:shadow-md"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-lg" />
              </a>

              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-base-100 hover:bg-primary hover:text-white rounded-lg transition-all duration-300 shadow-sm hover:shadow-md"
                aria-label="Instagram"
              >
                <FaInstagram className="text-lg" />
              </a>
            </div>

          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6 text-base-content/80">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-base-content/70 hover:text-primary transition-colors duration-200 flex items-center gap-2">
                  <span className="w-1 h-1 bg-primary rounded-full"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/scholarships" className="text-base-content/70 hover:text-primary transition-colors duration-200 flex items-center gap-2">
                  <span className="w-1 h-1 bg-primary rounded-full"></span>
                  All Scholarships
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-base-content/70 hover:text-primary transition-colors duration-200 flex items-center gap-2">
                  <span className="w-1 h-1 bg-primary rounded-full"></span>
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/payment-history" className="text-base-content/70 hover:text-primary transition-colors duration-200 flex items-center gap-2">
                  <span className="w-1 h-1 bg-primary rounded-full"></span>
                  Payment History
                </Link>
              </li>
              <li>
                <Link to="/feedback" className="text-base-content/70 hover:text-primary transition-colors duration-200 flex items-center gap-2">
                  <span className="w-1 h-1 bg-primary rounded-full"></span>
                  Feedback
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6 text-base-content/80">Support</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-base-content/70 hover:text-primary transition-colors duration-200 flex items-center gap-2">
                  <span className="w-1 h-1 bg-primary rounded-full"></span>
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-base-content/70 hover:text-primary transition-colors duration-200 flex items-center gap-2">
                  <span className="w-1 h-1 bg-primary rounded-full"></span>
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-base-content/70 hover:text-primary transition-colors duration-200 flex items-center gap-2">
                  <span className="w-1 h-1 bg-primary rounded-full"></span>
                  Contact Support
                </a>
              </li>
              <li>
                <a href="#" className="text-base-content/70 hover:text-primary transition-colors duration-200 flex items-center gap-2">
                  <span className="w-1 h-1 bg-primary rounded-full"></span>
                  Application Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-base-content/70 hover:text-primary transition-colors duration-200 flex items-center gap-2">
                  <span className="w-1 h-1 bg-primary rounded-full"></span>
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-base-content/70 hover:text-primary transition-colors duration-200 flex items-center gap-2">
                  <span className="w-1 h-1 bg-primary rounded-full"></span>
                  Privacy Policy
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6 text-base-content/80">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-primary/10 rounded-lg mt-1">
                  <FaEnvelope className="text-primary text-sm" />
                </div>
                <div>
                  <p className="text-base-content/70 text-sm">Email</p>
                  <a href="mailto:support@scholarstream.com" className="text-base-content/60 hover:text-primary transition-colors">
                    support@scholarstream.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="p-2 bg-primary/10 rounded-lg mt-1">
                  <FaPhone className="text-primary text-sm" />
                </div>
                <div>
                  <p className="text-base-content/70 text-sm">Phone</p>
                  <a href="tel:+1234567890" className="text-base-content/60 hover:text-primary transition-colors">
                    +1 (234) 567-8900
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="p-2 bg-primary/10 rounded-lg mt-1">
                  <FaMapMarkerAlt className="text-primary text-sm" />
                </div>
                <div>
                  <p className="text-base-content/70 text-sm">Address</p>
                  <p className="text-base-content/60">
                    123 Education Street<br />
                    Learning City, LC 12345
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Newsletter Subscription */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-base-300"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-xl font-semibold mb-3 text-base-content/80">Stay Updated</h4>
            <p className="text-base-content/70 mb-6">
              Subscribe to our newsletter and never miss new scholarship opportunities
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="input input-bordered flex-1 focus:outline-none focus:ring-2 focus:ring-primary/20"
                required
              />
              <button
                type="submit"
                className="btn btn-primary px-8 hover:shadow-lg transition-all duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </motion.div>
      </footer>

      {/* Bottom Bar */}
      <div className="border-t border-base-300 bg-base-200">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-base-content/70 text-sm"
            >
              © {currentYear} ScholarStream. All rights reserved. Made with ❤️ for students worldwide.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex gap-6 text-sm"
            >
              <a href="#" className="text-base-content/70 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-base-content/70 hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-base-content/70 hover:text-primary transition-colors">
                Cookie Policy
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;