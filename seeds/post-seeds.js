const { Post } = require("../models");

const postsData = [
  {
    title: "Introduction to Tech Blogging",
    date_created: "2023-09-04 10:00:00",
    post_content: "This is the first post on our tech blog!",
    user_id: 1, // Replace with an existing user's ID
  },
  {
    title: "Top 10 Gadgets of the Year",
    date_created: "2023-09-03 15:30:00",
    post_content: "Check out the hottest tech gadgets of the year!",
    user_id: 2, // Replace with an existing user's ID
  },
  {
    title: "Web Development Tips and Tricks",
    date_created: "2023-09-02 09:45:00",
    post_content: "Learn the latest web development techniques.",
    user_id: 3, // Replace with an existing user's ID
  },
  {
    title: "The Future of Artificial Intelligence",
    date_created: "2023-09-01 18:20:00",
    post_content: "Exploring the potential of AI in our lives.",
    user_id: 1, // Replace with an existing user's ID
  },
  {
    title: "Cybersecurity Best Practices",
    date_created: "2023-08-31 14:15:00",
    post_content: "Protecting your online presence from threats.",
    user_id: 2, // Replace with an existing user's ID
  },
  {
    title: "Programming Languages Comparison",
    date_created: "2023-08-30 11:55:00",
    post_content: "Which programming language should you learn?",
    user_id: 3, // Replace with an existing user's ID
  },
  {
    title: "Tech News Roundup",
    date_created: "2023-08-29 20:05:00",
    post_content: "Stay updated with the latest tech news.",
    user_id: 1, // Replace with an existing user's ID
  },
  {
    title: "Mobile App Development Tips",
    date_created: "2023-08-28 16:40:00",
    post_content: "Creating successful mobile apps in 2023.",
    user_id: 2, // Replace with an existing user's ID
  },
  {
    title: "The Rise of Cryptocurrency",
    date_created: "2023-08-27 12:10:00",
    post_content: "Exploring the world of digital currencies.",
    user_id: 3, // Replace with an existing user's ID
  },
  {
    title: "Tech Events and Conferences",
    date_created: "2023-08-26 22:25:00",
    post_content: "A guide to upcoming tech events.",
    user_id: 1, // Replace with an existing user's ID
  },
];

const seedPosts = () => Post.bulkCreate(postsData);

module.exports = seedPosts;
