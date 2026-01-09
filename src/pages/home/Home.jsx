import { Link } from "react-router";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Pagination, Navigation, Autoplay } from "swiper/modules";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from '../../hooks/useAxiosPublic';
import Marquee from "react-fast-marquee";
import { motion } from "motion/react"
import FirstVisitLoader from "../../components/FirstVisitLoader";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/parallax";

// logos
import logo1 from '../../assets/images/logo1.png'
import logo2 from '../../assets/images/logo2.png'
import logo3 from '../../assets/images/logo3.png'
import logo4 from '../../assets/images/logo4.png'
import logo5 from '../../assets/images/logo5.png'
import logo6 from '../../assets/images/logo6.png'
import logo7 from '../../assets/images/logo7.png'
  

function Home() {

  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    document.title = "Home | ScholarStream";
  }, []);


  const logos = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
  ];

  const useHomeScholarships = () => {
    const axiosPublic = useAxiosPublic();

    return useQuery({
      queryKey: ["home-scholarships"],
      queryFn: async () => {
        const res = await axiosPublic.get("/scholarships?page=1&limit=3");
        return res.data.data;
      }
    });
  };

  const { data = [], isLoading } = useHomeScholarships();

  useEffect(() => {
    if (!isLoading) {
      setShowLoader(false);
    }
  }, [isLoading]);


    if (showLoader) {
      return <FirstVisitLoader />;
    }

  return (
    <div className="w-full bg-base-100">

      <div className="w-full relative">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={800}
        parallax={true}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation, Autoplay]}
        className="h-[70vh] md:h-[70vh]"
      >
        {/* Background Layer */}
        <div
          slot="container-start"
          className="absolute inset-0 bg-cover bg-center"
          data-swiper-parallax="-30%"
        ></div>

        {/* SLIDE 1 */}
        <SwiperSlide>
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center relative">
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="flex flex-col items-start justify-center h-full max-w-5xl mx-auto px-6 relative z-10">
              <h2 className="text-4xl md:text-6xl font-bold text-white" data-swiper-parallax="-300">
                Discover Scholarships Worldwide
              </h2>
              <p className="mt-4 text-lg text-gray-200 max-w-lg" data-swiper-parallax="-150">
                Find top scholarships based on your skills, achievements, and
                interests.
              </p>

              <div className="mt-6 flex gap-4" data-swiper-parallax="-80">
                <Link to="/scholarships" className="btn btn-primary btn-lg">
                  Explore Now
                </Link>
                <Link to="/register" className="btn btn-outline btn-lg text-white border-white">
                  Join Free
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* SLIDE 2 */}
        <SwiperSlide>
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center relative">
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="flex flex-col items-start justify-center h-full max-w-5xl mx-auto px-6 relative z-10">
              <h2 className="text-4xl md:text-6xl font-bold text-white" data-swiper-parallax="-300">
                Apply With Confidence
              </h2>
              
              <p className="mt-4 text-lg text-gray-200 max-w-lg" data-swiper-parallax="-150">
                Step-by-step guidance to help you submit the perfect application.
              </p>

              <div className="mt-6 flex gap-4" data-swiper-parallax="-80">
                <Link to="/scholarships" className="btn btn-primary btn-lg">
                  Explore Now
                </Link>
                <Link to="/register" className="btn btn-outline btn-lg text-white border-white">
                  Join Free
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* SLIDE 3 */}
        <SwiperSlide>
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center relative">
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="flex flex-col items-start justify-center h-full max-w-5xl mx-auto px-6 relative z-10">
              <h2 className="text-4xl md:text-6xl font-bold text-white" data-swiper-parallax="-300">
                Your Future Starts Here
              </h2>
              
              <p className="mt-4 text-lg text-gray-200 max-w-lg" data-swiper-parallax="-150">
                Connect with programs that match your academic goals.
              </p>

              <div className="mt-6 flex gap-4" data-swiper-parallax="-80">
                <Link to="/scholarships" className="btn btn-primary btn-lg">
                  Explore Now
                </Link>
                <Link to="/register" className="btn btn-outline btn-lg text-white border-white">
                  Join Free
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>      

      {/* FEATURED SCHOLARSHIPS */}
      <section className="py-20 bg-base-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2 text-base-content">Featured Scholarships</h2>
          <p className="text-base-content/60 mb-8">
            Handpicked opportunities you might love
          </p>

          {/* Placeholder for dynamic data */}
          <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                { data.map((post) => (
                  <div key={post._id} className="card bg-base-200 shadow hover:shadow-xl transition">
                    <figure>
                      <img src={post.universityImage} alt={post.universityName} className="h-48 w-full object-cover" />
                    </figure>
                    <div className="card-body">
                      <h3 className="card-title text-base-content">{post.scholarshipName}</h3>
                      <p className="text-base-content/70">{post.universityName}</p>
                      <Link to={`/scholarship/details/${post._id}`} className="text-primary font-semibold">
                        Read more →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="py-20 bg-base-200">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-base-content mb-4">How It Works</h2>
            <p className="text-base-content/70 text-lg max-w-2xl mx-auto">
              Get started with ScholarStream in just 4 simple steps
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-primary/30 -translate-y-1/2"></div>
              </div>
              <h3 className="text-xl font-semibold text-base-content mb-3">Create Account</h3>
              <p className="text-base-content/70">
                Sign up for free and complete your profile with academic information
              </p>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-secondary/30 -translate-y-1/2"></div>
              </div>
              <h3 className="text-xl font-semibold text-base-content mb-3">Browse Scholarships</h3>
              <p className="text-base-content/70">
                Explore thousands of scholarships filtered by your preferences
              </p>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-accent/30 -translate-y-1/2"></div>
              </div>
              <h3 className="text-xl font-semibold text-base-content mb-3">Apply Online</h3>
              <p className="text-base-content/70">
                Submit your applications directly through our secure platform
              </p>
            </motion.div>

            {/* Step 4 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-success rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-base-content mb-3">Get Results</h3>
              <p className="text-base-content/70">
                Track your applications and receive notifications about your status
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/register" className="btn btn-primary btn-lg">
              Get Started Today
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SCHOLARSHIP CATEGORIES */}
      <section className="py-20 bg-base-100">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-base-content mb-4">Scholarship Categories</h2>
            <p className="text-base-content/70 text-lg max-w-2xl mx-auto">
              Discover scholarships across various fields and study levels
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Category 1 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link to="/scholarships" className="block">
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6 mx-auto">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 8.172V5L8 4z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-base-content mb-3 text-center">STEM Fields</h3>
                  <p className="text-base-content/70 text-center">
                    Science, Technology, Engineering, and Mathematics scholarships
                  </p>
                  <div className="text-center mt-4">
                    <span className="text-primary font-semibold">150+ Available</span>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Category 2 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link to="/scholarships" className="block">
                <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-6 mx-auto">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-base-content mb-3 text-center">Liberal Arts</h3>
                  <p className="text-base-content/70 text-center">
                    Literature, History, Philosophy, and Humanities programs
                  </p>
                  <div className="text-center mt-4">
                    <span className="text-secondary font-semibold">120+ Available</span>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Category 3 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link to="/scholarships" className="block">
                <div className="bg-gradient-to-br from-accent/10 to-accent/5 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-6 mx-auto">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-base-content mb-3 text-center">Business</h3>
                  <p className="text-base-content/70 text-center">
                    MBA, Finance, Marketing, and Entrepreneurship scholarships
                  </p>
                  <div className="text-center mt-4">
                    <span className="text-accent font-semibold">90+ Available</span>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Category 4 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link to="/scholarships" className="block">
                <div className="bg-gradient-to-br from-success/10 to-success/5 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mb-6 mx-auto">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-base-content mb-3 text-center">Healthcare</h3>
                  <p className="text-base-content/70 text-center">
                    Medicine, Nursing, Public Health, and Medical Research
                  </p>
                  <div className="text-center mt-4">
                    <span className="text-success font-semibold">80+ Available</span>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Category 5 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link to="/scholarships" className="block">
                <div className="bg-gradient-to-br from-warning/10 to-warning/5 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <div className="w-16 h-16 bg-warning rounded-full flex items-center justify-center mb-6 mx-auto">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-base-content mb-3 text-center">Arts & Design</h3>
                  <p className="text-base-content/70 text-center">
                    Fine Arts, Graphic Design, Music, and Creative Writing
                  </p>
                  <div className="text-center mt-4">
                    <span className="text-warning font-semibold">70+ Available</span>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Category 6 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link to="/scholarships" className="block">
                <div className="bg-gradient-to-br from-info/10 to-info/5 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <div className="w-16 h-16 bg-info rounded-full flex items-center justify-center mb-6 mx-auto">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9-9a9 9 0 00-9 9m0 0a9 9 0 019-9"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-base-content mb-3 text-center">International</h3>
                  <p className="text-base-content/70 text-center">
                    Study abroad programs and international exchange scholarships
                  </p>
                  <div className="text-center mt-4">
                    <span className="text-info font-semibold">100+ Available</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ  */}
          <section className="py-16 bg-base-100">
      <div className="max-w-5xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-base-content">Frequently Asked Questions</h2>
          <p className="text-base-content/70 mt-2 max-w-2xl mx-auto">
            Find answers to the most common questions about scholarships, applications, and our platform.
          </p>
        </div>

        {/* FAQ List */}
        <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
        >
        <div className="space-y-4">

          {/* FAQ 1 */}
          <div className="collapse collapse-plus bg-base-200 rounded-lg shadow">
            <input type="checkbox" />
            <div className="collapse-title text-lg font-semibold">
              How do I apply for a scholarship?
            </div>
            <div className="collapse-content text-base-content/70">
              <p>
                You can search available scholarships in our listings, select the one you qualify for,
                and follow the application process. Each scholarship includes detailed requirements
                and deadlines.
              </p>
            </div>
          </div>

          {/* FAQ 2 */}
          <div className="collapse collapse-plus bg-base-200 rounded-lg shadow">
            <input type="checkbox" />
            <div className="collapse-title text-lg font-semibold">
              Is there any application fee?
            </div>
            <div className="collapse-content text-base-content/70">
              <p>
                Some scholarships may require a small application fee. All fees and charges are
                clearly mentioned in the scholarship details before you apply.
              </p>
            </div>
          </div>

          {/* FAQ 3 */}
          <div className="collapse collapse-plus bg-base-200 rounded-lg shadow">
            <input type="checkbox" />
            <div className="collapse-title text-lg font-semibold">
              How long does it take to get feedback?
            </div>
            <div className="collapse-content text-base-content/70">
              <p>
                Feedback time varies based on the scholarship committee. However, you will receive
                notifications in your dashboard once updates are available.
              </p>
            </div>
          </div>

          {/* FAQ 4 */}
          <div className="collapse collapse-plus bg-base-200 rounded-lg shadow">
            <input type="checkbox" />
            <div className="collapse-title text-lg font-semibold">
              Can I apply for multiple scholarships at once?
            </div>
            <div className="collapse-content text-base-content/70">
              <p>
                Yes, you can apply to multiple scholarships as long as you meet their eligibility criteria.
                Each application is reviewed separately.
              </p>
            </div>
          </div>

          {/* FAQ 5 */}
          <div className="collapse collapse-plus bg-base-200 rounded-lg shadow">
            <input type="checkbox" />
            <div className="collapse-title text-lg font-semibold">
              Are international students eligible?
            </div>
            <div className="collapse-content text-base-content/70">
              <p>
                Absolutely. Many scholarships on our platform are open to international students.
                Eligibility details are clearly listed for each scholarship.
              </p>
            </div>
          </div>

        </div>
        </motion.div>
      </div>
    </section>

      {/* SUCCESS STATISTICS */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-base-content mb-4">Our Success Stories</h2>
            <p className="text-base-content/70 text-lg max-w-2xl mx-auto">
              Real numbers that showcase the impact we're making in students' lives
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center bg-base-100 p-8 rounded-2xl shadow-lg"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">15,000+</div>
              <div className="text-base-content/70 font-medium">Students Helped</div>
              <div className="text-sm text-base-content/50 mt-1">Since 2024</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center bg-base-100 p-8 rounded-2xl shadow-lg"
            >
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">$75M+</div>
              <div className="text-base-content/70 font-medium">Scholarships Awarded</div>
              <div className="text-sm text-base-content/50 mt-1">Total Value</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center bg-base-100 p-8 rounded-2xl shadow-lg"
            >
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">95%</div>
              <div className="text-base-content/70 font-medium">Success Rate</div>
              <div className="text-sm text-base-content/50 mt-1">Application Approval</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center bg-base-100 p-8 rounded-2xl shadow-lg"
            >
              <div className="text-4xl md:text-5xl font-bold text-success mb-2">60+</div>
              <div className="text-base-content/70 font-medium">Countries</div>
              <div className="text-sm text-base-content/50 mt-1">Global Reach</div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-base-content/70 text-lg mb-6">
              Join thousands of successful students who found their perfect scholarship match
            </p>
            <Link to="/scholarships" className="btn btn-primary btn-lg">
              Start Your Journey
            </Link>
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-base-200">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-base-content mb-4">Why Choose ScholarStream?</h2>
            <p className="text-base-content/70 text-lg max-w-2xl mx-auto">
              We're more than just a scholarship platform - we're your partner in educational success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-base-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-base-content mb-4">Verified Opportunities</h3>
              <p className="text-base-content/70 leading-relaxed">
                All scholarships on our platform are thoroughly verified and legitimate. 
                No scams, no fake opportunities - just real chances to fund your education.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-base-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-base-content mb-4">Smart Matching</h3>
              <p className="text-base-content/70 leading-relaxed">
                Our AI-powered system matches you with scholarships that fit your profile, 
                increasing your chances of success and saving you valuable time.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-base-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-base-content mb-4">24/7 Support</h3>
              <p className="text-base-content/70 leading-relaxed">
                Get help whenever you need it. Our dedicated support team is available 
                around the clock to assist with applications and answer your questions.
              </p>
            </motion.div>

            {/* Feature 4 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-base-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-base-content mb-4">Secure Platform</h3>
              <p className="text-base-content/70 leading-relaxed">
                Your personal information and documents are protected with bank-level 
                security. Apply with confidence knowing your data is safe.
              </p>
            </motion.div>

            {/* Feature 5 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-base-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-warning/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-warning" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-base-content mb-4">Application Tracking</h3>
              <p className="text-base-content/70 leading-relaxed">
                Monitor all your applications in one place. Get real-time updates 
                on application status and never miss important deadlines.
              </p>
            </motion.div>

            {/* Feature 6 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-base-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-info/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-info" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-base-content mb-4">No Hidden Fees</h3>
              <p className="text-base-content/70 leading-relaxed">
                Complete transparency in all costs. What you see is what you pay - 
                no surprise charges or hidden fees during the application process.
              </p>
            </motion.div>
          </div>
        </div>
      </section>


      {/* TESTIMONIALS */}
      <section className="py-16 bg-base-200">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-base-content">What Students Say</h2>
          <p className="text-base-content/70 mt-2 max-w-2xl mx-auto">
            Hear from students who have successfully earned scholarships through our platform.
          </p>
        </div>

        {/* Testimonials Grid */}
        <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
        >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="card bg-base-100 shadow-xl rounded-xl hover:shadow-2xl transition-all p-6">
            <div className="flex items-center gap-4">
              <div className="avatar">
                <div className="w-16 rounded-full">
                  <img src="https://i.pravatar.cc/150?img=32" alt="avatar" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg text-base-content">Aisha Rahman</h3>
                <p className="text-sm text-base-content/60">Undergraduate Student</p>
              </div>
            </div>

            <p className="mt-4 leading-relaxed">
              “This platform helped me secure a scholarship I never knew I qualified for.
              The process was smooth, and the resources were incredibly helpful.”
            </p>
          </div>

          {/* Card 2 */}
          <div className="card bg-base-100 shadow-xl rounded-xl hover:shadow-2xl transition-all p-6">
            <div className="flex items-center gap-4">
              <div className="avatar">
                <div className="w-16 rounded-full">
                  <img src="https://i.pravatar.cc/150?img=67" alt="avatar" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg text-base-content">James Foster</h3>
                <p className="text-sm text-base-content/60">Graduate Applicant</p>
              </div>
            </div>

            <p className="mt-4 leading-relaxed">
              “The filtering and recommendations made it easy to find scholarships that matched
              my profile. I loved the user-friendly dashboard.”
            </p>
          </div>

          {/* Card 3 */}
          <div className="card bg-base-100 shadow-xl rounded-xl hover:shadow-2xl transition-all p-6">
            <div className="flex items-center gap-4">
              <div className="avatar">
                <div className="w-16 rounded-full">
                  <img src="https://i.pravatar.cc/150?img=12" alt="avatar" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg text-base-content">Sophia Malik</h3>
                <p className="text-sm text-base-content/60">International Student</p>
              </div>
            </div>

            <p className="mt-4 leading-relaxed">
              “The guidance and details provided on each scholarship were very transparent.
              I felt confident throughout the application process.”
            </p>
          </div>

        </div>
        </motion.div>
      </div>
    </section>


    {/* Marquee  */}
    <div className="marquee-wrapper my-[100px]">
      <Marquee gradient={true} gradientColor="[255,255,255]" speed={50}>
        {logos.map((logo, index) => (
          <div className="marquee-item" key={index}>
            <img src={logo} alt={`Logo ${index}`} />
          </div>
        ))}
      </Marquee>
    </div>

      {/* LATEST NEWS & UPDATES */}
      <section className="py-20 bg-base-100">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-base-content mb-4">Latest News & Updates</h2>
            <p className="text-base-content/70 text-lg max-w-2xl mx-auto">
              Stay informed about new scholarship opportunities and platform updates
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* News Item 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-base-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-primary font-semibold mb-2">January 8, 2025</div>
                <h3 className="text-xl font-semibold text-base-content mb-3">New STEM Scholarships Added</h3>
                <p className="text-base-content/70 mb-4">
                  We've partnered with leading tech companies to offer 50+ new STEM scholarships 
                  worth over $2M for the 2025 academic year.
                </p>
                <Link to="/scholarships" className="text-primary font-semibold hover:underline">
                  Learn More →
                </Link>
              </div>
            </motion.div>

            {/* News Item 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-base-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-secondary font-semibold mb-2">January 5, 2025</div>
                <h3 className="text-xl font-semibold text-base-content mb-3">Platform Update 2.0</h3>
                <p className="text-base-content/70 mb-4">
                  Enhanced AI matching, improved user interface, and faster application 
                  processing are now live on ScholarStream.
                </p>
                <Link to="/about" className="text-secondary font-semibold hover:underline">
                  Read More →
                </Link>
              </div>
            </motion.div>

            {/* News Item 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-base-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9-9a9 9 0 00-9 9m0 0a9 9 0 019-9"></path>
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-accent font-semibold mb-2">January 1, 2025</div>
                <h3 className="text-xl font-semibold text-base-content mb-3">Global Expansion</h3>
                <p className="text-base-content/70 mb-4">
                  ScholarStream is now available in 15 new countries, bringing our 
                  total reach to 75 countries worldwide.
                </p>
                <Link to="/about" className="text-accent font-semibold hover:underline">
                  Explore →
                </Link>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/scholarships" className="btn btn-outline btn-lg">
              View All Updates
            </Link>
          </motion.div>
        </div>
      </section>



      {/* CTA SECTION */}
      <section className="py-24 bg-linear-to-r from-blue-700 to-indigo-800 text-white text-center">
        <h2 className="text-4xl font-bold">Ready to Start Your Scholarship Journey?</h2>
        <p className="mt-4 opacity-90">
          Create your profile and access thousands of opportunities.
        </p>

        <Link to="/register" className="btn btn-outline btn-lg text-white hover:text-black border-white mt-8">
          Create Account
        </Link>
      </section>
    </div>
  );
}

export default Home;