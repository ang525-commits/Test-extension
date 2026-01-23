chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  const ruleId = 1; 
  const rule = {
    id: ruleId,
    priority: 1,
    action: { type: 'block' },
    condition: { urlFilter: msg.site, resourceTypes: ['main_frame'] }
  };

  if (msg.action === 'activateRule') {
    chrome.declarativeNetRequest.updateDynamicRules({ addRules: [rule] });
  } else if (msg.action === 'deactivateRule') {
    chrome.declarativeNetRequest.updateDynamicRules({ removeRuleIds: [ruleId] });
  }
});
