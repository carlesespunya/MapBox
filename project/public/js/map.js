document.addEventListener("DOMContentLoaded", () => {
  console.log("Mapbox JS file imported successfully!");

  const mapCenter = document.querySelector(".map-center").innerHTML.split(",")
  const mapZoom = document.querySelector(".map-zoom").innerHTML
  const popupDivs = document.querySelectorAll(".popup")
  const posDivs = document.querySelectorAll(".pos")
  const markerDivs = document.querySelectorAll(".marker")
  const popups = []
  mapboxgl.accessToken = 'pk.eyJ1IjoiY2FybGVzcHVuYSIsImEiOiJjbGExNTNhMmIwNGJnM3Ftbzdjb21rbTR3In0.w6aVfjk2ZJCyzRVl1-cCGA';

  const map = new mapboxgl.Map({
    container: 'map',
    // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
    style: "mapbox://styles/mapbox/streets-v11",
    center: mapCenter,
    zoom: (mapZoom)
  });

  popupDivs.forEach((popupDiv) => {
    const popup = popupDiv.innerHTML
    console.log(popup)
    popups.push(new mapboxgl.Popup({ offset: 5 }).setHTML(
      `${popup}`
    ));

  })

  posDivs.forEach((posDiv, i) => {
    const pos = posDiv.innerText.split(",")
    console.log(pos)
    new mapboxgl.Marker(markerDivs[i])
      .setLngLat(pos)
      .setPopup(popups[i]) // sets a popup on this marker
      .addTo(map)
  })
});
