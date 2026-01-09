import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useAuth } from "../../hooks/useAuth";
import { motion } from "motion/react";
import { Link } from "react-router";
import { 
  FaComments, 
  FaCheckCircle, 
  FaTimesCircle, 
  FaClock,
  FaUniversity,
  FaCalendarAlt,
  FaGraduationCap,
  FaStar,
  FaFilter,
  FaSearch,
  FaChartPie,
  FaThumbsUp,
  FaThumbsDown,
  FaExclamationCircle,
  FaLightbulb,
  FaArrowRight
} from "react-icons/fa";

const Feedback = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    document.title = "Application Feedback | ScholarStream";
  }, []);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const res = await axiosSecure.get(`/applications/feedback/${user?.email}`);
        setFeedbacks(res.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    if (user?.email) fetchFeedbacks();
  }, [user, axiosSecure]);

  // Filter and search logic
  const filteredFeedbacks = feedbacks.filter(item => {
    const status = item.applicationStatus?.toLowerCase() || 'pending';
    const matchesStatus = filterStatus === 'all' || status === filterStatus;
    const matchesSearch = item.scholarshipName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.universityName.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const stats = {
    total: feedbacks.length,
    approved: feedbacks.filter(f => f.applicationStatus?.toLowerCase() === 'approved' || f.applicationStatus?.toLowerCase() === 'accepted').length,
    rejected: feedbacks.filter(f => f.applicationStatus?.toLowerCase() === 'rejected' || f.applicationStatus?.toLowerCase() === 'declined').length,
    pending: feedbacks.filter(f => !f.applicationStatus || f.applicationStatus?.toLowerCase() === 'pending').length
  };

  const getStatusIcon = (status) => {
    switch (status?.toLowerCase()) {
      case 'approved':
      case 'accepted':
        return <FaCheckCircle className="text-success" />;
      case 'rejected':
      case 'declined':
        return <FaTimesCircle className="text-error" />;
      default:
        return <FaClock className="text-warning" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'approved':
      case 'accepted':
        return 'success';
      case 'rejected':
      case 'declined':
        return 'error';
      default:
        return 'warning';
    }
  };

  const getStatusGradient = (status) => {
    switch (status?.toLowerCase()) {
      case 'approved':
      case 'accepted':
        return 'from-success/20 to-success/5 border-success/30';
      case 'rejected':
      case 'declined':
        return 'from-error/20 to-error/5 border-error/30';
      default:
        return 'from-warning/20 to-warning/5 border-warning/30';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-base-100 to-base-200 flex justify-center items-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-base-content/70 text-lg">Loading your feedback...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-100 to-base-200">
      {/* Modern Header */}
      <div className="bg-base-100 shadow-sm border-b border-base-300">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6"
          >
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-base-content mb-2">
                Feedback Center
              </h1>
              <p className="text-base-content/70 text-lg">
                Track your application progress and committee feedback
              </p>
            </div>
            <div className="flex gap-3">
              <Link to="/scholarships" className="btn btn-primary gap-2">
                <FaGraduationCap />
                Apply More
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gradient-to-br from-primary to-primary/80 text-white p-6 rounded-2xl shadow-lg"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-primary-content/80 text-sm font-medium">Total Applications</p>
                <p className="text-3xl font-bold">{stats.total}</p>
              </div>
              <div className="p-3 bg-white/20 rounded-full">
                <FaComments className="text-2xl" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-success to-success/80 text-white p-6 rounded-2xl shadow-lg"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-success-content/80 text-sm font-medium">Approved</p>
                <p className="text-3xl font-bold">{stats.approved}</p>
              </div>
              <div className="p-3 bg-white/20 rounded-full">
                <FaThumbsUp className="text-2xl" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-error to-error/80 text-white p-6 rounded-2xl shadow-lg"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-error-content/80 text-sm font-medium">Rejected</p>
                <p className="text-3xl font-bold">{stats.rejected}</p>
              </div>
              <div className="p-3 bg-white/20 rounded-full">
                <FaThumbsDown className="text-2xl" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-warning to-warning/80 text-white p-6 rounded-2xl shadow-lg"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-warning-content/80 text-sm font-medium">Under Review</p>
                <p className="text-3xl font-bold">{stats.pending}</p>
              </div>
              <div className="p-3 bg-white/20 rounded-full">
                <FaClock className="text-2xl" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Filters and Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-base-100 p-6 rounded-2xl shadow-lg mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <div className="form-control">
                <div className="input-group">
                  <span className="bg-base-200">
                    <FaSearch />
                  </span>
                  <input
                    type="text"
                    placeholder="Search applications..."
                    className="input input-bordered w-full max-w-xs"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="form-control">
                <div className="input-group">
                  <span className="bg-base-200">
                    <FaFilter />
                  </span>
                  <select
                    className="select select-bordered"
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                  >
                    <option value="all">All Status</option>
                    <option value="approved">Approved</option>
                    <option value="accepted">Accepted</option>
                    <option value="rejected">Rejected</option>
                    <option value="declined">Declined</option>
                    <option value="pending">Under Review</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div className="text-sm text-base-content/70">
              Showing {filteredFeedbacks.length} of {feedbacks.length} applications
            </div>
          </div>
        </motion.div>

        {/* Feedback Cards */}
        {filteredFeedbacks.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-base-100 rounded-2xl shadow-lg p-12 text-center"
          >
            <div className="w-20 h-20 bg-base-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaComments className="text-3xl text-base-content/50" />
            </div>
            <h3 className="text-2xl font-semibold text-base-content mb-4">
              {feedbacks.length === 0 ? 'No Feedback Yet' : 'No Results Found'}
            </h3>
            <p className="text-base-content/70 mb-8 max-w-md mx-auto">
              {feedbacks.length === 0 
                ? 'You haven\'t received any feedback yet. Apply to scholarships to start receiving feedback.'
                : 'Try adjusting your search or filter criteria.'
              }
            </p>
            <Link to="/scholarships" className="btn btn-primary btn-lg gap-2">
              <FaGraduationCap />
              Browse Scholarships
            </Link>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredFeedbacks.map((app, index) => (
              <motion.div
                key={app._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-gradient-to-br ${getStatusGradient(app.applicationStatus)} border rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden`}
              >
                {/* Header */}
                <div className="bg-base-100/80 backdrop-blur-sm p-6 border-b border-base-300/50">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-base-content mb-2">
                        {app.scholarshipName}
                      </h3>
                      <div className="flex items-center gap-2 text-base-content/70 mb-2">
                        <FaUniversity className="text-sm" />
                        <span className="text-sm">{app.universityName}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <span className="badge badge-outline badge-sm">{app.degree}</span>
                        <span className="badge badge-outline badge-sm">{app.scholarshipCategory}</span>
                      </div>
                    </div>
                    <div className={`badge badge-${getStatusColor(app.applicationStatus)} badge-lg gap-2`}>
                      {getStatusIcon(app.applicationStatus)}
                      {app.applicationStatus || 'Under Review'}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Feedback Section */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <FaComments className="text-primary" />
                      <h4 className="font-semibold text-base-content">Committee Feedback</h4>
                    </div>
                    <div className="bg-base-100/60 backdrop-blur-sm p-4 rounded-lg border border-base-300/50">
                      <p className="text-base-content leading-relaxed">
                        {app.feedback || "The committee is still reviewing your application. You'll receive detailed feedback once the review is complete."}
                      </p>
                    </div>
                  </div>

                  {/* Application Details */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-base-100/40 p-3 rounded-lg">
                      <div className="text-xs text-base-content/60 mb-1">Application Fee</div>
                      <div className="font-semibold text-base-content">
                        ${app.applicationFees || 'N/A'}
                      </div>
                    </div>
                    <div className="bg-base-100/40 p-3 rounded-lg">
                      <div className="text-xs text-base-content/60 mb-1">Submitted</div>
                      <div className="font-semibold text-base-content text-sm">
                        {new Date(app.session_created).toLocaleDateString()}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Link 
                      to={`/scholarship/details/${app.scholarshipId}`}
                      className="btn btn-outline btn-sm flex-1 gap-2"
                    >
                      <FaUniversity />
                      View Details
                    </Link>
                    {(app.applicationStatus?.toLowerCase() === 'rejected' || app.applicationStatus?.toLowerCase() === 'declined') && (
                      <Link 
                        to="/scholarships"
                        className="btn btn-primary btn-sm flex-1 gap-2"
                      >
                        <FaArrowRight />
                        Find Similar
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Tips Section */}
        {feedbacks.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 bg-base-100 rounded-2xl shadow-lg p-8"
          >
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaLightbulb className="text-2xl text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-base-content mb-2">
                Improve Your Success Rate
              </h2>
              <p className="text-base-content/70">
                Learn from feedback to strengthen future applications
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FaCheckCircle className="text-success text-xl" />
                </div>
                <h3 className="font-semibold text-base-content mb-2">Learn from Success</h3>
                <p className="text-sm text-base-content/70">
                  Review approved applications to understand what committees value most
                </p>
              </div>

              <div className="text-center p-4">
                <div className="w-12 h-12 bg-warning/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FaExclamationCircle className="text-warning text-xl" />
                </div>
                <h3 className="font-semibold text-base-content mb-2">Address Feedback</h3>
                <p className="text-sm text-base-content/70">
                  Use committee feedback to improve your essays and application materials
                </p>
              </div>

              <div className="text-center p-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FaGraduationCap className="text-primary text-xl" />
                </div>
                <h3 className="font-semibold text-base-content mb-2">Keep Applying</h3>
                <p className="text-sm text-base-content/70">
                  Each application is a learning opportunity that brings you closer to success
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Feedback;
