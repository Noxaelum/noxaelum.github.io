const navigationHeight = document.getElementById("navbar").offsetHeight;

document.documentElement.style.setProperty("--scroll-padding", navigationHeight + "px")

const observer = new IntersectionObserver((entries) => {
   entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting) {
         entry.target.classList.add("show")
      } else {
         entry.target.classList.remove("show")
      }
   })
})

const hiddenElements = document.querySelectorAll(".hidden")
hiddenElements.forEach(el => { observer.observe(el) });



function handleMenuClick() {
   const menu = document.querySelector(".buttons");
   menu.classList.toggle("active");
}

document.addEventListener("click", function (event) {
   const menuButton = document.querySelector(".fa-bars");
   const menu = document.querySelector(".buttons");

   if (!menu.contains(event.target) && event.target !== menuButton) {
      menu.classList.remove("active");
   }
})

function handlePageClick(menu) {
   menu.classList.remove("active")
}

function delayScroll(targetHref) {
   const targetElement = document.getElementById(targetHref);
   if (targetElement) {
      const targetOffset = targetElement.offsetTop - navigationHeight;

      if (window.innerWidth < 540) {
         const delayTime = 125;
         setTimeout(() => {
            window.scrollTo({
               top: targetOffset,
               behavior: "smooth"
            });
         }, delayTime);
      } else {
         window.scrollTo({
            top: targetOffset,
            behavior: "smooth"
         });
      }
   }
}

const buttons = document.querySelectorAll(".button");
buttons.forEach(button => {
   button.addEventListener("click", function (event) {
      event.preventDefault();
      const targetHref = this.getAttribute("href").substring(1);
      const menu = document.querySelector(".buttons");
      handlePageClick(menu);
      delayScroll(targetHref);
   });
});


buttons.forEach(button => {
   button.addEventListener("mouseover", function () {
      buttons.forEach(otherButton => {
         if (otherButton != button && !otherButton.classList.contains("button-focus")) {
            otherButton.classList.add("button-outFocus")
         }
      })
      if (!button.classList.contains("button-focus")) {
         button.classList.add("button-focus")
      }
   })
   button.addEventListener("mouseout", function () {
      buttons.forEach(otherButton => {
         otherButton.classList.remove("button-outFocus")
      })
      button.classList.remove("button-focus")
   })
})

const handleSeeMoreClick = document.getElementById("learnMore")
handleSeeMoreClick.addEventListener("click", function (event) {
   event.preventDefault();
   const targetHref = this.getAttribute("href").substring(1);
   const targetElement = document.getElementById(targetHref)
   const targetOffset = targetElement.offsetTop - navigationHeight;
   window.scrollTo({
      top: targetOffset,
      behavior: "smooth"
   })
})