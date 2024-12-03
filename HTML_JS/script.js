// Create the map
let myMap = L.map("map", {
    center: [40.2177518,-101.8786884],
    zoom: 4.49
});

// Tile Layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// Array of markers with coordinates and titles
const markers = [
    { coords: [31.8113208,-106.5893256], title: "El Paso, TX - 710'344,927 Crossings"},
    { coords: [32.5509161,-117.0685881,14.25], title: "San Ysidro, CA - 748'432,639 Crossings"},
    { coords: [26.0223986,-98.3279917], title: "Hidalgo, TX - 381467149 Crossings"},
    { coords: [27.5460863,-99.7000172], title: "Laredo, TX - 359973509 Crossings"},
    { coords: [42.9055297,-79.4579309], title: "Buffalo-Niagara Falls, NY - 350'115,088 Crossings"},
];

// Loop through the markers array and add each marker to the map
markers.forEach(marker => {
    L.marker(marker.coords) // Create marker with default icon
        .addTo(myMap) // Add the marker to the map
        .bindPopup(marker.title); // Bind a popup with the title to the marker
});


const coloredMarkers = [

    { coords: [29.1863694,-102.9742935], title: "Boquillas, TX - 56 Crossings", color: "red"},
    { coords: [48.9960173,-111.2619554], title: "Whitlash, MT - 41,456 Crossings", color: "red"},
    { coords: [55.371506,-131.7264523], title: "Ketchikan, AK - 90,987 Crossings", color: "red"},
    { coords: [48.8945575,-105.2057244], title: "Whitetail, MT - 105,817 Crossings", color: "red"},
    { coords: [48.4652591,-123.3846092], title: "Friday Harbor, WA - 111,535 Crossings", color: "red"},
              
    
];

coloredMarkers.forEach(marker => {
    L.circleMarker(marker.coords, {
        color: marker.color, // Set the border color
        fillColor: marker.color, // Set the fill color
        fillOpacity: 0.5,
        radius: 15 // Set radius size for the marker
    })
    .addTo(myMap)
    .bindPopup(marker.title);


});








