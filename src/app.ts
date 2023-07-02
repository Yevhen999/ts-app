const input = document.getElementById("inputEmail");

if (input) {
  (input as HTMLInputElement).value;
  const newInput = input as HTMLInputElement;
  console.log(newInput.value);
}
