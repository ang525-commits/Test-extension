chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  const ruleId = 1; 
  const rule = {
    "id": 1,
    "priority": 1,
    "action": {
      "type": "redirect",
      "redirect": {
         "extensionPath": "/Shame.html"
      }
    },
    "condition": {
      "urlFilter": "claude.ai",
      "resourceTypes": ["main_frame"]
    }
  };
  const ruleId2 = 1;
  const rule2 = {
    "id": 2,
    "priority": 1,
    "action": {
      "type": "redirect",
      "redirect": {
         "extensionPath": "/Shame.html"
      }
    },
    "condition": {
      "urlFilter": "gemini.google.com",
      "resourceTypes": ["main_frame"]
    }
  };
  const ruleId3 = 1;
  const rule3 = {
    "id": 2,
    "priority": 1,
    "action": {
      "type": "redirect",
      "redirect": {
         "extensionPath": "/Shame.html"
      }
    },
    "condition": {
      "urlFilter": "chatgpt.com",
      "resourceTypes": ["main_frame"]
    }
  };
  if (msg.action === 'activateRule') {
    chrome.declarativeNetRequest.updateDynamicRules({ addRules: [rule,rule2,rule3] });
  } else if (msg.action === 'deactivateRule') {
    chrome.declarativeNetRequest.updateDynamicRules({ removeRuleIds: [ruleId,ruleId2,ruleId3] });
  }
});
