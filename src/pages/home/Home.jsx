import { Link } from "react-router";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Pagination, Navigation, Autoplay } from "swiper/modules";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from '../../hooks/useAxiosPublic';
import Marquee from "react-fast-marquee";
import { motion } from "motion/react"

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
  useEffect(() => {
    document.title = "Home | ScholarStream";
  }, []);


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


const logos = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
];

  if (isLoading) return;


  return (
    <div className="w-full min-h-screen bg-base-100">

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
        className="h-[80vh] md:h-[90vh]"
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
          <h2 className="text-3xl font-bold mb-2">Featured Scholarships</h2>
          <p className="text-gray-500 mb-8">
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
                      <h3 className="card-title">{post.scholarshipName}</h3>
                      <p className="text-gray-600">{post.universityName}</p>
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

      {/* FAQ  */}
          <section className="py-16 bg-base-100">
      <div className="max-w-5xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
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
            <div className="collapse-content text-gray-600">
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
            <div className="collapse-content text-gray-600">
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
            <div className="collapse-content text-gray-600">
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
            <div className="collapse-content text-gray-600">
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
            <div className="collapse-content text-gray-600">
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


      {/* TESTIMONIALS */}
      <section className="py-16 bg-base-200">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">What Students Say</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
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
                <h3 className="font-bold text-lg">Aisha Rahman</h3>
                <p className="text-sm text-gray-500">Undergraduate Student</p>
              </div>
            </div>

            <p className="mt-4 text-gray-700 leading-relaxed">
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
                <h3 className="font-bold text-lg">James Foster</h3>
                <p className="text-sm text-gray-500">Graduate Applicant</p>
              </div>
            </div>

            <p className="mt-4 text-gray-700 leading-relaxed">
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
                <h3 className="font-bold text-lg">Sophia Malik</h3>
                <p className="text-sm text-gray-500">International Student</p>
              </div>
            </div>

            <p className="mt-4 text-gray-700 leading-relaxed">
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