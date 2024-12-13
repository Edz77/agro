//TOP NAVIGATION
const NavBar = () => {
    const x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
window.onscroll = function () {
  scrollFunction();
};
const scrollFunction = () => {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("myTopnav").style.width = "100%";
    document.getElementById("header").style.position = "fixed";
    document.getElementById("header").style.top = "0%";
    document.getElementById("roll_back").style.display = "flex";
  } else {
    document.getElementById("myTopnav").style.width = "80%";
    document.getElementById("header").style.position = "fixed";
    document.getElementById("header").style.top = "4rem";
    document.getElementById("roll_back").style.display = "none";
  }
}

setTimeout(function() {
  document.getElementById('loadingSection').classList.add('hidden');
}, 2000); 

function preloadImages(urls) {
  const images = [];
  urls.forEach(url => {
    const img = new Image();
    img.src = url;
    images.push(img);
  });
  return images;
}

const imageUrls = [
  "assets/2.1.png",
  "assets/1.png",
  "assets/3.png"
];

const preloadedImages = preloadImages(imageUrls);

const banner = document.getElementById('banner');
let currentIndex = 0;

function changeBackgroundImage() {
  banner.style.backgroundImage = `url(${preloadedImages[currentIndex].src})`;

  currentIndex = (currentIndex + 1) % preloadedImages.length;
}

setInterval(changeBackgroundImage, 4000);

changeBackgroundImage();