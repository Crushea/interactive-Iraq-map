// Initialize the map and set its view to Kirkuk's coordinates (as the main location)
var map = L.map('map').setView([35.4681, 44.3922], 6); // Centered on Kirkuk

// Add the tile layer from OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Array of sales points with coordinates and names for the cities you requested
var salePoints = [
    {coords: [35.4681, 44.3922], name: "مركز مبيعات كركوك"}, // Kirkuk (Main Point)
    {coords: [33.3152, 44.3661], name: "مركز مبيعات بغداد"}, // Baghdad
    {coords: [36.34, 43.13], name: "مركز مبيعات الموصل"}, // Mosul
    {coords: [30.5086, 47.7801], name: "مركز مبيعات البصرة"}, // Basra
    {coords: [35.6133, 45.9886], name: "مركز مبيعات كلار"}, // Kalar
    {coords: [31.9877, 44.9249], name: "مركز مبيعات الديوانية"}, // Diwaniya
    {coords: [33.4206, 43.3077], name: "مركز مبيعات الرمادي"} // Ramadi
];

// Loop through the sales points and add them as markers on the map
salePoints.forEach(function(point) {
    var marker = L.marker(point.coords).addTo(map);

    // Show the sales point name when hovering over the marker
    marker.on('mouseover', function() {
        marker.bindPopup(point.name).openPopup();
    });

    // Close the popup when the mouse leaves
    marker.on('mouseout', function() {
        marker.closePopup();
    });
});
