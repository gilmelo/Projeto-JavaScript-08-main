let elem = document.querySelector("#element");
let code = document.querySelector("#code");
let inputs = document.querySelectorAll(".sliders input");

inputs.forEach((inp) => inp.addEventListener("input", generateShadow));

function generateShadow() {
  let hShadow = document.querySelector("#h-shadow").value;
  let vShadow = document.querySelector("#v-shadow").value;
  let blurRadius = document.querySelector("#blur-radius").value;
  let spreadShadow = document.querySelector("#spread-radius").value;
  let shadowColor = document.querySelector("#shadow-color").value;
  let shadowColorOpacity = document.querySelector(
    "#shadow-color-opacity"
  ).value;
  let shadowInset = document.querySelector("#shadow-inset").checked;

  let boxShadow = shadowInset
    ? `inset ${hShadow}px ${vShadow}px ${blurRadius}px ${spreadShadow}px ${hexToRgba(
        shadowColor,
        shadowColorOpacity
      )}`
    : `${hShadow}px ${vShadow}px ${blurRadius}px ${spreadShadow}px ${hexToRgba(
        shadowColor,
        shadowColorOpacity
      )}`;

      elem.style.boxShadow = boxShadow;



      document.querySelector(".code-wrapper textarea").innerHTML = `box-shadow: ${boxShadow}`
}


// copy box-shadow
function copyCode() {
  code.select()
  document.execCommand("copy")
  alert("Code Copiado com sucesso!")
}

// Convertor Hex rgba
function hexToRgba(shadowColor, shadowColorOpacity) {
  let r = parseInt(shadowColor.substr(1, 2), 16);
  let g = parseInt(shadowColor.substr(3, 2), 16);
  let b = parseInt(shadowColor.substr(5, 2), 16);
  return `rgba(${r},${g},${b},${shadowColorOpacity})`;
}
