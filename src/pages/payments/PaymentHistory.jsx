import { useAuth } from "../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Link } from "react-router";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { 
  FaWallet, 
  FaCheckCircle, 
  FaClock, 
  FaExclamationTriangle,
  FaUniversity,
  FaCalendarAlt,
  FaReceipt,
  FaDownload,
  FaFilter,
  FaSearch,
  FaCreditCard,
  FaChartLine
} from "react-icons/fa";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    document.title = "Payment History | ScholarStream";
  }, []);

  const { data: history = [], isLoading } = useQuery({
    queryKey: ["payment-history", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payment-history?email=${user.email}`);
      return res.data;
    },
    enabled: !!user,
  });

  // Filter and search logic
  const filteredHistory = history.filter(item => {
    const matchesStatus = filterStatus === 'all' || item.paymentStatus === filterStatus;
    const matchesSearch = item.scholarshipName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.universityName.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const stats = {
    total: history.length,
    paid: history.filter(item => item.paymentStatus === 'paid').length,
    pending: history.filter(item => item.paymentStatus === 'unpaid').length,
    totalAmount: history.filter(item => item.paymentStatus === 'paid')
                       .reduce((sum, item) => sum + parseFloat(item.applicationFees || 0), 0)
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-base-100 to-base-200 flex justify-center items-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-base-content/70 text-lg">Loading your payment history...</p>
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
                Payment Dashboard
              </h1>
              <p className="text-base-content/70 text-lg">
                Manage and track all your scholarship payments
              </p>
            </div>
            <div className="flex gap-3">
              <button className="btn btn-outline gap-2">
                <FaDownload />
                Export
              </button>
              <Link to="/scholarships" className="btn btn-primary gap-2">
                <FaCreditCard />
                New Application
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
                <FaWallet className="text-2xl" />
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
                <p className="text-success-content/80 text-sm font-medium">Completed</p>
                <p className="text-3xl font-bold">{stats.paid}</p>
              </div>
              <div className="p-3 bg-white/20 rounded-full">
                <FaCheckCircle className="text-2xl" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-warning to-warning/80 text-white p-6 rounded-2xl shadow-lg"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-warning-content/80 text-sm font-medium">Pending</p>
                <p className="text-3xl font-bold">{stats.pending}</p>
              </div>
              <div className="p-3 bg-white/20 rounded-full">
                <FaClock className="text-2xl" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-secondary to-secondary/80 text-white p-6 rounded-2xl shadow-lg"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-secondary-content/80 text-sm font-medium">Total Paid</p>
                <p className="text-3xl font-bold">${stats.totalAmount.toFixed(2)}</p>
              </div>
              <div className="p-3 bg-white/20 rounded-full">
                <FaChartLine className="text-2xl" />
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
                    placeholder="Search scholarships..."
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
                    <option value="paid">Completed</option>
                    <option value="unpaid">Pending</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div className="text-sm text-base-content/70">
              Showing {filteredHistory.length} of {history.length} payments
            </div>
          </div>
        </motion.div>

        {/* Payment History Cards */}
        {filteredHistory.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-base-100 rounded-2xl shadow-lg p-12 text-center"
          >
            <div className="w-20 h-20 bg-base-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaReceipt className="text-3xl text-base-content/50" />
            </div>
            <h3 className="text-2xl font-semibold text-base-content mb-4">
              {history.length === 0 ? 'No Payment History' : 'No Results Found'}
            </h3>
            <p className="text-base-content/70 mb-8 max-w-md mx-auto">
              {history.length === 0 
                ? 'You haven\'t made any scholarship payments yet. Start by exploring available scholarships.'
                : 'Try adjusting your search or filter criteria.'
              }
            </p>
            <Link to="/scholarships" className="btn btn-primary btn-lg gap-2">
              <FaCreditCard />
              Browse Scholarships
            </Link>
          </motion.div>
        ) : (
          <div className="space-y-4">
            {filteredHistory.map((item, index) => (
              <motion.div
                key={item._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-base-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    {/* Scholarship Info */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-base-content mb-2">
                            {item.scholarshipName}
                          </h3>
                          <div className="flex items-center gap-2 text-base-content/70 mb-2">
                            <FaUniversity className="text-sm" />
                            <span>{item.universityName}</span>
                          </div>
                          <div className="flex flex-wrap gap-4 text-sm text-base-content/60">
                            <span className="badge badge-outline">{item.scholarshipCategory}</span>
                            <span className="badge badge-outline">{item.degree}</span>
                          </div>
                        </div>
                        
                        {/* Status Badge */}
                        <div className={`badge badge-lg gap-2 ${
                          item.paymentStatus === 'paid' 
                            ? 'badge-success' 
                            : 'badge-warning'
                        }`}>
                          {item.paymentStatus === 'paid' ? (
                            <>
                              <FaCheckCircle />
                              Completed
                            </>
                          ) : (
                            <>
                              <FaClock />
                              Pending
                            </>
                          )}
                        </div>
                      </div>

                      {/* Transaction Details */}
                      {item.transactionId && (
                        <div className="bg-base-200 p-3 rounded-lg mb-4">
                          <div className="text-xs text-base-content/60 mb-1">Transaction ID</div>
                          <div className="text-sm font-mono text-base-content break-all">
                            {item.transactionId}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Payment Info */}
                    <div className="lg:text-right">
                      <div className="bg-base-200 p-4 rounded-xl mb-4">
                        <div className="text-sm text-base-content/60 mb-1">Application Fee</div>
                        <div className="text-2xl font-bold text-base-content">
                          ${item.applicationFees}
                        </div>
                      </div>
                      
                      {/* Action Button */}
                      {item.paymentStatus === 'unpaid' ? (
                        <Link
                          to={`/payment/confirm/${item.scholarshipId}`}
                          className="btn btn-primary btn-lg w-full lg:w-auto gap-2"
                        >
                          <FaCreditCard />
                          Pay Now
                        </Link>
                      ) : (
                        <button className="btn btn-success btn-lg w-full lg:w-auto gap-2" disabled>
                          <FaCheckCircle />
                          Completed
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentHistory;
