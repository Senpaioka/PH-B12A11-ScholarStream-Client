import { Link } from "react-router";
import { FaExclamationTriangle, FaHome } from "react-icons/fa";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Card */}
        <div className="card bg-base-100 shadow-2xl rounded-2xl p-8 md:p-12">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-error/10 flex items-center justify-center">
              <FaExclamationTriangle className="text-error text-4xl" />
            </div>
          </div>

          {/* Error Code */}
          <h1 className="text-7xl font-extrabold text-error mb-4">404</h1>

          {/* Message */}
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Page Not Found
          </h2>
          <p className="text-base-content/70 mb-8 max-w-md mx-auto">
            Sorry, the page you are looking for doesn’t exist or has been moved.
            Please check the URL or return to the homepage.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/" className="btn btn-primary gap-2">
              <FaHome />
              Back to Home
            </Link>

            <Link to="/dashboard" className="btn btn-outline">
              Go to Dashboard
            </Link>
          </div>
        </div>

        {/* Footer Text */}
        <p className="mt-6 text-sm text-base-content/50">
          © {new Date().getFullYear()} ScholarStream. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
