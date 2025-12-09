import { useParams } from "react-router";
import { useAuth } from "../../hooks/useAuth";
import { getScholarshipDetails } from "../../api/scholarship-manager";
import { makePayment } from "../../api/payment";
import { useQuery } from "@tanstack/react-query";

const Payment = () => {
  const { id } = useParams();
  const { user } = useAuth();

  const { data: scholarship, isLoading } = useQuery({
    queryKey: ["scholarship-details", id],
    queryFn: () => getScholarshipDetails(user, id),
    enabled: !!user && !!id,
  });

  const handlePayment = async () => {
    if (!scholarship) return;

    const paymentInfo = {
      applicationFees: scholarship.applicationFees,
      scholarshipId: scholarship._id,
      scholarshipName: scholarship.scholarshipName,
      universityName: scholarship.universityName,
      userId: user.email,
    };

    const result = await makePayment(user, paymentInfo);
    window.location.href = result.url;
  };

  if (isLoading || !scholarship) {
    return (
      <div className="flex justify-center items-center min-h-[300px]">
        <span className="loading loading-infinity loading-xl"></span>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto mt-12 bg-base-100 shadow-xl rounded-2xl p-8 border border-gray-200">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Complete Your Payment
      </h2>

      <div className="space-y-5">
        {/* Scholarship Card */}
        <div className="bg-gray-50 p-5 rounded-xl border">
          <h3 className="text-lg font-bold">{scholarship.scholarshipName}</h3>
          <p className="text-gray-600 mt-1">{scholarship.universityName}</p>

          <div className="mt-4 flex items-center justify-between bg-white p-4 rounded-lg border">
            <span className="text-gray-700 font-medium">Application Fee</span>
            <span className="text-xl font-bold text-green-600">
              ${scholarship.applicationFees}
            </span>
          </div>
        </div>

        {/* Payment Button */}
        <button
          onClick={handlePayment}
          className="btn btn-primary btn-lg w-full text-white text-lg mt-4"
        >
          Proceed to Checkout
        </button>
      </div>

      <p className="text-center text-gray-500 text-sm mt-4">
        You will be redirected to a secure Stripe checkout page.
      </p>
    </div>
  );
};

export default Payment;
