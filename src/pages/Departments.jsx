import { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";

function Departments() {
  const [department, setDepartment] = useState({
    id: "",
    name: "",
  });

  const [departments, setDepartments] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Add Department
  const handleAddDepartment = () => {
    if (!department.id || !department.name) {
      alert("Please fill all fields");
      return;
    }

    setDepartments([...departments, department]);

    setDepartment({
      id: "",
      name: "",
    });
  };

  // Delete Department
  const handleDeleteDepartment = (indexToDelete) => {
    const updatedDepartments = departments.filter(
      (_, index) => index !== indexToDelete
    );

    setDepartments(updatedDepartments);

    if (editIndex === indexToDelete) {
      setEditIndex(null);

      setDepartment({
        id: "",
        name: "",
      });
    }
  };

  // Edit Department
  const handleEditDepartment = (index) => {
    setDepartment(departments[index]);
    setEditIndex(index);
  };

  // Update Department
  const handleUpdateDepartment = () => {
    const updatedDepartments = [...departments];

    updatedDepartments[editIndex] = department;

    setDepartments(updatedDepartments);

    setDepartment({
      id: "",
      name: "",
    });

    setEditIndex(null);
  };

  // Search
  const filteredDepartments = departments.filter((dept) =>
    dept.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-6">
        Department Management
      </h1>

      {/* Form */}
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl font-bold mb-4">
          {editIndex !== null
            ? "Update Department"
            : "Add Department"}
        </h2>

        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Department ID"
            value={department.id}
            onChange={(e) =>
              setDepartment({
                ...department,
                id: e.target.value,
              })
            }
            className="border p-2 rounded"
          />

          <input
            type="text"
            placeholder="Department Name"
            value={department.name}
            onChange={(e) =>
              setDepartment({
                ...department,
                name: e.target.value,
              })
            }
            className="border p-2 rounded"
          />
        </div>

        <button
          onClick={
            editIndex !== null
              ? handleUpdateDepartment
              : handleAddDepartment
          }
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
        >
          {editIndex !== null
            ? "Update Department"
            : "Add Department"}
        </button>
      </div>

      {/* Search */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <input
          type="text"
          placeholder="Search Department"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 rounded w-full"
        />
      </div>

      {/* Table */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">
          Departments List
        </h2>

        {filteredDepartments.length === 0 ? (
          <p>No departments found.</p>
        ) : (
          <table className="w-full border-collapse border">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">
                  Department ID
                </th>

                <th className="border p-2">
                  Department Name
                </th>

                <th className="border p-2">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {filteredDepartments.map((dept, index) => (
                <tr key={index}>
                  <td className="border p-2">
                    {dept.id}
                  </td>

                  <td className="border p-2">
                    {dept.name}
                  </td>

                  <td className="border p-2">
                    <div className="flex gap-2">
                      <button
                        onClick={() =>
                          handleEditDepartment(
                            departments.findIndex(
                              (d) => d.id === dept.id
                            )
                          )
                        }
                        className="bg-yellow-500 text-white px-3 py-1 rounded"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() =>
                          handleDeleteDepartment(
                            departments.findIndex(
                              (d) => d.id === dept.id
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

export default Departments;