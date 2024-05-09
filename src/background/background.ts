console.log("bg heloo");
// npm i --save-dev @types/chrome
chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  console.log(msg);
  sendResponse("from bg");
});
