//select links
const featured = document.querySelector("#featured");
const linkOne = document.querySelector("#link-one");
const linkTwo = document.querySelector("#link-two");
const linkThree = document.querySelector("#link-three");

//on mouse over change link to an image
featured.addEventListener("mouseenter", () => {
  featured.innerHTML =
    "<img src='https://img.icons8.com/color/40/000000/soundcloud.png'/>";
});

//on mouse out change image back to a link
featured.addEventListener("mouseleave", () => {
  // console.log(featured);
  featured.innerText = "Featured Song";
});

//on mouse enter switch from text to youtube icon
linkOne.addEventListener("mouseenter", () => {
  console.log(linkOne);
  linkOne.innerHTML =
    "<img src='https://img.icons8.com/color/35/000000/youtube-play.png'/>";
});

//on mouse leave switch back to text
linkOne.addEventListener("mouseleave", () => {
  linkOne.innerText = "Visuals";
});

//on mouse enter switch from text to instagram icon
linkTwo.addEventListener("mouseenter", () => {
  linkTwo.innerHTML =
    '<img src="https://img.icons8.com/fluent/35/000000/instagram-new.png"/>';
});

//on mouse lleave switch back to text
linkTwo.addEventListener("mouseleave", () => {
  linkTwo.innerText = "Instagram";
});

// on mouse enter switch from text to twiitter icon
linkThree.addEventListener("mouseenter", () => {
  linkThree.innerHTML =
    '<img src="https://img.icons8.com/color/37/000000/twitter--v1.png"/>';
});

//on mouse leave switch from icon back to text
linkThree.addEventListener("mouseleave", () => {
  linkThree.innerText = "Twitter";
});
