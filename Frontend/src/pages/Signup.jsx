import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import useSignup from "../hooks/useSignup.js";

const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { loading, signup } = useSignup();

  const onSubmit = async (data) => {
    try {
      await signup(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-800 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-[20%]">
        <h1 className="text-3xl font-semibold text-center text-gray-300 mb-5">
          Sign Up
          <span className="text-[#005c4b]"> ChatApp</span>
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-white">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full input input-bordered h-10"
              {...register("fullname", { required: true })}
            />
            {errors.fullname && (
              <p className="text-red-500">{"Full name required"}</p>
            )}
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-white">Username</span>
            </label>
            <input
              type="text"
              placeholder="johndoe123"
              className="w-full input input-bordered h-10"
              {...register("username", { required: true, minLength: 3 })}
            />
            {errors.username && (
              <p className="text-red-500">
                {"Username must be atleast 3 characters"}
              </p>
            )}
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-white">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
              {...register("password", { required: true, minLength: 6 })}
            />
            {errors.password && (
              <p className="text-red-500">{"Password too short"}</p>
            )}
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-white">
                Confirm Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full input input-bordered h-10"
              {...register("confirmPassword", {
                required: true,
                minLength: [6, "Password too short"],
                validate: (value) =>
                  value === watch("password") || "Passwords do not match",
              })}
            />
            {errors.confirmPassword && (
              <p className="text-red-500">{errors.confirmPassword.message}</p>
            )}
          </div>
          <div className="flex gap-2 my-4 flex-col">
            <div className="form-control">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  className="border-white radio"
                  {...register("gender", {
                    required: "Please select a gender",
                  })}
                />
                <span className="label-text">Male</span>
              </label>
            </div>
            <div>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  className="border-white radio"
                  {...register("gender", {
                    required: "Please select a gender",
                  })}
                />
                <span className="label-text">Female</span>
              </label>
            </div>
            {errors.gender && (
              <p className="text-red-500">{errors.gender.message}</p>
            )}
          </div>
          <Link
            to="/login"
            className="text-sm hover:underline hover:text-blue-600 inline-block">
            {"Already have and account?"}
          </Link>
          <div>
            <button className="w-full py-2.5 font-bold rounded-md mt-2 bg-[#005c4b] text-white hover:bg-[#2c3337]">
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
