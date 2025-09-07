const form = document.getElementById("myForm");
  const email = document.getElementById("email");
  const errorMessage = document.getElementById("errorMessage");

  form.onsubmit = function (e) {
    if (!email.value) {
      e.preventDefault(); // Prevent form submission
      errorMessage.textContent = "Email is required!";
    }
  };

// Interactive Feature 1: Counter
let count = 0;
document.getElementById("increaseBtn").onclick = () => {
  count++;
  document.getElementById("count").textContent = count;
};

document.getElementById("resetBtn").onclick = () => {
  count = 0;
  document.getElementById("count").textContent = count;
};

// Interactive Feature 2: Custom Form Validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
});