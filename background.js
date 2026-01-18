// Duration in minutes
const BLOCK_DURATION = 1; // 1 hour

// Enable the ruleset immediately
chrome.declarativeNetRequest.updateEnabledRulesets({
  enableRulesetIds: ["main_rules"]
});

// Set an alarm to disable it later
chrome.alarms.create("disableBlock", { delayInMinutes: BLOCK_DURATION });

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === "disableBlock") {
    chrome.declarativeNetRequest.updateEnabledRulesets({
      disableRulesetIds: ["main_rules"]
    });
    console.log("Temporary block expired, rules disabled.");
  }
});
