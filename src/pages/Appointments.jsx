import { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";

function Appointments() {
  const [appointment, setAppointment] = useState({
    id: "",
    patientName: "",
    doctorName: "",
    department: "",
    date: "",
    timeSlot: "",
    status: "",
  });

  const [appointments, setAppointments] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Add Appointment
  const handleAddAppointment = () => {
    if (
      !appointment.id ||
      !appointment.patientName ||
      !appointment.doctorName ||
      !appointment.department ||
      !appointment.date ||
      !appointment.timeSlot ||
      !appointment.status
    ) {
      alert("Please fill all fields");
      return;
    }

    setAppointments([...appointments, appointment]);

    setAppointment({
      id: "",
      patientName: "",
      doctorName: "",
      department: "",
      date: "",
      timeSlot: "",
      status: "",
    });
  };

  // Delete Appointment
  const handleDeleteAppointment = (indexToDelete) => {
    const updatedAppointments = appointments.filter(
      (_, index) => index !== indexToDelete
    );

    setAppointments(updatedAppointments);
  };

  // Edit Appointment
  const handleEditAppointment = (index) => {
    setAppointment(appointments[index]);
    setEditIndex(index);
  };

  // Update Appointment
  const handleUpdateAppointment = () => {
    const updatedAppointments = [...appointments];

    updatedAppointments[editIndex] = appointment;

    setAppointments(updatedAppointments);

    setAppointment({
      id: "",
      patientName: "",
      doctorName: "",
      department: "",
      date: "",
      timeSlot: "",
      status: "",
    });

    setEditIndex(null);
  };

  // Search
  const filteredAppointments = appointments.filter(
    (app) =>
      app.patientName
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      app.doctorName
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      app.department
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
  );

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-6">
        Appointment Management
      </h1>

      {/* Form */}
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl font-bold mb-4">
          {editIndex !== null
            ? "Update Appointment"
            : "Book Appointment"}
        </h2>

        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Appointment ID"
            value={appointment.id}
            onChange={(e) =>
              setAppointment({
                ...appointment,
                id: e.target.value,
              })
            }
            className="border p-2 rounded"
          />

          <input
            type="text"
            placeholder="Patient Name"
            value={appointment.patientName}
            onChange={(e) =>
              setAppointment({
                ...appointment,
                patientName: e.target.value,
              })
            }
            className="border p-2 rounded"
          />

          <input
            type="text"
            placeholder="Doctor Name"
            value={appointment.doctorName}
            onChange={(e) =>
              setAppointment({
                ...appointment,
                doctorName: e.target.value,
              })
            }
            className="border p-2 rounded"
          />

          <input
            type="text"
            placeholder="Department"
            value={appointment.department}
            onChange={(e) =>
              setAppointment({
                ...appointment,
                department: e.target.value,
              })
            }
            className="border p-2 rounded"
          />

          <input
            type="date"
            value={appointment.date}
            onChange={(e) =>
              setAppointment({
                ...appointment,
                date: e.target.value,
              })
            }
            className="border p-2 rounded"
          />

          <select
            value={appointment.timeSlot}
            onChange={(e) =>
              setAppointment({
                ...appointment,
                timeSlot: e.target.value,
              })
            }
            className="border p-2 rounded"
          >
            <option value="">Select Time Slot</option>
            <option>09:00 AM</option>
            <option>10:00 AM</option>
            <option>11:00 AM</option>
            <option>12:00 PM</option>
            <option>02:00 PM</option>
            <option>03:00 PM</option>
            <option>04:00 PM</option>
          </select>

          <select
            value={appointment.status}
            onChange={(e) =>
              setAppointment({
                ...appointment,
                status: e.target.value,
              })
            }
            className="border p-2 rounded"
          >
            <option value="">Select Status</option>
            <option>Pending</option>
            <option>Confirmed</option>
            <option>Completed</option>
            <option>Cancelled</option>
          </select>
        </div>

        <button
          onClick={
            editIndex !== null
              ? handleUpdateAppointment
              : handleAddAppointment
          }
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
        >
          {editIndex !== null
            ? "Update Appointment"
            : "Book Appointment"}
        </button>
      </div>

      {/* Search */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <input
          type="text"
          placeholder="Search Appointment"
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
          Appointments List
        </h2>

        {filteredAppointments.length === 0 ? (
          <p>No appointments found.</p>
        ) : (
          <table className="w-full border-collapse border">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">ID</th>
                <th className="border p-2">Patient</th>
                <th className="border p-2">Doctor</th>
                <th className="border p-2">Department</th>
                <th className="border p-2">Date</th>
                <th className="border p-2">Time</th>
                <th className="border p-2">Status</th>
                <th className="border p-2">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredAppointments.map((app, index) => (
                <tr key={index}>
                  <td className="border p-2">{app.id}</td>
                  <td className="border p-2">{app.patientName}</td>
                  <td className="border p-2">{app.doctorName}</td>
                  <td className="border p-2">{app.department}</td>
                  <td className="border p-2">{app.date}</td>
                  <td className="border p-2">{app.timeSlot}</td>
                  <td className="border p-2">{app.status}</td>

                  <td className="border p-2">
                    <div className="flex gap-2">
                      <button
                        onClick={() =>
                          handleEditAppointment(index)
                        }
                        className="bg-yellow-500 text-white px-3 py-1 rounded"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() =>
                          handleDeleteAppointment(index)
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

export default Appointments;