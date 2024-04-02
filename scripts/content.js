function clickButtonByTestId(buttonTestId) {
  const button = document.querySelector(`[data-testid=${buttonTestId}]`);
  if (button) {
    button.click();
  } else {
    console.error("Button with ID '" + buttonId + "' not found.");
  }
}

document.addEventListener(
  "keydown",
  function (e) {
    // cmd + enter
    if (e.metaKey && e.key == "Enter") {
      clickButtonByTestId("submit-button");
    }
    // cmd + '
    if (e.metaKey && e.key == "'") {
      clickButtonByTestId("execute-button");
    }
  },
  true
);
