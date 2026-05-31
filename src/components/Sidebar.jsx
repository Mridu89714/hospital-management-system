function Sidebar() {
  return (
    <div className="w-64 bg-blue-700 text-white min-h-screen p-5">
      <h1 className="text-2xl font-bold mb-8">
        HMS
      </h1>

      <ul className="space-y-4">
        <li>Dashboard</li>
        <li>Doctors</li>
        <li>Patients</li>
        <li>Appointments</li>
        <li>Billing</li>
      </ul>
    </div>
  );
}

export default Sidebar;