var link = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";
var myMap = L.map("map", {
    center: [47.1164, -101.2996],
    zoom: 3
  });

function chooseColor(mag){
    if(mag < 0){
        return "#e6e8cf";
    }else if(mag >=0 && mag < 1){
        return "#e8eb34";
    }else if(mag >= 1 && mag < 2){
        return "#ebd634";
    }else if(mag >= 2 && mag < 3){
        return "#b7eb34";
    }else if(mag >= 3 && mag <4){
        return "#4feb34";
    }else if(mag >= 4 && mag <5){
        return "#eba234";
    }else{
        return "#eb3d34";
    }
};


function chooseMag(mag){
    if(mag < 0){
        return 5
    }else if(mag >=0 && mag < 1){
        return  6
    }else if(mag >= 1 && mag < 2){
        return 7;
    }else if(mag >= 2 && mag < 3){
        return 8;
    }else if(mag >= 3 && mag <4){
        return 9;
    }else if(mag >= 4 && mag <5){
        return 10;
    }else{
        return 11;
    }
};

L.tileLayer("https://api.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
maxZoom: 18,
id: "mapbox.light",
accessToken: API_KEY
}).addTo(myMap);

