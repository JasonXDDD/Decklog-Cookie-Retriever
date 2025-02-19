window.addEventListener("message", (event) => {
  if (
    event.source !== window ||
    !event.data ||
    event.data.action !== "getCookies"
  )
    return;

  chrome.runtime.sendMessage({ action: "getCookies" }, (response) => {
    window.postMessage({ type: "cookieData", data: response.cookies }, "*");
  });
});
