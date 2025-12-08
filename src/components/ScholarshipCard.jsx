
function ScholarshipCard({ scholarship, onViewDetails }) {
  const {
    universityImage,
    universityName,
    scholarshipCategory,
    universityCountry,
    universityCity,
    applicationFees,
  } = scholarship;

  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
      
      {/* Image */}
      <figure className="w-full h-48 overflow-hidden">
        <img
          src={universityImage}
          alt={universityName}
          className="w-full h-full object-cover"
        />
      </figure>

      {/* Body */}
      <div className="card-body space-y-2">

        {/* University Name */}
        <h2 className="card-title text-lg font-bold">
          {universityName}
        </h2>

        {/* Scholarship Category */}
        <p className="badge badge-primary badge-outline py-2 px-3 text-sm">
          {scholarshipCategory}
        </p>

        {/* Location */}
        <p className="text-sm text-gray-600">
          <span className="font-medium">Location:</span> {universityCity}, {universityCountry}
        </p>

        {/* Application Fees */}
        <p className="text-sm">
          <span className="font-medium">Application Fees:</span>{" "}
          {applicationFees ? `$${applicationFees}` : "No Fees"}
        </p>

        {/* Button */}
        <div className="card-actions mt-4">
          <button className="btn btn-outline btn-primary w-full" onClick={onViewDetails}>View Details</button>
        </div>
      </div>
    </div>
  );
}


export default ScholarshipCard;