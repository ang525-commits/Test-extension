const RULESET_ID = "ruleset_1"; 
let USERCHOICE = 0;
let isBlocked = false;
if(!isBlocked){
  let duration = prompt("Block for how many minutes?");
    if (duration > 0) {
        enableRuleset();
        set blockedUntil = now + duration;
        chrome.alarms.create("disableBlock", { delayInMinutes: duration });
        isBlocked = true;
    }
}
chrome.alarms.onAlarm.addListener(async (alarm) => {
  if (alarm.name === "disableBlock") {
    try {
      await chrome.declarativeNetRequest.updateEnabledRulesets({
        disableRulesetIds: [RULESET_ID]
        isBlocked = false;
      });
      console.log("Temporary block expired, rules disabled.");
    } catch (err) {
      console.error("Failed to disable block:", err);
    }
  }
});
