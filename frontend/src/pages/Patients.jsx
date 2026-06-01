import { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";

function Patients() {
  const [patient, setPatient] = useState({
    id: "",
    name: "",
    age: "",
    gender: "",
    phone: "",
    bloodGroup: "",
    address: "",
    emergencyContact: "",
  });

  const [patients, setPatients] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Add Patient
  const handleAddPatient = () => {
    if (
      !patient.id ||
      !patient.name ||
      !patient.age ||
      !patient.gender ||
      !patient.phone ||
      !patient.bloodGroup
    ) {
      alert("Please fill all required fields");
      return;
    }

    setPatients([...patients, patient]);

    setPatient({
      id: "",
      name: "",
      age: "",
      gender: "",
      phone: "",
      bloodGroup: "",
      address: "",
      emergencyContact: "",
    });
  };

  // Delete Patient
  const handleDeletePatient = (indexToDelete) => {
    const updatedPatients = patients.filter(
      (_, index) => index !== indexToDelete
    );

    setPatients(updatedPatients);
  };

  // Edit Patient
  const handleEditPatient = (index) => {
    setPatient(patients[index]);
    setEditIndex(index);
  };

  // Update Patient
  const handleUpdatePatient = () => {
    const updatedPatients = [...patients];

    updatedPatients[editIndex] = patient;

    setPatients(updatedPatients);

    setPatient({
      id: "",
      name: "",
      age: "",
      gender: "",
      phone: "",
      bloodGroup: "",
      address: "",
      emergencyContact: "",
    });

    setEditIndex(null);
  };

  // Search
  const filteredPatients = patients.filter(
    (pat) =>
      pat.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pat.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-6">
        Patient Management
      </h1>

      {/* Form */}
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl font-bold mb-4">
          {editIndex !== null
            ? "Update Patient"
            : "Add Patient"}
        </h2>

        <div className="grid grid-cols-2 gap-4">

          <input
            type="text"
            placeholder="Patient ID"
            value={patient.id}
            onChange={(e) =>
              setPatient({
                ...patient,
                id: e.target.value,
              })
            }
            className="border p-2 rounded"
          />

          <input
            type="text"
            placeholder="Patient Name"
            value={patient.name}
            onChange={(e) =>
              setPatient({
                ...patient,
                name: e.target.value,
              })
            }
            className="border p-2 rounded"
          />

          <input
            type="number"
            placeholder="Age"
            value={patient.age}
            onChange={(e) =>
              setPatient({
                ...patient,
                age: e.target.value,
              })
            }
            className="border p-2 rounded"
          />

          <select
            value={patient.gender}
            onChange={(e) =>
              setPatient({
                ...patient,
                gender: e.target.value,
              })
            }
            className="border p-2 rounded"
          >
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>

          <input
            type="text"
            placeholder="Phone Number"
            value={patient.phone}
            onChange={(e) =>
              setPatient({
                ...patient,
                phone: e.target.value,
              })
            }
            className="border p-2 rounded"
          />

          <select
            value={patient.bloodGroup}
            onChange={(e) =>
              setPatient({
                ...patient,
                bloodGroup: e.target.value,
              })
            }
            className="border p-2 rounded"
          >
            <option value="">Blood Group</option>
            <option>A+</option>
            <option>A-</option>
            <option>B+</option>
            <option>B-</option>
            <option>AB+</option>
            <option>AB-</option>
            <option>O+</option>
            <option>O-</option>
          </select>

          <input
            type="text"
            placeholder="Address"
            value={patient.address}
            onChange={(e) =>
              setPatient({
                ...patient,
                address: e.target.value,
              })
            }
            className="border p-2 rounded"
          />

          <input
            type="text"
            placeholder="Emergency Contact"
            value={patient.emergencyContact}
            onChange={(e) =>
              setPatient({
                ...patient,
                emergencyContact: e.target.value,
              })
            }
            className="border p-2 rounded"
          />

        </div>

        <button
          onClick={
            editIndex !== null
              ? handleUpdatePatient
              : handleAddPatient
          }
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
        >
          {editIndex !== null
            ? "Update Patient"
            : "Add Patient"}
        </button>
      </div>

      {/* Search */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <input
          type="text"
          placeholder="Search Patient by ID or Name"
          value={searchTerm}
          onChange={(e) =>
            setSearchTerm(e.target.value)
          }
          className="border p-2 rounded w-full"
        />
      </div>

      {/* Table */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">
          Patients List
        </h2>

        {filteredPatients.length === 0 ? (
          <p>No patients found.</p>
        ) : (
          <table className="w-full border-collapse border">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">ID</th>
                <th className="border p-2">Name</th>
                <th className="border p-2">Age</th>
                <th className="border p-2">Gender</th>
                <th className="border p-2">Phone</th>
                <th className="border p-2">Blood Group</th>
                <th className="border p-2">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredPatients.map((pat, index) => (
                <tr key={index}>
                  <td className="border p-2">{pat.id}</td>
                  <td className="border p-2">{pat.name}</td>
                  <td className="border p-2">{pat.age}</td>
                  <td className="border p-2">{pat.gender}</td>
                  <td className="border p-2">{pat.phone}</td>
                  <td className="border p-2">{pat.bloodGroup}</td>

                  <td className="border p-2">
                    <div className="flex gap-2">
                      <button
                        onClick={() =>
                          handleEditPatient(index)
                        }
                        className="bg-yellow-500 text-white px-3 py-1 rounded"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() =>
                          handleDeletePatient(index)
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

export default Patients;