/*
  Add your real Telegram invite URL below.
  Example: https://t.me/your_channel_name
  Both green buttons will use the same link.
*/
const TELEGRAM_LINK = "https://t.me/YOUR_TELEGRAM_LINK";

document.querySelectorAll("[data-telegram-link]").forEach((button) => {
  button.href = TELEGRAM_LINK;
  button.target = "_blank";
  button.rel = "noopener noreferrer";

  button.addEventListener("click", (event) => {
    if (TELEGRAM_LINK.includes("YOUR_TELEGRAM_LINK")) {
      event.preventDefault();
      alert("Please add your real Telegram group or channel link in script.js first.");
    }
  });
});
