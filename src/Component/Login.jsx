import { FcGoogle } from "react-icons/fc";
import { BsFacebook, BsGithub, BsFillPersonPlusFill } from "react-icons/bs";
const Login = ({Google, Github, FaceBook}) => {
  return (
    <section className="bg-[#d0aaff]">
      <div className="">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="/"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900"
          >
            <BsFillPersonPlusFill className="mx-3 h-8 w-8 text- " />
            Code Clause Login
          </a>
          <div className="w-full rounded-lg  md:mt-0 sm:max-w-md xl:p-0 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] bg-[#b9f68e]">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 font-medium text-gray-900 "
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 "
                    placeholder="name@company.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 font-medium text-gray-900 "
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="  text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 "
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded focus:ring-3 focus:ring-primary-300 "
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="remember" className="text-gray-900">
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href="/"
                    className="text-sm font-medium text-primary-600 hover:underline"
                  >
                    Forgot password?
                  </a>
                </div>
                <div className="flex items-center justify-center text-xl font-bold">
                  <h1>Continue with...</h1>
                </div>
                <div className="flex flex-row justify-around items-center">
                  <button onClick={Google}>
                    <FcGoogle className="h-10 w-10 rounded-full" />
                  </button>
                  <button onClick={FaceBook}>
                    {" "}
                    <BsFacebook className="h-10 w-10 text-blue-700" />
                  </button>
                  <button  onClick={Github}>
                    {" "}
                    <BsGithub className="h-10 w-10"/>
                  </button>
                </div>
                <div className="flex items-center justify-center">
                  <button
                    type="submit"
                    className=" items-center text-white  font-medium rounded-full text-xl bg-blue-800 px-7 py-3"
                  >
                    Sign in
                  </button>
                </div>
                <p className="text-gray-900 ">
                  Don’t have an account yet?{" "}
                  <a
                    href="/"
                    className="font-medium text-primary-600 hover:underline"
                  >
                    Sign up
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
