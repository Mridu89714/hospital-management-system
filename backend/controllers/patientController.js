const getPatients = (req, res) => {
  const patients = [
    {
      id: "P101",
      name: "John Doe",
      age: 25,
      bloodGroup: "O+",
    },
    {
      id: "P102",
      name: "Jane Smith",
      age: 30,
      bloodGroup: "A+",
    },
  ];

  res.json(patients);
};

module.exports = {
  getPatients,
};