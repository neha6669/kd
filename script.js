document.addEventListener("DOMContentLoaded", function () {
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Tracks a click on the Telegram join link, not a confirmed Telegram membership.
  document.querySelectorAll("[data-subscribe]").forEach(function (button) {
    button.addEventListener("click", function () {
      if (typeof window.fbq === "function") {
        window.fbq("track", "Subscribe");
      }
    });
  });
});
