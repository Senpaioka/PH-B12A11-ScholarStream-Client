import { useAuth } from "../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Link } from "react-router";



const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: history = [], isLoading } = useQuery({
    queryKey: ["payment-history", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payment-history?email=${user.email}`);
      return res.data;
    },
    enabled: !!user,
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[300px]">
        <span className="loading loading-infinity loading-xl"></span>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto my-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">
        Your Payment History
      </h1>

      {history.length === 0 && (
        <p className="text-center text-gray-500">No payment records found.</p>
      )}

      <div className="space-y-6">
        {history.map((item) => (
          <div
            key={item._id}
            className="bg-base-100 shadow-xl rounded-xl p-6 border border-gray-200 relative hover:shadow-2xl transition"
          >
            {/* Scholarship Info */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-xl font-semibold">{item.scholarshipName}</h2>
                <p className="text-gray-600">{item.universityName}</p>
                <p className="text-gray-500 text-sm mt-1">
                  Category: {item.scholarshipCategory} • Degree: {item.degree}
                </p>
              </div>

              {/* Fee */}
              <div className="mt-4 sm:mt-0 bg-gray-50 border rounded-lg px-5 py-3 text-center">
                <p className="text-gray-600 text-sm">Application Fee</p>
                <p className="text-xl font-bold text-green-600">
                  ${item.applicationFees}
                </p>
              </div>
            </div>

            {/* Status + Button */}
            <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              {/* Status badge */}
              <span
                className={`badge px-4 py-3 text-sm 
                ${
                  item.paymentStatus === "paid"
                    ? "badge-success"
                    : "badge-warning"
                }`}
              >
                {item.paymentStatus === "paid" ? "Paid" : "Pending Payment"}
              </span>

              {/* Pay Now / Paid button */}
              {item.paymentStatus === "unpaid" ? (
                <Link
                  to={`/payment/confirm/${item.scholarshipId}`}
                  className="btn btn-primary w-full sm:w-auto"
                >
                  Pay Now
                </Link>
              ) : (
                <button className="btn btn-disabled w-full sm:w-auto">
                  Payment Completed
                </button>
              )}
            </div>

            {/* Transaction ID */}
            {item.transactionId && (
              <p className="text-xs text-gray-500 mt-4 break-all">
                Transaction ID: {item.transactionId}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentHistory;
