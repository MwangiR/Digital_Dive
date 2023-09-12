const loginFormHandler = async (event) => {
  event.preventDefault();
  const email = document.querySelector(".email-login").value.trim();
  const password = document.querySelector(".password-login").value.trim();

  if (email && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      console.log("login successful");
      document.location.replace("/dashboard");
    } else {
      if (response.status === 400) {
        const alertMessageEl = document.createElement("div");
        alertMessageEl.textContent = "Incorrect email or password";
        alertMessageEl.classList.add("uk-alert-danger");
        alertMessageEl.setAttribute("uk-alert", "");

        const closeButtonEl = document.createElement("a");
        closeButtonEl.classList.add("uk-alert-close");
        closeButtonEl.setAttribute("uk-close", "");

        alertMessageEl.appendChild(closeButtonEl);
        document.querySelector(".login-container").prepend(alertMessageEl);
      }
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();
  const username = document.querySelector(".username-signup").value.trim();
  const email = document.querySelector(".email-signup").value.trim();
  const password = document.querySelector(".password-signup").value.trim();

  if (username && email && password) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({
        username,
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      console.log("signup successful");
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
};

document.querySelector(".signup-form").addEventListener("submit", signupFormHandler);

document.querySelector(".login-form").addEventListener("submit", loginFormHandler);
