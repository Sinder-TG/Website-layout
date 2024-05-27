const btn = document.querySelectorAll(".photography-btn");
const imges = document.querySelector(".photography-images");

btn[0].addEventListener("click", function (event) {
  imges.innerHTML = `
    <img src="photography-1.jpg" alt="" class="photography-img" />
    <img src="photography-1.jpg" alt="" class="photography-img" />
    <img src="photography-1.jpg" alt="" class="photography-img" />
    <img src="photography-1.jpg" alt="" class="photography-img" />`;
});

btn[1].addEventListener("click", function (event) {
  imges.innerHTML = `
    <img src="photography-2.jpg" alt="" class="photography-img" />
    <img src="photography-2.jpg" alt="" class="photography-img" />
    <img src="photography-2.jpg" alt="" class="photography-img" />
    <img src="photography-2.jpg" alt="" class="photography-img" />`;
});

btn[2].addEventListener("click", function (event) {
  imges.innerHTML = `
    <img src="photography-3.jpg" alt="" class="photography-img" />
    <img src="photography-3.jpg" alt="" class="photography-img" />
    <img src="photography-3.jpg" alt="" class="photography-img" />
    <img src="photography-3.jpg" alt="" class="photography-img" />`;
});

btn[3].addEventListener("click", function (event) {
  imges.innerHTML = `
    <img src="photography-4.jpg" alt="" class="photography-img" />
    <img src="photography-4.jpg" alt="" class="photography-img" />
    <img src="photography-4.jpg" alt="" class="photography-img" />
    <img src="photography-4.jpg" alt="" class="photography-img" />`;
});
