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
  const [editIndex, setEditIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Add Doctor
  const handleAddDoctor = () => {
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

    setDoctor({
      id: "",
      name: "",
      department: "",
      experience: "",
    });
  };

  // Delete Doctor
  const handleDeleteDoctor = (indexToDelete) => {
    const updatedDoctors = doctors.filter(
      (_, index) => index !== indexToDelete
    );

    setDoctors(updatedDoctors);

    if (editIndex === indexToDelete) {
      setEditIndex(null);

      setDoctor({
        id: "",
        name: "",
        department: "",
        experience: "",
      });
    }
  };

  // Edit Doctor
  const handleEditDoctor = (index) => {
    setDoctor(doctors[index]);
    setEditIndex(index);
  };

  // Update Doctor
  const handleUpdateDoctor = () => {
    const updatedDoctors = [...doctors];

    updatedDoctors[editIndex] = doctor;

    setDoctors(updatedDoctors);

    setDoctor({
      id: "",
      name: "",
      department: "",
      experience: "",
    });

    setEditIndex(null);
  };

  // Search Filter
  const filteredDoctors = doctors.filter(
    (doc) =>
      doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-6">
        Doctor Management
      </h1>

      {/* Add / Update Doctor Form */}
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl font-bold mb-4">
          {editIndex !== null
            ? "Update Doctor"
            : "Add Doctor"}
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
          onClick={
            editIndex !== null
              ? handleUpdateDoctor
              : handleAddDoctor
          }
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {editIndex !== null
            ? "Update Doctor"
            : "Add Doctor"}
        </button>
      </div>

      {/* Search Box */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <input
          type="text"
          placeholder="Search by Name or Department"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 rounded w-full"
        />
      </div>

      {/* Doctors Table */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">
          Doctors List
        </h2>

        {filteredDoctors.length === 0 ? (
          <p>No doctors found.</p>
        ) : (
          <table className="w-full border-collapse border">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">Doctor ID</th>
                <th className="border p-2">Name</th>
                <th className="border p-2">Department</th>
                <th className="border p-2">Experience</th>
                <th className="border p-2">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredDoctors.map((doc, index) => (
                <tr key={index}>
                  <td className="border p-2">{doc.id}</td>
                  <td className="border p-2">{doc.name}</td>
                  <td className="border p-2">
                    {doc.department}
                  </td>
                  <td className="border p-2">
                    {doc.experience}
                  </td>

                  <td className="border p-2">
                    <div className="flex gap-2">
                      <button
                        onClick={() =>
                          handleEditDoctor(
                            doctors.findIndex(
                              (d) => d.id === doc.id
                            )
                          )
                        }
                        className="bg-yellow-500 text-white px-3 py-1 rounded"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() =>
                          handleDeleteDoctor(
                            doctors.findIndex(
                              (d) => d.id === doc.id
                            )
                          )
                        }
                        className="bg-red-500 text-white px-3 py-1 rounded"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
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