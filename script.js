const navigationHeight = document.getElementById("navbar").offsetHeight;

document.documentElement.style.setProperty("--scroll-padding", navigationHeight + "px")

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
         const delayTime = 250;
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