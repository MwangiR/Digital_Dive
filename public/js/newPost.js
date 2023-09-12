const newPostHandler = async (event) => {
  event.preventDefault();
  console.log("clicked new post");

  const title = document.querySelector(".title-new").value.trim();
  const content = document.querySelector(".userpost-new").value.trim();

  if (title && content) {
    const response = await fetch(`/api/posts`, {
      method: "POST",
      body: JSON.stringify({
        title: title,
        post_content: content,
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

document.querySelector(".newPost").addEventListener("submit", newPostHandler);
