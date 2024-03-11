const header = document.querySelector("header");

window.addEventListener("scoll",function(){
    header.classList.toggle("sticky",this.window.scrolly > 0);
})
let menu = document.querySelector('#menu-icon');
let navmenu = document.querySelector('.navmenu');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
   
    navmenu.classList.toggle('open');
}
var openpopupBtn = document.querySelector("#open-popup-btn");
var closepopupBtn = document.querySelector(".popup-close-btn");

openpopupBtn.addEventListener("click",function(){
    document.body.classList.add("popup-active")
});
closepopupBtn.addEventListener("click",function(){
    document.body.classList.remove("popup-active")
});
var openpopup1Btn = document.querySelector("#open-popup-btn1");
var closepopup1Btn = document.querySelector(".popup-close-btn1");

openpopup1Btn.addEventListener("click",function(){
    document.body.classList.add("popup1-active")
});
closepopup1Btn.addEventListener("click",function(){
    document.body.classList.remove("popup1-active")
});
var openpopup2Btn = document.querySelector("#open-popup-btn2");
var closepopup2Btn = document.querySelector(".popup-close-btn2");

openpopup2Btn.addEventListener("click",function(){
    document.body.classList.add("popup2-active")
});
closepopup2Btn.addEventListener("click",function(){
    document.body.classList.remove("popup2-active")
});
var openpopup3Btn = document.querySelector("#open-popup-btn3");
var closepopup3Btn = document.querySelector(".popup-close-btn3");

openpopup3Btn.addEventListener("click",function(){
    document.body.classList.add("popup3-active")
});
closepopup3Btn.addEventListener("click",function(){
    document.body.classList.remove("popup3-active")
});
var openpopupBtn = document.querySelector("#open-popup-btn");
var closepopupBtn = document.querySelector(".popup-close-btn");

openpopupBtn.addEventListener("click",function(){
    document.body.classList.add("popup-active")
});
function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }


var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});
let search = document.querySelector(".search");
        let clear = document.querySelector(".clear");

search.onclick=function(){
document.querySelector(".container1").classList.toggle('active');
}
clear.onclick = function(){
    document.getElementById("search").value = "";
};
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}






