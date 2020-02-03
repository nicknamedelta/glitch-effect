const updateText = () => {
  // Get input value after key are pressed
  const elmValue = document.getElementById("value").value;

  // Get element reference
  const elmFinalValue = document.getElementById("result");

  // Set new value to text element
  elmFinalValue.textContent = elmValue;

  // Set new value to data-text attribute
  elmFinalValue.dataset.text = elmValue;
};
