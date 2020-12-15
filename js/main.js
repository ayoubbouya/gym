  // Initialize and add the map
  function initMap() {
    // The location of Uluru
    const kharkiv = { lat: 49.9935, lng: 36.2304 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 5,
      center: kharkiv,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: kharkiv,
      map: map,
    });
  }

//   // Smooth scrolling
// $("#navbar a, .btn").on("click", function(event) {

//     if(this.hash !== "") {
//       event.preventDefault();
  
//       const hash = this.hash;
  
//       $("html, body").animate({scrollTop: $(hash).offset().top - 100}, 800);
//     }
//   });
  
  
//   // navbar Opacity
  
//   window.addEventListener("scroll", function() {
//     if(window.scrollY > 150) {
//       document.querySelector("#navbar").style.opacity = 0.8;
//     } else {
//       document.querySelector("#navbar").style.opacity = 1;
//     }
//   });
  
