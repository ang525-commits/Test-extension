// Ask background if the block is active
chrome.runtime.sendMessage({ type: "checkBlock" }, async (response) => {
    if (!response.blocked) {
        // Only prompt if not blocked
        let duration = Number(prompt("Block for how many minutes?"));

        if (duration > 0) {
            // Tell background to enable ruleset and start alarm
            await chrome.runtime.sendMessage({ type: "startBlock", duration });

            // Also set local flag in storage
            await chrome.storage.local.set({ isBlocked: true });
        }
    }
});
