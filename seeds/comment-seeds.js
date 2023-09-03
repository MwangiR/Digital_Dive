const { Comment } = require("../models");

const commentsData = [
  {
    comment_text: "Great post! I learned a lot.",
    date_created: "2023-09-04 11:15:00",
    user_id: 1, // Replace with an existing user's ID
    post_id: 1, // Replace with an existing post's ID
  },
  {
    comment_text: "I have a question about this topic.",
    date_created: "2023-09-03 14:30:00",
    user_id: 2, // Replace with an existing user's ID
    post_id: 1, // Replace with an existing post's ID
  },
  {
    comment_text: "Thanks for sharing this information!",
    date_created: "2023-09-02 10:45:00",
    user_id: 3, // Replace with an existing user's ID
    post_id: 2, // Replace with an existing post's ID
  },
  {
    comment_text: "I totally agree with your insights.",
    date_created: "2023-09-01 19:20:00",
    user_id: 1, // Replace with an existing user's ID
    post_id: 2, // Replace with an existing post's ID
  },
  {
    comment_text: "This post inspired me to learn more!",
    date_created: "2023-08-31 15:45:00",
    user_id: 2, // Replace with an existing user's ID
    post_id: 3, // Replace with an existing post's ID
  },
  {
    comment_text: "I found a typo in the post. It should be fixed.",
    date_created: "2023-08-30 12:05:00",
    user_id: 3, // Replace with an existing user's ID
    post_id: 3, // Replace with an existing post's ID
  },
  {
    comment_text: "This is the best tech blog I've come across!",
    date_created: "2023-08-29 21:30:00",
    user_id: 1, // Replace with an existing user's ID
    post_id: 4, // Replace with an existing post's ID
  },
  {
    comment_text: "I have a suggestion for a future topic.",
    date_created: "2023-08-28 17:10:00",
    user_id: 2, // Replace with an existing user's ID
    post_id: 4, // Replace with an existing post's ID
  },
  {
    comment_text: "Keep up the excellent work!",
    date_created: "2023-08-27 13:40:00",
    user_id: 3, // Replace with an existing user's ID
    post_id: 5, // Replace with an existing post's ID
  },
  {
    comment_text: "I have a technical question about this post.",
    date_created: "2023-08-26 23:55:00",
    user_id: 1, // Replace with an existing user's ID
    post_id: 5, // Replace with an existing post's ID
  },
];

const seedComments = () => Comment.bulkCreate(commentsData);

module.exports = seedComments;
