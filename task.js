document.getElementById("updateAboutMe").addEventListener("click", function () {
  document.getElementById("aboutMe").innerText = "Messi Is The Goat";
});
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let errorMessage = document.getElementById("errorMessage");

    if (name === "" || email === "") {
      event.preventDefault();
      errorMessage.innerText = "Please fill out both fields.";
    } else if (!email.includes("@")) {
      event.preventDefault();
      errorMessage.innerText = "Enter a valid email.";
    } else {
      errorMessage.innerText = "Form submitted successfully!";
      errorMessage.style = "color : green";
    }
  });
document.getElementById("themeToggle").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark-mode") ? "dark" : "light"
  );
});
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
}
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
};

scrollTopBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

window.onload = function () {
  document.getElementById("htmlSkill").style.width = "70%";
  document.getElementById("cssSkill").style.width = "40%";
  document.getElementById("jsSkill").style.width = "80%";
};
