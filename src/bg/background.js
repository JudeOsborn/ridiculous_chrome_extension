// Basic message handler.
chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
    sendResponse();
  }
);