export default function Dashboard() {
  return (
    <div className="mt-6">
      <h1 className="text-3xl font-bold text-green-700">Dashboard</h1>
      <p className="mt-2 text-gray-600">
        Welcome to SmartGrow! Your devices will appear here.
      </p>

      <div className="mt-6 p-4 bg-white shadow rounded-xl">
        <p className="text-gray-700">No devices connected yet.</p>
      </div>
    </div>
  );
}
