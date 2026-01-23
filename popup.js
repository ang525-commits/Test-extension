document.addEventListener('DOMContentLoaded', () => {
  const yesButton = document.getElementById('yes');
  const noButton = document.getElementById('no');
   yesButton.addEventListener('click', () => {
    chrome.runtime.sendMessage({ action: 'activateRule'});
  });
     noButton.addEventListener('click', () => {
    chrome.runtime.sendMessage({ action: 'activateRule'});
  });

});
