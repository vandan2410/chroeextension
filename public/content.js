chrome.runtime.sendMessage({ action: 'getSelectedText' }, function (response) {
  var selectedText = window.getSelection().toString();
  var tabUrl = window.location.href;
  chrome.runtime.sendMessage({ action: 'sendSelectedText', text: selectedText, url: tabUrl });
});
