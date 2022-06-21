//BACKGROUND IMAGES SLIDER EFFECT BELOW
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";

  setTimeout(showSlides, 4000);
}
//END OF BACKGROUND IMAGES SLIDER EFFECT BELOW
// START OF PVC SECTION EDITS FOR SLIDER

// let slideIndex2 = 0;
// showSlides2();

// function showSlides2() {
//   let i;
//   let slides2 = document.getElementsByClassName("pvcslides");
//   for (i = 0; i < slides.length; i++) {
//     pvcslides[i].style.display = "none";
//   }

//   slideIndex2++;

//   if (slideIndex2 > slides2.length) {
//     slideIndex2 = 1;
//   }

//   pvcslides[slideIndex2 - 1].style.display = "block";

//   setTimeout(showSlides, 3000);
// }
// SECOND TRIAL FOR PVC SLIDE
setInterval(slide, 3000);

let slides2 = document.querySelector(".pvcslidesinner");

var image = document.querySelector(".slidespvc img").width;

function slide() {
  return slides2.scrollTo(image, 0), repeat();

  function repeat() {
    if (image === 400) {
      return (image = 800);
    } else if (image === 800) {
      return (image = 1200);
    } else if (image === 1200) {
      return (image = 1600);
    } else if (image === 1600) {
      return (image = 400);
    }
  }
}
//   if (screen.width <= 375) return slides2.scrollTo(image, 0), repeat();

//   function repeat() {
//     if (image === 350) {
//       return (image = 700);
//     } else if (image === 700) {
//       return (image = 1050);
//     } else if (image === 1050) {
//       return (image = 1400);
//     } else if (image === 1400) {
//       return (image = 350);
//     }
//   }}

// if (screen.width < 820) {
//   function slide2() {
//     return slides2.scrollTo(image, 0), repeat();

//     function repeat() {
//       if (image === 400) {
//         return (image = 800);
//       } else if (image === 800) {
//         return (image = 1200);
//       } else if (image === 1200) {
//         return (image = 1600);
//       } else if (image === 1600) {
//         return (image = 400);
//       }
//     }
//   }
// }

// END OF PVC SECTION EDITS FOR SLIDER

// START OF INEC BUTTON EDITS

var section = document.querySelector(".pvcslides");
var buttoninec = document.querySelector(".inecbtnsection");

function hoverreveal() {
  buttoninec.style.display = "block";
  if (section.onmousemove) {
    return (buttoninec.style.display = block);
  }
}

function hoverrevealkill() {
  buttoninec.style.display = "none";
}

// END OF INEC BUTTON EDITS
