const BLOCK_DURATION = 1;
chrome.declarativeNetRequest.updateEnabledRulesets({
  enableRulesetIds: ["main_rules"]
});
chrome.alarms.create("disableBlock", { delayInMinutes: BLOCK_DURATION });
chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === "disableBlock") {
    chrome.declarativeNetRequest.updateEnabledRulesets({
      disableRulesetIds: ["main_rules"]
    });
    console.log("Temporary block expired, rules disabled.");
  }
});
