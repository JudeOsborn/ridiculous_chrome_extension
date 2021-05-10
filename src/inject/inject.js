// Send a message to the background script and show an alert when we hear back.
chrome.extension.sendMessage({'msg': 'A ridiculously simple Chrome extension!'}, function(response) {
  alert('What a ridiculously simple extension.')
});
