chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "getCookies") {
    Promise.all([
      chrome.cookies.getAll({ domain: "decklog.bushiroad.com" }),
      chrome.cookies.getAll({ domain: "decklog-en.bushiroad.com" }),
    ]).then(([cookies1, cookies2]) => {
      const targetJP = cookies1.find((e) => e.name === "CAKEPHP");
      const targetEN = cookies2.find((e) => e.name === "CAKEPHP");
      sendResponse({
        cookies: {
          "decklog.bushiroad.com": targetJP ? targetJP.value : "",
          "decklog-en.bushiroad.com": targetEN ? targetEN.value : "",
        },
      });
    });
    return true;
  }
});
