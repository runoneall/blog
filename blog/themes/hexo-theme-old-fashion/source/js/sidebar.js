function changeSideStatus() {
  const sideBtn = document.getElementById("side-btn");
  const sideFlag = document.getElementById("side-flag");
  const left = document.getElementById("left");
  var checked = sideFlag.checked;
  if (checked) {
    sideBtn.style.left = "245px";
    left.style.left = "0px";
  } else {
    sideBtn.style.left = "0px";
    left.style.left = "-245px";
  }
}
