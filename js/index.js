console.log("This is drag and drop project")

const whitespaces = document.getElementsByClassName("whitespace");
const imgClass = document.querySelector(".imgClass");

// Event listeners for draggable element imgClass
imgClass.addEventListener("dragstart", (e) => {
  e.target.className += ' hold';
  setTimeout(() => {
    e.target.className = "hide";
  }, 0);
});

imgClass.addEventListener("dragend", (e) => {
  e.target.className = "imgclass"
})

for (whitespace of whitespaces) {
  whitespace.addEventListener("dragover", (e) => {
    e.preventDefault();
  })
  whitespace.addEventListener("dragenter", (e) => {
    e.target.className = " dashed";
  })
  whitespace.addEventListener("dragleave", (e) => {
    e.target.className = "whitespace";
  })
  whitespace.addEventListener("drop", (e) => {
    e.target.append(imgClass);
  })
};