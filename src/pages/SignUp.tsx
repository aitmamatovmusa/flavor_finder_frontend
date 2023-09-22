function SignUp() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/3">
        <h1 className="text-2xl mb-4 text-center">Create an Account</h1>
        <form className="space-y-4">
          <label
            htmlFor="username"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Username
            <input
              type="text"
              id="username"
              className="font-normal border rounded py-2 px-3 w-full focus:outline-none focus:shadow-outline mt-1"
              placeholder="Enter your username"
            />
          </label>

          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Password
            <input
              type="password"
              id="password"
              className="font-normal border rounded py-2 px-3 w-full focus:outline-none focus:shadow-outline mt-1"
              placeholder="Enter your password"
            />
          </label>

          <label
            htmlFor="repeatPassword"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Repeat Password
            <input
              type="password"
              id="repeatPassword"
              className="font-normal border rounded py-2 px-3 w-full focus:outline-none focus:shadow-outline mt-1"
              placeholder="Repeat your password"
            />
          </label>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded w-full focus:outline-none focus:shadow-outline"
          >
            Sign Up
          </button>
        </form>
        <div className="mt-4 text-center">
          <p>Already have an account?</p>
          <button type="button" className="text-blue-500">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
