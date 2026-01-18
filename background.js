const RULESET_ID = "ruleset_1"; 
chrome.declarativeNetRequest.updateEnabledRulesets({
  enableRulesetIds: [RULESET_ID]
}).then(() => {
  console.log("Block enabled for 1 minute.");
  chrome.alarms.create("disableBlock", { delayInMinutes: 1 });
}).catch(console.error);
chrome.alarms.onAlarm.addListener(async (alarm) => {
  if (alarm.name === "disableBlock") {
    try {
      await chrome.declarativeNetRequest.updateEnabledRulesets({
        disableRulesetIds: [RULESET_ID]
      });
      console.log("Temporary block expired, rules disabled.");
    } catch (err) {
      console.error("Failed to disable block:", err);
    }
  }
});
