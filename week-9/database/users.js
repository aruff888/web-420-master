// database/users.js

const users = [
  {
    email: "harry@hogwarts.edu",
    password: "password",
    securityQuestions: [
      { answer: "Fluffy" },
      { answer: "Quidditch Through the Ages" },
      { answer: "Evans" }
    ]
  }
];

const findOne = async (query) => {
  return users.find(user => user.email === query.email);
};

const updatePassword = async (email, newPassword) => {
  const user = users.find(user => user.email === email);
  if (user) {
    user.password = newPassword;
    return true;
  }
  return false;
};

module.exports = {
  findOne,
  updatePassword
};