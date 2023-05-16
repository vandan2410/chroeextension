chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === 'getSelectedText') {
    var selectedText = window.getSelection().toString();
    chrome.runtime.sendMessage({ action: 'sendSelectedText', text: selectedText });
  }
});
