export function animateText(text, strText, splitText) {
    // Reset the text
    text.textContent = "";
  
    // Loop over everything
    for (let i = 0; i < splitText.length; i++) {
      let char = splitText[i];
      if (char === " ") {
        char = "&nbsp;";
        text.innerHTML += "<span>" + char + "</span>";
      } else if (char === ".") {
        char = ".";
        text.innerHTML += "<span>" + char + "</span>" + "<br>";
      } else {
        text.innerHTML += "<span>" + splitText[i] + "</span>";
      }
    }
  
    let char = 0;
    const spans = text.querySelectorAll("span");
  
    function complete() {
      clearInterval(timer);
      timer = null;
    }
  
    function onTick() {
      const span = spans[char];
      span.classList.add("fade");
      char++;
      if (char === splitText.length) {
        complete();
        return;
      }
    }
  
    let timer = setInterval(onTick, 140);
  }