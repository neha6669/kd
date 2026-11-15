const TELEGRAM_LINK = "https://t.me/+2CfR4-D5Fkk2ODBl";

function subscribe() {
    if (typeof fbq === "function") {
        fbq("track", "Lead");
    }

    window.open(TELEGRAM_LINK, "_blank");
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".subscribe-btn, #subscribe")
        .forEach(button => {
            button.addEventListener("click", subscribe);
        });
});
