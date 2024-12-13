import GenderCheckbox from "./GenderCheckbox";

const Signup = () => {
  return (
    <div className="px-4">
      <div className="container flex justify-center items-center h-screen">
        <div className="shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 px-2 py-8 rounded-lg w-[450px] flex flex-col justify-center items-center">
          <h1 className="font-bold text-xl md:text-2xl mb-8 text-white">
            <span className="text-blue-500">404Chat</span> Sign up
          </h1>
          <form className="text-center">
            <input
              required
              type="text"
              placeholder="Full Name"
              className="input input-bordered w-full max-w-sm input-sm md:input-md"
            />
            <input
              required
              type="text"
              placeholder="Username"
              className="input input-bordered w-full max-w-sm input-sm md:input-md mt-4"
            />
            <input
              required
              type="password"
              placeholder="Password"
              className="input input-bordered w-full max-w-sm mt-4 input-sm md:input-md"
            />
            <input
              required
              type="password"
              placeholder="Confirm Password"
              className="input input-bordered w-full max-w-sm mt-4 input-sm md:input-md"
            />
            <GenderCheckbox />
            <div className="flex flex-col mt-4">
              <a className="link link-hover text-sm">
                Already have an account?
              </a>
              <button className="btn btn-sm md:btn-md btn-neutral text-white mt-4 shadow-slate-900 shadow-sm w-1/4 mx-auto">
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
