chrome.webNavigation.onCompleted.addListener(
  async () => {
    await chrome.action.openPopup();
  },
  { url: [
    { urlMatches: 'https://www.w3schools.com/howto/howto_css_modals.asp' },
  ] },
);
