const getDepartments = (req, res) => {
  const departments = [
    {
      id: "DEP101",
      name: "Cardiology",
    },
    {
      id: "DEP102",
      name: "Neurology",
    },
    {
      id: "DEP103",
      name: "Orthopedics",
    },
  ];

  res.json(departments);
};

module.exports = {
  getDepartments,
};