import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useAuth } from "../../hooks/useAuth";



const PaymentSuccess = () => {
    const axiosSecure = useAxiosSecure();
    const [searchParams] = useSearchParams();
    const sessionId = searchParams.get("session_id");
    const { user } = useAuth();

    const [loading, setLoading] = useState(true);
    const [payment, setPayment] = useState(null);

    useEffect(() => {
    if (!sessionId || !user) return; // wait for user to load

    async function verifyPayment() {
        try {
        const res = await axiosSecure.get(`/payment/verify?session_id=${sessionId}`);
        setPayment(res.data);
        } catch (error) {
        console.error("Payment verification failed:", error);
        } finally {
        setLoading(false);
        }
    }

    verifyPayment();
    }, [sessionId, user, axiosSecure]);


    if (loading) {
        return (
        <div className="flex justify-center items-center min-h-[300px]">
            <span className="loading loading-infinity loading-xl"></span>
        </div>
        );
    }

    return (
        <div className="max-w-3xl mx-auto mt-12 p-6 bg-base-100 shadow-lg rounded-xl text-center">
        <h1 className="text-3xl font-bold text-green-600">Payment Successful</h1>

        <p className="mt-3 text-gray-700">
            Your payment has been completed successfully.  
            Thank you for your application!
        </p>


        {payment && (
        <div className="mt-6 p-4 border rounded-lg text-left bg-gray-50">
            <p><strong>Scholarship:</strong> {payment.scholarshipName}</p>
            <p><strong>University:</strong> {payment.universityName}</p>
            <p><strong>Amount Paid:</strong> ${payment.amount / 100}</p>

            <p className="break-all max-w-full text-sm">
            <strong>Transaction ID:</strong> {payment.sessionId}
            </p>

            <p><strong>Status:</strong> {payment.paymentStatus}</p>
        </div>
        )}

        <div className="mt-6 flex flex-col gap-3">
            <Link to="/dashboard" className="btn btn-primary w-full">
            Go to Dashboard
            </Link>

            <Link to="/payment-history" className="btn btn-outline w-full">
            Go to My Applications
            </Link>
        </div>
        </div>
    );
};

export default PaymentSuccess;
