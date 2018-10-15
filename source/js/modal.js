var btnOpenCart = document.querySelectorAll(".js-to-cart");
var popup = document.querySelector(".modal");
var overlay = document.querySelector(".overlay");

for (var i = 0; i < btnOpenCart.length; i++){
    btnOpenCart[i].addEventListener("click", function(evt) {
      evt.preventDefault();
      popup.classList.add("modal__show");
      overlay.classList.add("overlay-show");
    });
  }

overlay.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("modal__show");
  overlay.classList.remove("overlay-show");
});
