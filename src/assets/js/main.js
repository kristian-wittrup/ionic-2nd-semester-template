function rwdMenuFunction() {
  var x = document.getElementById("OldSchoolTopNav");
  if (x.className === "headerNav") {
    x.className += " responsive";
  } else {
    x.className = "headerNav";
  }
}
