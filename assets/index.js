
function navigate(sectionId) {
  showSection(sectionId);
  highlightNav(sectionId);
  scrollToSection(sectionId);
}

function showSection(sectionId) {
  document.querySelectorAll("section").forEach((sec) =>
    sec.classList.remove("active")
  );
  document.getElementById(sectionId).classList.add("active");
}

function highlightNav(sectionId) {
  document.querySelectorAll("nav button").forEach((btn) =>
    btn.classList.remove("active")
  );
  const activeBtn = Array.from(document.querySelectorAll("nav button")).find(
    (btn) => btn.textContent.toLowerCase().includes(sectionId.toLowerCase())
  );
  if (activeBtn) activeBtn.classList.add("active");
}

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

function updateFooterYear() {
  document.getElementById("currentYear").textContent =
    new Date().getFullYear();
}

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you for reaching out! I will get back to you soon.");
  this.reset();
});

updateFooterYear();
