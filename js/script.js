(function(){

  var username = 'adrian';



  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDxiV9MhgYqV4VHwse-d94t0yikuvhtqtI",
    authDomain: "scenic-spots.firebaseapp.com",
    databaseURL: "https://scenic-spots.firebaseio.com",
    projectId: "scenic-spots",
    storageBucket: "scenic-spots.appspot.com",
    messagingSenderId: "148448140954"
  };
  firebase.initializeApp(config);

  var firebaseRef = firebase.database().ref().push();

  var geoFire = new GeoFire(firebaseRef);








  displayMap();

  function displayMap() {
    var city;
    const version = '?v=20170901'
    const clientid = '&client_id=4HLUBBPKV5WMSV24VMTVWA44LVSV1TQENTFUNETMJRVZAPVH'
    const clientSecret = '&client_secret=T0S3T3XZ5JKIJYI31QDPLPF5JVEWCGHWVNRLA1GUFN5ZVK0D'
    const apiKey = version +clientid+ clientSecret;
    var doneCities = [];
    var map = L.map("map", {
        zoomControl: false,
        minZoom: 16
        //... other options
    });



    var getLocation = function() {
      if (typeof navigator !== "undefined" && typeof navigator.geolocation !== "undefined") {
      console.log("getting location");
      navigator.geolocation.getCurrentPosition( geolocationCallback);
      map.locate({setView: true, maxZoom: 16});
    } else {
        console.log("rats.")
    }
  };

  var geolocationCallback = function(location) {
    var latitude = location.coords.latitude;
    var longitude = location.coords.longitude;
    console.log("you are here i think: [" + latitude + ", " + longitude + "]");


    geoFire.set(username, [latitude, longitude]).then(function() {
      console.log( username + " found");


      firebaseRef.child(username).onDisconnect().remove();



    });
  };

  map.on('locationfound', onLocationFound);

  function onLocationFound(e) {
    var radius = e.accuracy * 5;

    L.marker(e.latlng).addTo(map)
        .bindPopup( username + "'s position").openPopup();

    L.circle(e.latlng, radius).addTo(map);
  }

    doMapThings();
    // Get the current user's location
    getLocation();

    function doMapThings(city) {
              var corner1 = L.latLng(-36.815135, 174.716778),
                  corner2 = L.latLng(-36.912724, 174.816856),
                  bounds = L.latLngBounds(corner1, corner2);

                map.setMaxBounds(bounds);

                  var lat = -36.848461
                  var lon = 174.763336
    							var fetchVenues = fetch('https://api.foursquare.com/v2/venues/search' + apiKey+'&ll='+ lat + ',' + lon + '&limit=50')
    									.then(function(response){
    									return response.json();
    								});

    								fetchVenues.then(function(response){

    										var venues = response.response.venues;
    										var center = [lat, lon];

    										map.setView(center, 14);

    										L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibmFpdnZpIiwiYSI6ImNqNmxncmoyMjFyZGMyeG1xN3Yyejk4dHIifQ.O7Bby6q1Jbn8v9ANa4_P5w', {foo: 'bar'}).addTo(map);
    										L.circle(center, {radius: 2500, fill: false, color: '#000'}).addTo(map);

    								});
    					}
  }

})();
