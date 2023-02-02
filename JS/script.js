let menu = document.querySelector(".hamburger");
let navbar = document.querySelector(".nav")

menu.addEventListener('click', ()=>{
    menu.classList.toggle('active');
    navbar.classList.toggle('active');
})

document.querySelectorAll("nav").forEach(n =>n.addEventListener('click',()=>{
    menu.classList.remove('active');
    navbar.classList.remove('active');
}))



// window.onscroll = ()=>{
    
//     menu.classList.remove('fa-times')
//     navbar.classList.remove('active')
// }

document.querySelector('#search-icon').addEventListener("click", ()=>{
    document.querySelector('#search-form').classList.toggle('active')
})

document.querySelector('#close').addEventListener('click', ()=>{
    document.querySelector("#search-form").classList.remove('active')
})


      var swiper = new Swiper(".home-slider", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 7500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
       loop:true
      });

      var swiper = new Swiper(".review-slider", {
        spaceBetween: 20,
        centeredSlides: true,
        autoplay: {
          delay: 7500,
          disableOnInteraction: false,
        },
        
       loop:true,
       breakpoints: {
        0: {
            slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
  },
       }
      });

      // function loader(){
      //   document.querySelector('.loader-container').classList.add('fade-out');
      // }

      // function fadeOut(){
      //   setInterval(loader, 3000);
      // }

      // window.onload = fadeOut;