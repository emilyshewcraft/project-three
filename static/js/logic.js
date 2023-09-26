// Specifying the data link
let incident_url = "http://127.0.0.1:5000/incident";
let victim_url = "http://127.0.0.1:5000/victim";
let shooter_url = "http://127.0.0.1:5000/shooter";
let weapon_url = "http://127.0.0.1:5000/weapon";

// INCIDENT LAYER
d3.json(incident_url).then(function(response){
    console.log(response);
    let dataMarkers = [];

    function markerColor(school){
        if (school == "Elementary") return "#F9F871";
        else if (school == "Middle") return "#FFC75F";
        else if (school == "Junior High") return "#FF9671";
        else if (school == "High") return "#FF6F91";
        else if (school == "K-12") return "#D65DB1";
        else if (school == "K-8") return "#845EC2";
        else return "#00C9A7";
    }

    // Setting datapoints 
    for (let i = 0; i < response.length; i++){
        let coordinates = [response[i].City_Lat, response[i].City_Lon];
        //Populating the markers array
        dataMarkers.push(
            L.circleMarker(coordinates, {
                weight: 0.5,
                color: "white",
                fillColor: markerColor(response[i].School_Level),
                radius: 7,
                fillOpacity: 0.8
            }).bindPopup(`<strong>${response[i].City}</strong><br /><br />School: ${response[i].School}<br /><br />Date: ${response[i].Date}`)
        );
    }; 
    
    // Adding marker overlay
    let markers = L.layerGroup(dataMarkers);
    let overlayMaps = {
        Incidents: markers
    };

    // Adding base map option
    let street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });
    let baseMaps = {
        "Street": street,
    };
    
    // Creating the map object
    let myMap = L.map("map", {
        center: [38.7128, -94.0059],
        zoom: 5,
        layers: [street, markers]
    });  

    L.control.layers(baseMaps, overlayMaps, {
        collapsed: false,
    }).addTo(myMap);  

    // Creating the legend
    let legend = L.control({position: "bottomright"});
    legend.onAdd = function() {
        let div = L.DomUtil.create("div", "info legend");
        let group = ["Elementary", "Middle", "Junior High", "High", "K-12", "K-8", "Other"];
        let category = ["Elementary", "Middle", "Junior High", "High", "K-12", "K-8", "Other"];
        let labels = [];
    
        //Populate labels array
        for (let i = 0; i < category.length; i++){
            div.innerHTML +=
            labels.push(
                '<li style=\"background-color:' + markerColor(category[i]) + '\"></i>' + (group[i] ? group[i] : '+'));
        }
        div.innerHTML = '<ul style="list-style-type: none;">' + labels.join('<br>') + "</ul>";
        return div;
        };
        legend.addTo(myMap);

});

