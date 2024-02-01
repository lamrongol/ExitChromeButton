chrome.action.onClicked.addListener(
  (_tab) => {
    chrome.tabs.create({
      active: true,
      url: "about:blank"
    }, (tab) => {
      chrome.debugger.attach({ tabId: tab.id }, '1.2', () => {
        chrome.debugger.sendCommand(
          { tabId: tab.id },
          'Browser.close'
          );
      });
    }
    );
  }
)