<template>
  <div id="app">
    <v-map :center="[-23.752961, -57.854357]" :zoom="6" style="height: 500px;" :options="mapOptions">
      <v-choropleth-layer :data="pyDepartmentsData" titleKey="department_name" idKey="department_id" :value="value" :extraValues="extraValues" geojsonIdKey="dpto" :geojson="paraguayGeojson" :colorScale="colorScale">
        <template slot-scope="props">
          <v-info-control :item="props.currentItem" :unit="props.unit" title="Department" placeholder="Hover over a department"/>
          <v-reference-chart title="Girls school enrolment" :colorScale="colorScale" :min="props.min" :max="props.max" position="topright"/>
        </template>
      </v-choropleth-layer>
    </v-map>
  </div>
</template>

<script>
import { InfoControl, ReferenceChart, ChoroplethLayer } from 'vue-choropleth'

import { geojson } from './data/py-departments-geojson'
import paraguayGeojson from './data/paraguay.json'
import { pyDepartmentsData } from './data/py-departments-data'
import Vue2Leaflet from 'vue2-leaflet';

export default {
  name: "app",
  components: { 
    'v-map': Vue2Leaflet.Map,
    'v-info-control': InfoControl, 
    'v-reference-chart': ReferenceChart, 
    'v-choropleth-layer': ChoroplethLayer 
  },
  data() {
    return {
      pyDepartmentsData,
      paraguayGeojson,
      colorScale: ["e7d090", "e9ae7b", "de7062"],
      value: {
        key: "amount_w",
        metric: "% girls"
      },
      extraValues: [{
        key: "amount_m",
        metric: "% boys"
      }],
      mapOptions: {
        attributionControl: false
      }
    }
  },
}
</script>
<style>
@import "../node_modules/leaflet/dist/leaflet.css";
body {
  background-color: #e7d090;
  margin-left: 100px;
  margin-right: 100px;
}

#map {
  background-color: #eee;
}
</style>
