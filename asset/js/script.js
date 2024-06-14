let yourtext = [
    ["Web Designer", "#2F4455"],
    ["Full Stack Devloper", "#2F4455"],
    ["Backend Devloper", "#2F4455"]
  ];
  
  let x = 0;
  let y = 0;
  //how fast typing is
  let wait = 100;
  //how long you want to text stay before overwriting
  let additionalwait = 5;
  let txt = yourtext[0][0].split("");
  let out = "";
  let retyping = setInterval(function () {
    document.getElementById("changingText").innerHTML = out;
    if (x > txt.length - 1) {
    } else {
      out += txt[x];
    }
    x++;
    if (x == txt.length + 2 + additionalwait) {
      if (y == yourtext.length - 1) {
        y = 0;
        txt = yourtext[y][0].split("");
        out = "";
        document.getElementById("changingText").innerHTML = out;
        document.getElementById("changingText").style.color = yourtext[y][1];
        x = 0;
      } else {
        y += 1;
        txt = yourtext[y][0].split("");
        out = "";
        document.getElementById("changingText").innerHTML = out;
        document.getElementById("changingText").style.color = yourtext[y][1];
        x = 0;
      }
    }
  }, wait);