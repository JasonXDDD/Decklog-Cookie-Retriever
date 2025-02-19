// popup.js
document.addEventListener("DOMContentLoaded", () => {
  const cookieListJP = document.getElementById("cookieListJP");
  const cookieListEN = document.getElementById("cookieListEN");
  const refreshBtn = document.getElementById("refreshBtn");

  function fetchCookies() {
    chrome.runtime.sendMessage({ action: "getCookies" }, (response) => {
      if (!response || !response.cookies) return;

      cookieListJP.textContent =
        response.cookies["decklog.bushiroad.com"] || "CAKEPHP Cookie not found";
      cookieListEN.textContent =
        response.cookies["decklog-en.bushiroad.com"] ||
        "CAKEPHP Cookie not found";
    });
  }

  fetchCookies();
  refreshBtn.addEventListener("click", fetchCookies);
});
