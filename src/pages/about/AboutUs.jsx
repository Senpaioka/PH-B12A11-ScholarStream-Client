import { useEffect } from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import { FaGraduationCap, FaUsers, FaGlobe, FaHeart, FaLightbulb, FaHandshake, FaRocket } from "react-icons/fa";

function AboutUs() {
  useEffect(() => {
    document.title = "About Us | ScholarStream";
  }, []);

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
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-primary rounded-full">
                <FaGraduationCap className="text-4xl text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-base-content mb-6">
              About ScholarStream
            </h1>
            <p className="text-xl text-base-content/80 max-w-3xl mx-auto leading-relaxed">
              Empowering students worldwide to achieve their educational dreams through 
              accessible scholarship opportunities and comprehensive support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-base-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-base-200 p-8 rounded-2xl shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <FaRocket className="text-2xl text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-base-content">Our Mission</h2>
                </div>
                <p className="text-base-content/80 leading-relaxed text-lg">
                  To democratize access to higher education by connecting deserving students 
                  with scholarship opportunities that match their potential, regardless of 
                  their background or financial circumstances.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-base-200 p-8 rounded-2xl shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-secondary/10 rounded-lg">
                    <FaLightbulb className="text-2xl text-secondary" />
                  </div>
                  <h2 className="text-3xl font-bold text-base-content">Our Vision</h2>
                </div>
                <p className="text-base-content/80 leading-relaxed text-lg">
                  A world where every talented student has the opportunity to pursue 
                  their educational aspirations without financial barriers, creating 
                  a more educated and equitable global society.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-base-200">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-base-content mb-6">Our Story</h2>
            <p className="text-xl text-base-content/70 max-w-3xl mx-auto">
              Born from the belief that education should be accessible to all
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-base-100 p-8 md:p-12 rounded-2xl shadow-xl"
          >
            <p className="text-lg text-base-content/80 leading-relaxed mb-6">
              ScholarStream was founded in 2024 with a simple yet powerful idea: to create a 
              comprehensive platform that bridges the gap between talented students and 
              life-changing scholarship opportunities.
            </p>
            <p className="text-lg text-base-content/80 leading-relaxed mb-6">
              Our founders, having experienced firsthand the challenges of finding and applying 
              for scholarships, recognized the need for a centralized, user-friendly platform 
              that could streamline this process for students worldwide.
            </p>
            <p className="text-lg text-base-content/80 leading-relaxed">
              Today, we're proud to serve thousands of students globally, helping them discover 
              opportunities that align with their academic goals, interests, and circumstances. 
              Our platform continues to evolve, driven by our commitment to making education 
              more accessible and affordable for everyone.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-base-100">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-base-content mb-6">Our Core Values</h2>
            <p className="text-xl text-base-content/70 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Value 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-base-200 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <FaUsers className="text-2xl text-primary" />
                </div>
                <h3 className="text-xl font-bold text-base-content">Accessibility</h3>
              </div>
              <p className="text-base-content/80 leading-relaxed">
                We believe education should be accessible to everyone, regardless of 
                background, location, or financial status.
              </p>
            </motion.div>

            {/* Value 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-base-200 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-secondary/10 rounded-lg">
                  <FaHandshake className="text-2xl text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-base-content">Integrity</h3>
              </div>
              <p className="text-base-content/80 leading-relaxed">
                We maintain the highest standards of transparency and honesty in 
                all our interactions and processes.
              </p>
            </motion.div>

            {/* Value 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-base-200 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <FaGlobe className="text-2xl text-accent" />
                </div>
                <h3 className="text-xl font-bold text-base-content">Global Impact</h3>
              </div>
              <p className="text-base-content/80 leading-relaxed">
                We strive to create positive change on a global scale by empowering 
                students from all corners of the world.
              </p>
            </motion.div>

            {/* Value 4 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-base-200 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-success/10 rounded-lg">
                  <FaLightbulb className="text-2xl text-success" />
                </div>
                <h3 className="text-xl font-bold text-base-content">Innovation</h3>
              </div>
              <p className="text-base-content/80 leading-relaxed">
                We continuously innovate to improve our platform and provide 
                better experiences for our users.
              </p>
            </motion.div>

            {/* Value 5 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-base-200 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-warning/10 rounded-lg">
                  <FaHeart className="text-2xl text-warning" />
                </div>
                <h3 className="text-xl font-bold text-base-content">Compassion</h3>
              </div>
              <p className="text-base-content/80 leading-relaxed">
                We approach every interaction with empathy and understanding, 
                recognizing the challenges students face.
              </p>
            </motion.div>

            {/* Value 6 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-base-200 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-info/10 rounded-lg">
                  <FaRocket className="text-2xl text-info" />
                </div>
                <h3 className="text-xl font-bold text-base-content">Excellence</h3>
              </div>
              <p className="text-base-content/80 leading-relaxed">
                We are committed to delivering exceptional quality in everything 
                we do, from our platform to our customer service.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-base-200">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-base-content mb-6">Our Impact</h2>
            <p className="text-xl text-base-content/70 max-w-3xl mx-auto">
              Numbers that reflect our commitment to student success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-base-100 p-8 rounded-2xl shadow-lg text-center"
            >
              <div className="text-4xl font-bold text-primary mb-2">10,000+</div>
              <div className="text-base-content/70">Students Helped</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-base-100 p-8 rounded-2xl shadow-lg text-center"
            >
              <div className="text-4xl font-bold text-secondary mb-2">500+</div>
              <div className="text-base-content/70">Scholarship Programs</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-base-100 p-8 rounded-2xl shadow-lg text-center"
            >
              <div className="text-4xl font-bold text-accent mb-2">50+</div>
              <div className="text-base-content/70">Countries Served</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-base-100 p-8 rounded-2xl shadow-lg text-center"
            >
              <div className="text-4xl font-bold text-success mb-2">$50M+</div>
              <div className="text-base-content/70">Scholarships Awarded</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Join thousands of students who have found their perfect scholarship match 
              through ScholarStream. Your educational dreams are within reach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/scholarships" 
                className="btn btn-outline btn-lg text-white border-white hover:bg-white hover:text-primary"
              >
                Explore Scholarships
              </Link>
              <Link 
                to="/register" 
                className="btn btn-lg bg-white text-primary hover:bg-base-200"
              >
                Get Started Today
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;