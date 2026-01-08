import { Link } from "react-router";

function ScholarshipCard({ scholarship }) {
  const {
    universityImage,
    universityName,
    scholarshipName,
    scholarshipCategory,
    universityCountry,
    universityCity,
    applicationFees,
    degree,
    tuitionFees,
  } = scholarship;

  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 border border-base-200 hover:border-primary/20 group overflow-hidden">
      
      {/* Image with Overlay */}
      <figure className="relative w-full h-48 overflow-hidden">
        <img
          src={universityImage}
          alt={universityName}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <div className="badge badge-primary badge-lg shadow-lg">
            {scholarshipCategory}
          </div>
        </div>

        {/* Application Fee Badge */}
        <div className="absolute top-4 right-4">
          <div className={`badge badge-lg shadow-lg ${applicationFees && applicationFees !== "0" ? 'badge-warning' : 'badge-success'}`}>
            {applicationFees && applicationFees !== "0" ? `$${applicationFees}` : 'Free'}
          </div>
        </div>
      </figure>

      {/* Body */}
      <div className="card-body p-6 space-y-4">

        {/* University Name */}
        <div>
          <h2 className="card-title text-xl font-bold text-gray-500 mb-1 line-clamp-2">
            {universityName}
          </h2>
          {scholarshipName && (
            <p className="text-sm text-primary font-medium">
              {scholarshipName}
            </p>
          )}
        </div>

        {/* Details Grid */}
        <div className="space-y-3">
          {/* Location */}
          <div className="flex items-center gap-2 text-sm">
            <div className="p-1.5 bg-gray-100 rounded-lg">
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </div>
            <span className="text-gray-600">
              <span className="font-medium">{universityCity}</span>, {universityCountry}
            </span>
          </div>

          {/* Degree */}
          {degree && (
            <div className="flex items-center gap-2 text-sm">
              <div className="p-1.5 bg-gray-100 rounded-lg">
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                </svg>
              </div>
              <span className="text-gray-600">
                <span className="font-medium">Degree:</span> {degree}
              </span>
            </div>
          )}

          {/* Tuition Fees */}
          {tuitionFees && (
            <div className="flex items-center gap-2 text-sm">
              <div className="p-1.5 bg-gray-100 rounded-lg">
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
                </svg>
              </div>
              <span className="text-gray-600">
                <span className="font-medium">Tuition:</span> ${tuitionFees}
              </span>
            </div>
          )}
        </div>

        {/* Action Button */}
        <div className="card-actions pt-4">
          <Link 
            to={`/scholarship/details/${scholarship._id}`} 
            className="btn btn-primary w-full group-hover:btn-primary hover:shadow-lg transition-all duration-200"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
            </svg>
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}


export default ScholarshipCard;