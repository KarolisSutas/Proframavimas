function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }

  // Jei slapuko nėra, rodyti pranešimą
  if (!getCookie("cookieConsent")) {
    document.getElementById("cookie-banner").style.display = "block";
  }

  // Paspaudus "Sutinku" – įrašyti slapuką ir paslėpti pranešimą
  document.getElementById("accept-cookies").onclick = function () {
    document.cookie = "cookieConsent=true; max-age=" + 60 * 60 * 24 * 365 + "; path=/";
    document.getElementById("cookie-banner").style.display = "none";
  }