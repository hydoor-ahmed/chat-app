const Login = () => {
  return (
    <div className="px-4">
      <div className="container flex justify-center items-center h-screen">
        <div className="shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 px-2 py-8 rounded-lg w-[450px] flex flex-col justify-center items-center">
          <h1 className="font-bold text-xl md:text-2xl mb-8 text-white">
            <span className="text-blue-500">404Chat</span> Login
          </h1>
          <form className="text-center">
            <input
              type="text"
              placeholder="Username"
              className="input input-bordered w-full max-w-sm input-sm md:input-md"
            />
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered w-full max-w-sm mt-4 input-sm md:input-md"
            />
            <div className="flex flex-col mt-4">
            <a className="link link-hover text-sm">Don't have an account?</a>
            <button className="btn btn-sm md:btn-md btn-neutral text-white mt-4 shadow-slate-900 shadow-sm w-1/4 mx-auto">
              Login
            </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
