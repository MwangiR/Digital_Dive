document.addEventListener("DOMContentLoaded", function () {
  const editPostForms = document.querySelectorAll(".postEdit");
  editPostForms.forEach((editPostForm) => {
    editPostForm.style.display = "none";
  });

  const editPostBtn = document.querySelectorAll("#editPostBtn");
  editPostBtn.forEach(function (button) {
    button.addEventListener("click", function () {
      const postCard = button.closest(".post-Card");
      const editPostForm = postCard.querySelector(".postEdit");

      // editPostForm.style.display = "block";
      if (editPostForm.style.display === "none") {
        editPostForm.style.display = "block";
      } else {
        editPostForm.style.display = "none";
      }

      const postTitle = postCard.querySelector(".uk-card-title");
      const postBody = postCard.querySelector(".uk-card-body");

      postTitle.style.display = "block";
      postBody.style.display = "block";
    });
  });

  const editedPostBtn = document.querySelectorAll(".saveEditedBtn");
  editedPostBtn.forEach(function (button) {
    button.addEventListener("click", async function () {
      const postCard = button.closest(".post-Card");
      const editPostForm = postCard.querySelector(".postEdit");
      const titleInput = editPostForm.querySelector(".title-edit");
      const contentInput = editPostForm.querySelector(".userpost-edit");

      const updatedTitle = titleInput.value.trim();
      const updatedContent = contentInput.value.trim();

      const postTitle = postCard.querySelector(".uk-card-title");
      const postBody = postCard.querySelector(".uk-card-body");

      postTitle.textContent = updatedTitle;
      postBody.textContent = updatedContent;

      console.log(updatedTitle);
      console.log(updatedContent);

      editPostForm.style.display = "none";
      postTitle.style.display = "block";
      postBody.style.display = "block";

      const postId = postCard.getAttribute("data-post-id");

      try {
        const response = await fetch(`/api/posts/${postId}`, {
          method: "PUT",
          body: JSON.stringify({
            title: updatedTitle,
            post_content: updatedContent,
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

  const postDeleteBtn = document.querySelectorAll(".postDeleteBtn");
  postDeleteBtn.forEach(function (button) {
    button.addEventListener("click", async function () {
      const postCard = button.closest(".post-Card");
      const postId = postCard.getAttribute("data-post-id");
      console.log("this is the id", postId);
      try {
        const response = await fetch(`/api/posts/${postId}`, {
          method: "DELETE",
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
