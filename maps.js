/* Accessing the DOM Element **/
const cityInput1 = document.getElementById('cityInput');
const cityForm1 = document.getElementById('cityForm');
const image = document.getElementById('mapImage');

/** Controling the Map URL **/
cityForm1.addEventListener('submit', ($event) => {
  $event.preventDefault();
  		const location = cityInput1.value;

  		image.src ='https://dev.virtualearth.net/REST/V1/Imagery/Map/Road/'+ location + '?mapSize=800,400&format=png&key=AttFaf26oz3jwKLxNuUYBEA_Vvflt0CJ2h3Z6KGRyxbWKCUb8UiONUixvk5NPpMn'; 
  
});