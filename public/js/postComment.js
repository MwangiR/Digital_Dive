const newCommentHandler = async (event) => {
  event.preventDefault();
  const postID = event.target.closest(".current-Post").getAttribute("data-post-id");
  console.log(postID);
  const commentContent = event.target.querySelector(".userComment").value.trim();
  if (commentContent) {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({
        post_id: postID,
        comment_content: commentContent,
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
};

document.addEventListener("submit", function (event) {
  if (event.target.classList.contains("comment-form")) {
    newCommentHandler(event);
  }
});
