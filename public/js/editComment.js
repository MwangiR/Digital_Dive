document.addEventListener("DOMContentLoaded", function () {
  const editCommentForms = document.querySelectorAll(".commentEdit");
  editCommentForms.forEach((editCommentForm) => {
    editCommentForm.style.display = "none";
  });

  const editCommentBtn = document.querySelectorAll("#editCommentBtn");
  editCommentBtn.forEach(function (button) {
    button.addEventListener("click", function () {
      const postCard = button.closest(".post-Card");
      const editCommentForm = postCard.querySelector(".commentEdit");

      editCommentForm.style.display = "block";

      const postBody = postCard.querySelector(".uk-card-body");

      postBody.style.display = "none";
    });
  });

  const editedCommentBtn = document.querySelectorAll(".editedCommentBtn");
  editedCommentBtn.forEach(function (button) {
    button.addEventListener("click", async function () {
      const postCard = button.closest(".post-Card");
      const editCommentForm = postCard.querySelector(".commentEdit");
      const contentInput = editCommentForm.querySelector(".userComment-edit");

      const updatedContent = contentInput.value.trim();

      const commentBody = postCard.querySelector(".uk-card-body");

      commentBody.textContent = updatedContent;

      console.log(updatedContent);

      editCommentForm.style.display = "none";

      commentBody.style.display = "block";

      const postId = postCard.getAttribute("data-post-id");
      const commentID = postCard.getAttribute("data-comment-id");

      try {
        const response = await fetch(`/api/comments/${commentID}`, {
          method: "PUT",
          body: JSON.stringify({
            post_id: postId,
            comment_content: updatedContent,
          }),
          headers: { "Content-Type": "application/json" },
        });
        if (response.ok) {
          document.location.replace("/dashboard");
        } else {
          alert(response.statusText);
        }
      } catch (err) {
        console.log(err);
      }
    });
  });
});
