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
  import {defaultIcon, singaporeCenterCoords} from "../constants/Leaflet.constants";

  export default {
    name: 'Hello',
    data() {
      return {
        hello: 'Hello World!'
      };
    },
    mounted() {
      const map = Leaflet
        .map('mapid')
        .setView(singaporeCenterCoords, 12);

      Leaflet.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoibGV3YXJkIiwiYSI6Ikw5VlpUOW8ifQ.D_XMsV1J5Kfj2KLtAJVR5Q'
      }).addTo(map);

      Leaflet
        .marker([1.2787601, 103.8515975], {icon: defaultIcon})
        .addTo(map);
    }
  };
</script>
