document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const status = document.getElementById("form-status");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    status.textContent = "Message sent successfully!";
    status.style.color = "#00ffff";

    setTimeout(() => {
      status.textContent = "";
      form.reset();
    }, 3000);
  });
});
