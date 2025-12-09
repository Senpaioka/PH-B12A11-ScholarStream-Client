import { useState, useEffect } from "react";
import { Link, useParams } from "react-router";
import { useAuth } from "../../hooks/useAuth";
import {getScholarshipDetails} from '../../api/scholarship-manager';


function ScholarshipDetails() {

    const {id} = useParams();
    const {user} = useAuth();
    const [scholarship, setScholarship] = useState(null);
    
    useEffect(() => {
    async function fetchingPropertyDetails(){
      if (!user) return;
      try {
        const data = await getScholarshipDetails(user, id);
        setScholarship(data);
      } catch(error) {
        console.error('Error fetching scholarship details', error);
      }
    }
    fetchingPropertyDetails();
  },[user, id]);


    if (!scholarship) return null;

    return (
        <div className="max-w-5xl mx-auto p-6 my-12 bg-base-100 rounded-xl shadow-lg">
        {/* University Image */}
        <div className="w-full h-64 md:h-96 overflow-hidden rounded-lg">
            <img
            src={scholarship.universityImage}
            alt={scholarship.universityName}
            className="w-full h-full object-cover"
            />
        </div>

        {/* Basic Info */}
        <div className="mt-6 md:flex md:justify-between md:items-start gap-6">
            <div className="flex-1">
            <h1 className="text-3xl font-bold">{scholarship.scholarshipName}</h1>
            <h2 className="text-xl text-gray-600 mt-1">{scholarship.universityName}</h2>
            <p className="text-gray-500 mt-1">
                {scholarship.universityCity}, {scholarship.universityCountry}
            </p>
            <p className="text-gray-500 mt-1">World Rank: {scholarship.universityWorldRank}</p>
            <p className="badge badge-primary mt-2">{scholarship.scholarshipCategory}</p>
            {/* <p className="text-gray-500 mt-1">Updated at: {scholarship.universityWorldRank}</p> */}
            <p className="text-gray-500 mt-3"> @Updated: {new Date(scholarship.scholarshipPostDate).toLocaleDateString()}</p>
            </div>

            <div className="flex-1 mt-4 md:mt-0">
            <div className="grid grid-cols-2 gap-4 text-gray-700">
                <div>
                <p className="font-semibold">Subject:</p>
                <p>{scholarship.subjectCategory}</p>
                </div>
                <div>
                <p className="font-semibold">Degree:</p>
                <p>{scholarship.degree}</p>
                </div>
                <div>
                <p className="font-semibold">Tuition Fees:</p>
                <p>${scholarship.tuitionFees?.toLocaleString()}</p>
                </div>
                <div>
                <p className="font-semibold">Application Fees:</p>
                <p>${scholarship.applicationFees?.toLocaleString()}</p>
                </div>
                <div>
                <p className="font-semibold">Service Charge:</p>
                <p>${scholarship.serviceCharge?.toLocaleString()}</p>
                </div>
                <div>
                <p className="font-semibold">Deadline:</p>
                <p>{new Date(scholarship.applicationDeadline).toLocaleDateString()}</p>
                </div>
                <div>
                <p className="font-semibold">Posted By:</p>
                <p>{scholarship.postedUserEmail}</p>
                </div>
                <div>
                <p className="font-semibold">Posted Date:</p>
                <p>{new Date(scholarship.scholarshipPostDate).toLocaleDateString()}</p>
                </div>
            </div>
            </div>
        </div>

        {/* Description / Action */}
        <div className="mt-6 flex flex-col md:flex-row gap-4 items-center">
            <button className="btn btn-primary w-full md:w-auto text-white">Apply Now</button>
            <button className="btn btn-outline w-full md:w-auto">Give Ratings</button>
        </div>
        </div>
    );
}


export default ScholarshipDetails;