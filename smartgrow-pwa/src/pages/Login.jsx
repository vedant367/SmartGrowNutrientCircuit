export default function Login() {
  return (
    <div className="max-w-md mx-auto bg-white p-6 mt-10 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-4 text-center text-green-600">
        Login to SmartGrow
      </h2>

      <form className="space-y-4">
        <div>
          <label className="block mb-1 text-sm">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full p-2 border rounded-lg focus:outline-green-600"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm">Password</label>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full p-2 border rounded-lg focus:outline-green-600"
          />
        </div>

        <button
          type="button"
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}
