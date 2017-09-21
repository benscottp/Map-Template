$(function(){


  var config = {
      apiKey: "AIzaSyDxiV9MhgYqV4VHwse-d94t0yikuvhtqtI",
      authDomain: "scenic-spots.firebaseapp.com",
      databaseURL: "https://scenic-spots.firebaseio.com",
      projectId: "scenic-spots",
      storageBucket: "scenic-spots.appspot.com",
      messagingSenderId: "148448140954"
    };
    firebase.initializeApp(config);

















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

doMapThings();

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

									// for (let i = 0; i<venues.length; i++) {
                  //
									// 	let venue = venues[i];
									// 	let venueName = venue.name;
									// 	let venueAddress = venue.location.address;
									// 	let iconUrl;
									// 	let iconName;
                  //
									// 		if (venue.categories[0] != null) {
									// 			let icon = venue.categories[0].icon
									// 				let iconPrefix = icon.prefix;
									// 				let iconsuffix = icon.suffix;
									// 				iconName = venue.categories[0].name;
									// 				iconUrl =  iconPrefix + '64' + iconsuffix;
									// 		}
                  //
									// 	let venuelocation = [venue.location.lat, venue.location.lng];
                  //
									// 			venueMapIcon = L.divIcon({
									// 				className: 'venue__Marker',
									// 				iconSize: [30,30],
                  //
									// 				html: '<div></div><div></div>',
                  //
									// 			});
                  //
									// 	popup = "<div class=popup>" + ' <p> ' + venueName + '</p>' + '<p> ' + iconName + " </p></div>";
									// 		let marker = L.marker(venuelocation, {icon:venueMapIcon}).addTo(map).bindPopup(popup, {className: 'popupbox'}).openPopup();
									// 			marker.getElement().style.backgroundImage = "url("+iconUrl+")";
                  //
									// map.closePopup();


								});
					}
});
