import logo from "../../../assets/logo.webp";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../provider/AuthProvider";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";

const SignIn = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathnam || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => {
        signIn(data.email, data.password);
        resolve();
      });

      const user = signIn(data.email, data.password);
      console.log(user);

      Swal.fire({
        icon: "success",
        title: "Login successful",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate(from, { replace: true });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="min-h-screen text-gray-900 flex justify-center bg-red-200">
        <div
          className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1"
          style={{
            backgroundImage:
              "linear-gradient(to top, #a8edea 0%, #fed6e3 100%)",
          }}
        >
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-8">
            <div>
              <img src={logo} className="mx-auto md:w-[65%] w-[35%]" />
            </div>
            <div className="md:mt-12 flex flex-col items-center">
              <div className="w-full flex-1 mt-8">
                <div className="flex flex-col items-center">
                  <button className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-[#a8edea] text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                    <SocialLogin></SocialLogin>
                    <span className="ml-4">Sign In with Google</span>
                  </button>
                </div>

                <div className="my-6 md:my-10 border-b-2 pb-2 text-center">
                  <div className="leading-none px-2 inline-block text-sm text-gray-800 tracking-wide font-medium transform translate-y-1/2">
                    Or sign In with E-mail
                  </div>
                </div>

                <div className="mx-auto max-w-xs">
                  <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="form-control">
                      <input
                        type="email"
                        {...register("email", { required: true })}
                        name="email"
                        placeholder="email"
                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                      />
                      {errors.email && (
                        <span className="text-red-600 py-1 ps-1 font-semibold ">
                          Wrong Email
                        </span>
                      )}
                    </div>
                    <div className="form-control">
                      <input
                        type="password"
                        {...register("password", { required: true })}
                        name="password"
                        placeholder="password"
                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                      />
                      {errors.password && (
                        <span className="text-red-600 py-1 ps-1 font-semibold ">
                          Wrong Password
                        </span>
                      )}
                    </div>
                    <div className="form-control">
                      <button className="mt-4 tracking-wide font-semibold bg-[#71c5c1] text-white-500 w-full py-4 rounded-lg hover:bg-[#428884] transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                        <svg
                          className="w-6 h-6 -ml-2"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                          <circle cx="8.5" cy="7" r="4" />
                          <path d="M20 8v6M23 11h-6" />
                        </svg>
                        <span className="ml-">Sign In</span>
                      </button>

                      <label className="label flex justify-between">
                        <Link href="#" className="label-text-alt pt-4">
                          Forgot password?
                        </Link>

                        <Link
                          to="/register"
                          className="label-text-alt pt-4"
                        >
                          Register
                        </Link>
                      </label>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-[#fed6e3] text-center hidden lg:flex rounded-lg">
            <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat bg-[url('https://i.ibb.co/zSGZyJc/SignUp.webp')]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
