import { useForm } from "react-hook-form";
import {useAuth} from '../../hooks/useAuth';
import { useEffect } from "react";
import useUserRole from "../../hooks/useUserRole";
import {createScholarship} from '../../api/scholarship-manager';
import Swal from 'sweetalert2'


function ScholarshipForm() {

  const {user} = useAuth();  
  const {role, roleLoading} = useUserRole();

  const {register, handleSubmit, setValue,formState: { errors }, reset} = useForm();


  useEffect(() => {
    if (user?.email) {
      setValue("postedUserEmail", user.email);
    }
  }, [user, setValue]);


  const onSubmit = async(data) => {
    try {
        if(roleLoading) return;
        await createScholarship(user, data, role);
        reset();

        Swal.fire({
          title: "Success!!",
          text: "Scholarship Posted",
          icon: "success"
        });

    }catch(error) {
      console.log(error);

       Swal.fire({
          title: "Failed!!",
          text: "Only Admin Can Post",
          icon: "error"
        });
    }
  
  };

  return (
    <div className="min-h-screen bg-base-200 p-6 flex justify-center items-center">
      <div className="w-full max-w-4xl bg-base-100 shadow-xl rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center mb-8">Publish Scholarship</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Scholarship Name */}
          <div className="form-control">
            <label className="label font-medium">Scholarship Name</label>
            <input
              type="text"
              {...register("scholarshipName", { required: "Required" })}
              className="input input-bordered w-full"
            />
            {errors.scholarshipName && (
              <p className="text-red-500 text-sm">{errors.scholarshipName.message}</p>
            )}
          </div>

          {/* University Name */}
          <div className="form-control">
            <label className="label font-medium">University Name</label>
            <input
              type="text"
              {...register("universityName", { required: "Required" })}
              className="input input-bordered w-full"
            />
            {errors.universityName && (
              <p className="text-red-500 text-sm">{errors.universityName.message}</p>
            )}
          </div>

          {/* University Image */}
          <div className="form-control md:col-span-2">
            <label className="label font-medium">University Image URL</label>
            <input
              type="url"
              {...register("universityImage", { required: "Required" })}
              className="input input-bordered w-full"
            />
            {errors.universityImage && (
              <p className="text-red-500 text-sm">{errors.universityImage.message}</p>
            )}
          </div>

          {/* Country */}
          <div className="form-control">
            <label className="label font-medium">Country</label>
            <input
              type="text"
              {...register("universityCountry", { required: "Required" })}
              className="input input-bordered w-full"
            />
            {errors.universityCountry && (
              <p className="text-red-500 text-sm">{errors.universityCountry.message}</p>
            )}
          </div>

          {/* City */}
          <div className="form-control">
            <label className="label font-medium">City</label>
            <input
              type="text"
              {...register("universityCity", { required: "Required" })}
              className="input input-bordered w-full"
            />
            {errors.universityCity && (
              <p className="text-red-500 text-sm">{errors.universityCity.message}</p>
            )}
          </div>

          {/* World Rank */}
          <div className="form-control">
            <label className="label font-medium">University World Rank</label>
            <input
              type="number"
              {...register("universityWorldRank", { required: "Required" })}
              className="input input-bordered w-full"
            />
            {errors.universityWorldRank && (
              <p className="text-red-500 text-sm">{errors.universityWorldRank.message}</p>
            )}
          </div>

          {/* Subject Category */}
          <div className="form-control">
            <label className="label font-medium">Subject Category</label>
            <input
              type="text"
              {...register("subjectCategory", { required: "Required" })}
              className="input input-bordered w-full"
            />
            {errors.subjectCategory && (
              <p className="text-red-500 text-sm">{errors.subjectCategory.message}</p>
            )}
          </div>

          {/* Scholarship Category */}
          <div className="form-control">
            <label className="label font-medium">Scholarship Category</label>
            <select
              {...register("scholarshipCategory", { required: "Required" })}
              className="select select-bordered w-full"
            >
              <option value="">Select One</option>
              <option value="Full fund">Full Fund</option>
              <option value="Partial">Partial</option>
              <option value="Self-fund">Self Fund</option>
            </select>
            {errors.scholarshipCategory && (
              <p className="text-red-500 text-sm">{errors.scholarshipCategory.message}</p>
            )}
          </div>

          {/* Degree */}
          <div className="form-control">
            <label className="label font-medium">Degree</label>
            <select
              {...register("degree", { required: "Required" })}
              className="select select-bordered w-full"
            >
              <option value="">Select Degree</option>
              <option value="Diploma">Diploma</option>
              <option value="Bachelor">Bachelor</option>
              <option value="Masters">Masters</option>
              <option value="Masters">PhD</option>
            </select>
            {errors.degree && (
              <p className="text-red-500 text-sm">{errors.degree.message}</p>
            )}
          </div>

          {/* Tuition Fees (optional) */}
          <div className="form-control">
            <label className="label font-medium">Tuition Fees (Optional)</label>
            <input
              type="number"
              {...register("tuitionFees")}
              className="input input-bordered w-full"
            />
          </div>

          {/* Application Fees */}
          <div className="form-control">
            <label className="label font-medium">Application Fees</label>
            <input
              type="number"
              {...register("applicationFees", { required: "Required" })}
              className="input input-bordered w-full"
            />
            {errors.applicationFees && (
              <p className="text-red-500 text-sm">{errors.applicationFees.message}</p>
            )}
          </div>

          {/* Service Charge */}
          <div className="form-control">
            <label className="label font-medium">Service Charge</label>
            <input
              type="number"
              {...register("serviceCharge", { required: "Required" })}
              className="input input-bordered w-full"
            />
            {errors.serviceCharge && (
              <p className="text-red-500 text-sm">{errors.serviceCharge.message}</p>
            )}
          </div>

          {/* Application Deadline */}
          <div className="form-control">
            <label className="label font-medium">Application Deadline</label>
            <input
              type="date"
              {...register("applicationDeadline", { required: "Required" })}
              className="input input-bordered w-full"
            />
            {errors.applicationDeadline && (
              <p className="text-red-500 text-sm">{errors.applicationDeadline.message}</p>
            )}
          </div>

          {/* Scholarship Post Date */}
          {/* <div className="form-control">
            <label className="label font-medium">Scholarship Post Date</label>
            <input
              type="date"
              {...register("scholarshipPostDate", { required: "Required" })}
              className="input input-bordered w-full"
            />
            {errors.scholarshipPostDate && (
              <p className="text-red-500 text-sm">{errors.scholarshipPostDate.message}</p>
            )}
          </div> */}

          {/* Posted User Email */}
          <div className="form-control md:col-span-2">
            <label className="label font-medium">Posted User Email</label>

            <input
              type="email"
              readOnly
              {...register("postedUserEmail", { required: "Required" })}
              className="input input-bordered w-full bg-base-200 cursor-not-allowed"
            />

            {errors.postedUserEmail && (
              <p className="text-red-500 text-sm">{errors.postedUserEmail.message}</p>
            )}
          </div>

          <div className="md:col-span-2 mt-4">
            <button className="btn btn-primary w-full text-white">Publish</button>
          </div>
        </form>
      </div>
    </div>
  );
}


export default ScholarshipForm;