const span = document.querySelector("span");
const word = "Hell";
let startIdx = 0; // 0 1 2 3
let reverseType = false;

const intervalId = setInterval(() => {
  if (!reverseType) {
    span.innerText += word[startIdx];
    startIdx++;
  } else {
    span.innerText = span.innerText.slice(0, span.innerText - 1);
  }

  if (span.innerText.length === 0 && reverseType) {
    startIdx = 0;
    reverseType = false;
  }

  if (startIdx === word.length) {
    reverseType = true;
  }
}, 200);
