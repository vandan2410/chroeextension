// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//   if (request.action === 'getSelectedText') {
//     var selectedText = window.getSelection().toString();
//     sendResponse(selectedText);
//   }
// });
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === 'getSelectedText') {
    var selectedText = window.getSelection().toString();
    var tabUrl = window.location.href;
    sendResponse({ text: selectedText, url: tabUrl });
  }
});



