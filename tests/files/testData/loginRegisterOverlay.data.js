module.exports = {
  user_1: {
    email: process.env.TEST_USER_1_EMAIL || "test.user1@example.com",
    password: process.env.TEST_USER_1_PASSWORD || "",
  },
  user_2: {
    email: process.env.TEST_USER_2_EMAIL || "test.user2@example.com",
    password: process.env.TEST_USER_2_PASSWORD || "",
  },
};
