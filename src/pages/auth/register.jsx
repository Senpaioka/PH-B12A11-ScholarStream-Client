import { useForm } from "react-hook-form";
import {Link, useNavigate, useLocation} from 'react-router';
import {useAuth} from '../../hooks/useAuth';
import { useState } from "react";
import {createUser} from '../../api/user-manager';
import {auth} from '../../firebase/firebase.config';


export default function RegisterPage() {
  
  const { register, handleSubmit, formState: { errors }, reset} = useForm();
  const {authenticateWithGoogle, registerWithEmailAndPassword, logoutUser} = useAuth();
  const [isError, setIsError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();


  // gmail authentication
  async function registerWithGoogle() {
    setIsError('');
    try {
      const result = await authenticateWithGoogle();
      if(result?.user) {
        await createUser(result.user);      
        navigate(location.state || '/');
      }
    }
    catch (error) {
      setIsError(error.message);
      console.log(error);
    }
  }

  

  const onSubmit = async(data) => {
    // Handle registration logic here
    const { name, photoURL, email, password } = data;
       
    try {
        await registerWithEmailAndPassword(name, photoURL, email, password);
        
        const user = auth.currentUser;

        if(user) {
          await createUser(user);
        }
        
        reset();
        logoutUser();
        navigate('/login'); 

    }catch(error) {
      setIsError(error.message);
      console.log(error);
    }
  };


  return (

    <div className="min-h-screen flex items-center justify-center bg-base-200 p-6">
      <div className="card w-full max-w-md shadow-xl bg-base-100 p-8">

        <h2 className="text-3xl font-bold mb-6 text-center">Registration</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Name</span>
            </label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="input input-bordered w-full"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Photo URL */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Photo URL</span>
            </label>
            <input
              type="url"
              {...register("photoURL", { required: "Photo URL is required" })}
              className="input input-bordered w-full"
            />
            {errors.photoURL && (
              <p className="text-red-500 text-sm mt-1">{errors.photoURL.message}</p>
            )}
          </div>

          {/* Email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Email</span>
            </label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="input input-bordered w-full"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                validate: (value) => {
                  const hasUpper = /[A-Z]/.test(value);
                  const hasLower = /[a-z]/.test(value);
                  const hasSpecial = /[^A-Za-z0-9]/.test(value);
                  const hasLength = value.length >= 6;

                  if (!hasUpper) return "Must include uppercase letter";
                  if (!hasLower) return "Must include lowercase letter";
                  if (!hasSpecial) return "Must include a special character";
                  if (!hasLength) return "Must be at least 6 characters long";
                  return true;
                },
              })}
              className="input input-bordered w-full"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          <button type="submit" className="btn btn-primary w-full text-white">
            Register
          </button>
        </form>

            {/* divider  */}
            <div className="text-center mt-6">
                <div className="divider">Or</div>

                {/* Google Register */}
                 <button onClick={registerWithGoogle} className="btn bg-white text-black border border-[#e5e5e5] w-full flex items-center justify-center gap-2">
                  <svg
                    aria-label="Google logo"
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <g>
                      <path d="m0 0H512V512H0" fill="#fff"></path>
                      <path
                        fill="#34a853"
                        d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                      ></path>
                      <path
                        fill="#4285f4"
                        d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                      ></path>
                      <path
                        fill="#fbbc02"
                        d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                      ></path>
                      <path
                        fill="#ea4335"
                        d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                      ></path>
                    </g>
                  </svg>
                  Register with Google
                </button>
              </div>

                {/* Footer Links */}
            <p className="text-center text-base mt-6">
              Already have an account?{" "}
              <Link to="/login" className="text-primary font-semibold">
                Login
              </Link>
            </p>


             <p className="text-base text-red-500 text-center p-3">{isError}</p>

        </div>
      </div>

  );        
  }
