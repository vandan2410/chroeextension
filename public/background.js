chrome.commands.onCommand.addListener(function (command) {
  if (command === 'logSelectedText') {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      var tabId = tabs[0].id;
      chrome.scripting.executeScript({
        target: { tabId: tabId },
        function: logSelectedText,
      });
    });
  }
});

function logSelectedText() {
  var selectedText = window.getSelection().toString();
  chrome.runtime.sendMessage({ action: 'sendSelectedText', text: selectedText });
}




chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === 'sendSelectedText') {
    var selectedText = request.text;
    console.log(selectedText);
  }
});