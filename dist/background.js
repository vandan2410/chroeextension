// chrome.commands.onCommand.addListener(function (command) {
//   if (command === 'logSelectedText') {
//     chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//       var tabId = tabs[0].id;
//       chrome.scripting.executeScript({
//         target: { tabId: tabId },
//         function: logSelectedText,
//       });
//     });
//   }
// });

// function logSelectedText() {
//   var selectedText = window.getSelection().toString();
//   chrome.runtime.sendMessage({ action: 'sendSelectedText', text: selectedText });
// }




// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//   if (request.action === 'sendSelectedText') {
//     var selectedText = request.text;
//     console.log(selectedText);
//   }
// });

// chrome.commands.onCommand.addListener(function (command) {
//   if (command === 'logSelectedText') {
//     chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//       var tab = tabs[0];
//       chrome.scripting.executeScript({
//         target: { tabId: tab.id },
//         files: ['content.js'],
//       }, function () {
//         chrome.tabs.sendMessage(tab.id, { action: 'getSelectedText' }, function (response) {
//           if (chrome.runtime.lastError) {
//             console.error(chrome.runtime.lastError);
//             return;
//           }
//           var selectedText = response?.text || '';
//           var tabUrl = response?.url || '';
//           console.log('Selected Text:', selectedText);
//           console.log('Site URL:', tabUrl);
//         });
//       });
//     });
//   }
// });

chrome.commands.onCommand.addListener(function (command) {
  if (command === 'logSelectedText') {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      var tab = tabs[0];
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ['content.js'],
      });
    });
  }
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === 'sendSelectedText') {
    var selectedText = request.text;
    var tabUrl = request.url;
    console.log('Selected Text:', selectedText);
    console.log('Site URL:', tabUrl);

    // Save selected text and site URL to local storage
    var data = { selectedText: selectedText, siteUrl: tabUrl };
    chrome.storage.local.set(data, function () {
      console.log('Selected Text and Site URL saved to local storage.');
    });
  }
});








