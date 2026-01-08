import { useParams } from "react-router";
import { useAuth } from "../../hooks/useAuth";
import { getScholarshipDetails } from "../../api/scholarship-manager";
import { makePayment, savePayment } from "../../api/payment";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../../components/Spinner";

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

    const savePaymentInfo = {
      scholarshipId: scholarship._id,
      applicationFees: scholarship.applicationFees,
      scholarshipName: scholarship.scholarshipName,
      universityName: scholarship.universityName,
      scholarshipCategory: scholarship.scholarshipCategory,
      degree: scholarship.degree,
      serviceCharge: scholarship.serviceCharge,
      applicationStatus: "pending",
      paymentStatus: "unpaid",
      userName: user.displayName,
      userEmail: user.email,
      feedback: null,
    };

    await savePayment(user, savePaymentInfo);

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
      <Spinner></Spinner>
    );
  }

  return (
    <div className="max-w-xl mx-auto mt-12 bg-base-100 shadow-xl rounded-2xl p-8 border border-base-300">
      <h2 className="text-2xl font-semibold text-center mb-6 text-base-content">
        Complete Your Payment
      </h2>

      <div className="space-y-5">
        {/* Scholarship Card */}
        <div className="bg-base-200 p-5 rounded-xl border border-base-300">
          <h3 className="text-lg font-bold text-base-content">{scholarship.scholarshipName}</h3>
          <p className="text-base-content/70 mt-1">{scholarship.universityName}</p>

          <div className="mt-4 flex items-center justify-between bg-base-100 p-4 rounded-lg border border-base-300">
            <span className="text-base-content font-medium">Application Fee</span>
            <span className="text-xl font-bold text-success">
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

      <p className="text-center text-base-content/60 text-sm mt-4">
        You will be redirected to a secure Stripe checkout page.
      </p>
    </div>
  );
};

export default Payment;
