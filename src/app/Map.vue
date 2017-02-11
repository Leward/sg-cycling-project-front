<template>
  <div class="parking-map-page app-shell">
    <header>
      <router-link to="/">
        <span class="glyphicon glyphicon-arrow-left" aria-hidden="true"></span>
      </router-link>
      <h1>Parking Map</h1>
    </header>
    <!--<content>-->
    <div id="mapid" class="content"></div>
    <!--</content>-->
  </div>
</template>

<script>
  import Leaflet from "leaflet";
  import "leaflet/dist/leaflet.css";
  export default {
    name: 'Hello',
    data() {
      return {
        hello: 'Hello World!'
      };
    },
    created() {
      console.log('Init');
      console.log(this);
      console.log(this.$el);

    },
    mounted() {
      console.log('ready');
      const maxNorthWest = Leaflet.latLng(1.4574119, 103.9598659);
      const maxSouthWest = Leaflet.latLng(1.2962063, 103.788705);
      const singaporeBounds = Leaflet.bounds(maxNorthWest, maxSouthWest);
      const map = Leaflet
        .map('mapid')
        .setView([1.300270, 103.851959], 12);

      L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoibGV3YXJkIiwiYSI6Ikw5VlpUOW8ifQ.D_XMsV1J5Kfj2KLtAJVR5Q'
      }).addTo(map);
    }
  };
</script>
