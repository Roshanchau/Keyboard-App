const textarea = document.querySelector(".display textarea");
const keys = document.querySelectorAll("input[type=button]");

function insertText(text) {
  textarea.value += text;
}

for (let i = 0; i < keys.length; i++) {
  keys[i].addEventListener("click", function () {
    const letter = keys[i].getAttribute("value").toLowerCase();
    insertText(letter);
  });
}

for (let j = 0; j < keys.length; j++) {
  keys[j].addEventListener("click", function () {
    keys[j].classList.add("inset");
    for (let k = 0; k < keys.length; k++) {
      if (keys[k] !== keys[j]) {
        keys[k].classList.remove("inset");
      }
    }
  });
}
