const { User } = require("../models");

const usersData = [
  {
    username: "techguru123",
    email: "techguru123@example.com",
    password: "password123", // Make sure to hash passwords in a real application
  },
  {
    username: "codegeek456",
    email: "codegeek456@example.com",
    password: "securepassword", // Make sure to hash passwords in a real application
  },
  {
    username: "gadgetlover789",
    email: "gadgetlover789@example.com",
    password: "p@ssw0rd", // Make sure to hash passwords in a real application
  },
];

const seedUsers = () => User.bulkCreate(usersData);

module.exports = seedUsers;
