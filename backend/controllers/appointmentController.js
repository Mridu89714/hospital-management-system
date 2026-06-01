const getAppointments = (req, res) => {
  const appointments = [
    {
      id: "A101",
      patientName: "John Doe",
      doctorName: "Dr Smith",
      department: "Cardiology",
      date: "2026-06-01",
      timeSlot: "10:00 AM",
      status: "Confirmed",
    },
    {
      id: "A102",
      patientName: "Jane Smith",
      doctorName: "Dr James",
      department: "Neurology",
      date: "2026-06-02",
      timeSlot: "11:00 AM",
      status: "Pending",
    },
  ];

  res.json(appointments);
};

module.exports = {
  getAppointments,
};