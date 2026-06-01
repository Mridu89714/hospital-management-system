import { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";

function Doctors() {
  const [doctor, setDoctor] = useState({
    id: "",
    name: "",
    department: "",
    experience: "",
  });

  const [doctors, setDoctors] = useState([]);

  const handleAddDoctor = () => {
    // Prevent adding empty doctor
    if (
      !doctor.id ||
      !doctor.name ||
      !doctor.department ||
      !doctor.experience
    ) {
      alert("Please fill all fields");
      return;
    }

    setDoctors([...doctors, doctor]);

    // Clear form after adding
    setDoctor({
      id: "",
      name: "",
      department: "",
      experience: "",
    });
  };

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-6">
        Doctor Management
      </h1>

      {/* Add Doctor Form */}
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl font-bold mb-4">
          Add Doctor
        </h2>

        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Doctor ID"
            value={doctor.id}
            onChange={(e) =>
              setDoctor({
                ...doctor,
                id: e.target.value,
              })
            }
            className="border p-2 rounded"
          />

          <input
            type="text"
            placeholder="Doctor Name"
            value={doctor.name}
            onChange={(e) =>
              setDoctor({
                ...doctor,
                name: e.target.value,
              })
            }
            className="border p-2 rounded"
          />

          <input
            type="text"
            placeholder="Department"
            value={doctor.department}
            onChange={(e) =>
              setDoctor({
                ...doctor,
                department: e.target.value,
              })
            }
            className="border p-2 rounded"
          />

          <input
            type="text"
            placeholder="Experience"
            value={doctor.experience}
            onChange={(e) =>
              setDoctor({
                ...doctor,
                experience: e.target.value,
              })
            }
            className="border p-2 rounded"
          />
        </div>

        <button
          onClick={handleAddDoctor}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Doctor
        </button>
      </div>

      {/* Doctors Table */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">
          Doctors List
        </h2>

        {doctors.length === 0 ? (
          <p>No doctors added yet.</p>
        ) : (
          <table className="w-full border-collapse border">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">Doctor ID</th>
                <th className="border p-2">Name</th>
                <th className="border p-2">Department</th>
                <th className="border p-2">Experience</th>
              </tr>
            </thead>

            <tbody>
              {doctors.map((doc, index) => (
                <tr key={index}>
                  <td className="border p-2">{doc.id}</td>
                  <td className="border p-2">{doc.name}</td>
                  <td className="border p-2">{doc.department}</td>
                  <td className="border p-2">{doc.experience}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </DashboardLayout>
  );
}

export default Doctors;