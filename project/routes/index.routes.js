const express = require('express');
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

// GET map page with all the postinos
router.get("/map", (req, res) => {
  // Define the locations of the map with the info we want to display in the popup
  const locations = [{
    id: 1,
    name: "Barcelona",
    pos: [2.154007, 41.390205],
    img: "https://zfbarcelona.es/wp-content/uploads/2021/01/czfb-web-portada2-768x343.jpg"
  }, {
    id: 2,
    name: "Madrid",
    pos: [-3.703339, 40.416729],
    img: "https://www.coldwellbanker.es/wp-content/uploads/2022/04/madrid-2.jpeg"
  }, {
    id: 3,
    name: "Olot",
    pos: [2.488024, 42.182208],
    img: "https://es.turismegarrotxa.com/img-municipi-3200-1800/volca-montsacopa-dron-2019_001.jpg"
  },{
    id: 4,
    name: "Lisbon",
    pos: [-9.142685, 38.736946],
    img: "https://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/Portugal/Lisbon/lisbon-lead-image.jpg?imwidth=680"
  }]

  // Define the dislay of the map
  const mapCenter = [-3.703339, 40.416729]
  const mapZoom = 5

  // Render the map
  res.render("map", { locations, mapCenter, mapZoom  })
})

// GET the location details with a marker of the specific location
router.get("/location/:locationId", (req, res) => {
  const locations = [{
    id: 1,
    name: "Barcelona",
    pos: [2.154007, 41.390205],
    img: "https://zfbarcelona.es/wp-content/uploads/2021/01/czfb-web-portada2-768x343.jpg"
  }, {
    id: 2,
    name: "Madrid",
    pos: [-3.703339, 40.416729],
    img: "https://www.coldwellbanker.es/wp-content/uploads/2022/04/madrid-2.jpeg"
  }, {
    id: 3,
    name: "Olot",
    pos: [2.488024, 42.182208],
    img: "https://es.turismegarrotxa.com/img-municipi-3200-1800/volca-montsacopa-dron-2019_001.jpg"
  }, {
    id: 4,
    name: "Lisbon",
    pos: [-9.142685, 38.736946],
    img: "https://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/Portugal/Lisbon/lisbon-lead-image.jpg?imwidth=680"
  }]

  // Get the location form all the locations
  const [location ]= locations.filter(loc => loc.id == req.params.locationId)

  // Define the display of the map depending on the position of the location
  const mapCenter = location.pos
  const mapZoom = 12

  // Render the location
  res.render("location", { location, mapCenter, mapZoom })
})

module.exports = router;
