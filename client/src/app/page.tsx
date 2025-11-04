
export default function Home() {
  return (
    <div className="size-full min-h-screen bg-[#46d7b8] flex flex-col items-center justify-center relative">
      <div className="absolute top-20 text-2xl font-bold text-white">Learn Canto</div>

      {/* Login Card */}
      <div className="w-full max-w-sm bg-white shadow-md rounded-2xl p-8">
        <h2 className="text-xl font-semibold text-center mb-6">Login</h2>

        <form className="h-60 flex flex-col space-y-4">
          {/* Email Input */}
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            id="email"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focous:outline-none focus:ring-blue-500"
            required
          />

          {/* Password Input */}
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input
            type="password"
            id="password"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focous:outline-none focus:ring-blue-500"
            required
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-[50%] self-center bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition-colors mt-2"
          >
            Log In
          </button>

        </form>

        <div className="text-sm text-gray-600 text-center">
          <p>
            Don’t have an account?{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Sign up
            </a>
          </p>

          <a href="#" className="text-blue-500 hover:underline">Forgot Password?</a>
        </div>
      </div>
    </div>
  );
}
