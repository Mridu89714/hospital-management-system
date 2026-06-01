import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <div className="w-64 bg-blue-700 text-white min-h-screen p-5">
      <h1 className="text-2xl font-bold mb-8">
        HMS
      </h1>

      <ul className="space-y-4">
  <li>
    <Link to="/admin">Dashboard</Link>
  </li>


  <li>
    <Link to="/doctors">Doctors</Link>
  </li>

  <li>
  <Link to="/departments">
    Departments
  </Link>
</li>
  <li>
    <Link to="/patients">Patients</Link>
  </li>
  <li>
  <Link to="/appointments">
    Appointments
  </Link>
</li>
  <li>Billing</li>
</ul>
    </div>
  );
}

export default Sidebar;