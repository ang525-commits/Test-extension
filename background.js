const RULESET_ID = "ruleset_1";

// Listen for messages from content script
chrome.runtime.onMessage.addListener(async (msg, sender, sendResponse) => {
    if (msg.type === "checkBlock") {
        const { isBlocked } = await chrome.storage.local.get("isBlocked");

        // Tell content script whether to show the prompt
        sendResponse({ blocked: !!isBlocked });
    }
});

// Alarm to disable ruleset after the timer
chrome.alarms.onAlarm.addListener(async (alarm) => {
    if (alarm.name === "disableBlock") {
        await chrome.declarativeNetRequest.updateEnabledRulesets({
            disableRulesetIds: [RULESET_ID]
        });
        await chrome.storage.local.set({ isBlocked: false });
        console.log("Block expired, rules disabled");
    }
});
