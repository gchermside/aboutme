

var button = document.getElementsByClassName("button");
var i;

for (i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = null;
    console.log(this.classList);
    if(this.parentElement.classList.contains("right")) {
      content = this.previousElementSibling;
      console.log("pes is ", this.previousElementSibling);
    } else {
      content = this.nextElementSibling;
    }
    console.log("content is ", content);
    if (content.style.display === "flex") {
      content.style.display = "none";
    } else {
      content.style.display = "flex";
    }
  });
} 
