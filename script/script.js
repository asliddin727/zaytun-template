
function closeIcon(){
    const loginCloseIcon = document.getElementById("login");
    loginCloseIcon.style.display = "none";
}

document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide', {
      perPage: 1,
      rewind : true,
      autoplay: true,
    } );
    
    splide.mount();
    } );