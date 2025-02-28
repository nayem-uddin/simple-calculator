var calculator = document.querySelector(".calculator");
var buttons = calculator.querySelectorAll("input[type=button]");
var display = calculator.querySelector("#display");
var button_values = Array.from(buttons).map(function (button) {
  return button.value;
});
Array.from(buttons).map(function (button) {
  button.addEventListener("click", function (event) {
    if (event.target.value == "CE") {
      display.value = "";
    } else {
      display.value += event.target.value;
    }
  });
});

function equal() {
  display.value = eval(display.value);
}
function percent() {
  display.value = eval(display.value) / 100;
}
