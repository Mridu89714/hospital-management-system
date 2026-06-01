const getDoctors = (req, res) => {
  const doctors = [
    {
      id: "D101",
      name: "Dr Smith",
      department: "Cardiology",
      experience: "10 Years",
    },
    {
      id: "D102",
      name: "Dr James",
      department: "Neurology",
      experience: "8 Years",
    },
  ];

  res.json(doctors);
};

module.exports = {
  getDoctors,
};