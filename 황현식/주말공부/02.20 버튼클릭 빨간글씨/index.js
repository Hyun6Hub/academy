function changeColor() {
  document.getElementById("text").classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#btn").addEventListener("click", function () {
    setTimeout(function () {
      document.getElementById("text").classList.toggle("active");
    }, 1000);
  });
});
