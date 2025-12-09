import { Link } from "react-router";

const PaymentFailed = () => {
  return (
    <div className="max-w-3xl mx-auto mt-12 p-6 bg-base-100 shadow-lg rounded-xl text-center">
      <h1 className="text-3xl font-bold text-red-600">Payment Failed</h1>

      <p className="mt-3 text-gray-700">
        Unfortunately, your payment could not be processed.  
        This may happen if the payment window was closed, the card was declined, or the session expired.
      </p>

      <div className="mt-6 p-4 border border-red-300 rounded-lg bg-red-50 text-left">
        <p className="font-semibold text-red-600">Possible Causes:</p>
        <ul className="list-disc ml-5 text-gray-700 mt-2 space-y-1">
          <li>Payment interrupted before completion</li>
          <li>Invalid or declined payment method</li>
          <li>Expired checkout session</li>
          <li>Network or Stripe-related errors</li>
        </ul>
      </div>

      <div className="mt-6 flex flex-col gap-3">
        <Link to="/payment-history" className="btn btn-primary w-full">
          Go to My Applications
        </Link>

        <Link to="/" className="btn btn-outline w-full">
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default PaymentFailed;
