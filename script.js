function toggleContact() {
  const contactSection = document.getElementById("contact-info");
  if (contactSection.style.display === "none" || contactSection.style.display === "") {
    contactSection.style.display = "block";
  } else {
    contactSection.style.display = "none";
  }
}
