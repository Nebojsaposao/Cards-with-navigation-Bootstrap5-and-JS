function showContent(tab) {
  let contentText = "";
  switch (tab) {
    case "home":
      contentText =
        "Dobrodošli na početnu stranicu! Ovdje možete naći osnovne informacije.";
      break;
    case "about":
      contentText =
        "Ova stranica sadrži informacije o osnovnim arapskim frazama.";
      break;
    case "contact":
      contentText = "Kontaktirajte nas putem emaila ili telefona.";
      break;
    default:
      contentText = "Izaberi karticu da vidiš sadržaj.";
  }
  document.getElementById("content-text").innerText = contentText;

  // Update active class on tabs
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => link.classList.remove("active"));
  document
    .querySelector(`a[onclick="showContent('${tab}')"]`)
    .classList.add("active");
}
