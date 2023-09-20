// Specifying the data link
let url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

d3.json(url).then(function(response){
    console.log(response);
    let features = response.features;
    let dataMarkers = [];

    function markerColor(color){
        if (color < 10) return "#333ED4";
        else if (color < 30) return "#2FA236";
        else if (color < 50) return "#A0D636";
        else if (color < 70) return "#EEDE04";
        else if (color < 90) return "#F76915";
        else return "#FD0100";
    }

    // Setting datapoints 
    for (let i = 0; i < features.length; i++){
        let location = features[i].geometry;
        let coordinates = [location.coordinates[1], location.coordinates[0]];
        //Populating the markers array
        dataMarkers.push(
            L.circleMarker(coordinates, {
                weight: 0.5,
                color: "white",
                fillColor: markerColor(features[i].geometry.coordinates[2]),
                radius: (features[i].properties.mag*4),
                fillOpacity: 0.8
            }).bindPopup(`<strong>${features[i].properties.place}</strong><br /><br />Magnitude: ${features[i].properties.mag}<br /><br />Depth: ${features[i].geometry.coordinates[2]}`)
        );
    }; 
    
    // Adding marker overlay
    let markers = L.layerGroup(dataMarkers);
    let overlayMaps = {
        Earthquake: markers
    };

    // Adding base map options
    let street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });
    let topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
    });
    let baseMaps = {
        "Street": street,
        "Topographical": topo
    };
    
    // Creating the map object
    let myMap = L.map("map", {
        center: [38.7128, -94.0059],
        zoom: 4,
        layers: [street, markers]
    });
    L.control.layers(baseMaps, overlayMaps, {
        collapsed: false,
    }).addTo(myMap);
});