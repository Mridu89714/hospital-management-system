import DashboardLayout from "../layouts/DashboardLayout";

function AdminDashboard() {
  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-8">
        Admin Dashboard
      </h1>

      <div className="grid grid-cols-4 gap-6">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-gray-500">
            Total Patients
          </h2>
          <p className="text-3xl font-bold">
            120
          </p>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-gray-500">
            Total Doctors
          </h2>
          <p className="text-3xl font-bold">
            25
          </p>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-gray-500">
            Today's Appointments
          </h2>
          <p className="text-3xl font-bold">
            45
          </p>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-gray-500">
            Revenue
          </h2>
          <p className="text-3xl font-bold">
            ₹50,000
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default AdminDashboard;