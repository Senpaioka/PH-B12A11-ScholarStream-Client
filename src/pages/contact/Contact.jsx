import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    document.title = "Contact Us | ScholarStream";
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-base-content mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-base-content/80 max-w-3xl mx-auto leading-relaxed">
              Have questions about scholarships or need help with your application? 
              We're here to support you every step of the way.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 bg-base-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-base-200 p-8 rounded-2xl shadow-lg h-full">
                <h2 className="text-3xl font-bold text-base-content mb-8">Contact Information</h2>
                
                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg mt-1">
                      <FaMapMarkerAlt className="text-primary text-lg" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-base-content mb-1">Address</h3>
                      <p className="text-base-content/70">
                        123 Education Street<br />
                        Learning City, LC 12345<br />
                        United States
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-secondary/10 rounded-lg mt-1">
                      <FaPhone className="text-secondary text-lg" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-base-content mb-1">Phone</h3>
                      <p className="text-base-content/70">
                        <a href="tel:+1234567890" className="hover:text-primary transition-colors">
                          +1 (234) 567-8900
                        </a>
                      </p>
                      <p className="text-base-content/70">
                        <a href="tel:+1234567891" className="hover:text-primary transition-colors">
                          +1 (234) 567-8901 (Support)
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent/10 rounded-lg mt-1">
                      <FaEnvelope className="text-accent text-lg" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-base-content mb-1">Email</h3>
                      <p className="text-base-content/70">
                        <a href="mailto:info@scholarstream.com" className="hover:text-primary transition-colors">
                          info@scholarstream.com
                        </a>
                      </p>
                      <p className="text-base-content/70">
                        <a href="mailto:support@scholarstream.com" className="hover:text-primary transition-colors">
                          support@scholarstream.com
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-success/10 rounded-lg mt-1">
                      <FaClock className="text-success text-lg" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-base-content mb-1">Business Hours</h3>
                      <div className="text-base-content/70 space-y-1">
                        <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p>Saturday: 10:00 AM - 4:00 PM</p>
                        <p>Sunday: Closed</p>
                        <p className="text-sm text-primary font-medium mt-2">
                          24/7 Online Support Available
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="mt-8 pt-8 border-t border-base-300">
                  <h3 className="font-semibold text-base-content mb-4">Follow Us</h3>
                  <div className="flex gap-4">
                    <a 
                      href="https://www.facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-base-100 hover:bg-primary hover:text-white rounded-lg transition-all duration-300 shadow-sm hover:shadow-md"
                      aria-label="Facebook"
                    >
                      <FaFacebookF className="text-lg" />
                    </a>
                    <a 
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-base-100 hover:bg-primary hover:text-white rounded-lg transition-all duration-300 shadow-sm hover:shadow-md"
                      aria-label="Twitter"
                    >
                      <FaTwitter className="text-lg" />
                    </a>
                    <a 
                      href="https://www.linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-base-100 hover:bg-primary hover:text-white rounded-lg transition-all duration-300 shadow-sm hover:shadow-md"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedinIn className="text-lg" />
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
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-base-200 p-8 rounded-2xl shadow-lg">
                <h2 className="text-3xl font-bold text-base-content mb-8">Send us a Message</h2>
                
                {submitStatus === 'success' && (
                  <div className="alert alert-success mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Your message has been sent successfully! We'll get back to you soon.</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-base-content mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="Enter your full name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-base-content mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="Enter your email address"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-base-content mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="select select-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary/20"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="scholarship">Scholarship Questions</option>
                      <option value="application">Application Support</option>
                      <option value="technical">Technical Issues</option>
                      <option value="partnership">Partnership Opportunities</option>
                      <option value="feedback">Feedback & Suggestions</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-base-content mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="6"
                      className="textarea textarea-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary btn-lg w-full"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="loading loading-spinner loading-sm"></span>
                        Sending Message...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>

                <div className="mt-6 p-4 bg-base-100 rounded-lg">
                  <p className="text-sm text-base-content/70">
                    <strong>Response Time:</strong> We typically respond to all inquiries within 24 hours during business days. 
                    For urgent matters, please call our support line.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-base-200">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-base-content mb-4">Quick Answers</h2>
            <p className="text-base-content/70 text-lg max-w-2xl mx-auto">
              Find answers to common questions before reaching out
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              {/* FAQ 1 */}
              <div className="collapse collapse-plus bg-base-100 rounded-lg shadow">
                <input type="checkbox" />
                <div className="collapse-title text-lg font-semibold">
                  How quickly do you respond to inquiries?
                </div>
                <div className="collapse-content text-base-content/70">
                  <p>
                    We respond to all inquiries within 24 hours during business days. 
                    For urgent technical issues, we aim to respond within 4-6 hours.
                  </p>
                </div>
              </div>

              {/* FAQ 2 */}
              <div className="collapse collapse-plus bg-base-100 rounded-lg shadow">
                <input type="checkbox" />
                <div className="collapse-title text-lg font-semibold">
                  Can I schedule a phone consultation?
                </div>
                <div className="collapse-content text-base-content/70">
                  <p>
                    Yes! We offer free 30-minute consultation calls for scholarship guidance. 
                    Contact us to schedule an appointment that works for your timezone.
                  </p>
                </div>
              </div>

              {/* FAQ 3 */}
              <div className="collapse collapse-plus bg-base-100 rounded-lg shadow">
                <input type="checkbox" />
                <div className="collapse-title text-lg font-semibold">
                  Do you provide application review services?
                </div>
                <div className="collapse-content text-base-content/70">
                  <p>
                    We offer application review services for premium members. 
                    Our experts can review your essays, documents, and provide feedback to improve your chances.
                  </p>
                </div>
              </div>

              {/* FAQ 4 */}
              <div className="collapse collapse-plus bg-base-100 rounded-lg shadow">
                <input type="checkbox" />
                <div className="collapse-title text-lg font-semibold">
                  Is there live chat support available?
                </div>
                <div className="collapse-content text-base-content/70">
                  <p>
                    Yes, our live chat is available 24/7 for registered users. 
                    You can access it from your dashboard or any scholarship page when logged in.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-20 bg-base-100">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-base-content mb-4">Visit Our Office</h2>
            <p className="text-base-content/70 text-lg">
              Located in the heart of the education district
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-base-200 rounded-2xl overflow-hidden shadow-lg"
          >
            {/* Placeholder for map - you can integrate Google Maps or other map service */}
            <div className="h-96 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaMapMarkerAlt className="text-2xl text-white" />
                </div>
                <h3 className="text-xl font-semibold text-base-content mb-2">Interactive Map</h3>
                <p className="text-base-content/70">
                  123 Education Street, Learning City, LC 12345
                </p>
                <button className="btn btn-primary mt-4">
                  Get Directions
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Contact;