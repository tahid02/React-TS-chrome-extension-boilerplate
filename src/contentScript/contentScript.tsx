console.log("hello content");
chrome.runtime.sendMessage("msg to bg", (res) => {
  console.log(res);
});
