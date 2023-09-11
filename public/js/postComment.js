const newCommentHandler = async (event) => {
  event.preventDefault();
  const postID = parseInt(document.querySelector(".current-Post").getAttribute("data-post-id"));
  console.log(document.querySelector(".current-Post").getAttribute("data-post-id"));
  const commentContent = document.querySelector(".userComment").value.trim();
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
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  }
};

document.querySelector(".comment-form").addEventListener("submit", newCommentHandler);
