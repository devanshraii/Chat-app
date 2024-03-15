import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useLogin from "../hooks/useLogin";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { loading, login } = useLogin();

  const onSubmit = async (data) => {
    await login(data);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-90 mx-auto w-[400px] border-t-2 border-r-2 rounded-lg">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-800 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-[20%]">
        <h1 className="text-3xl font-semibold text-center text-gray-300 mb-5">
          Login
          <span className="text-[#005c4b]"> ChatApp</span>
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-white">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
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
          <Link
            to="/signup"
            className="text-sm hover:underline hover:text-blue-600 mt-4 mb-2 inline-block">
            {"Don't have and account?"}
          </Link>
          <div>
            <button
              className="w-full py-2.5 font-bold rounded-md mt-2 bg-[#005c4b] text-white hover:bg-[#2c3337]"
              type="submit">
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
