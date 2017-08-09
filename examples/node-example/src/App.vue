<template>
  <div id="app">
    <ChoroplethMap :data="pyDepartmentsData" titleKey="department_name" idKey="department_id" :value="value" :extraValues="extraValues" geojsonIdKey="dpto" :geojson="paraguayGeojson" :center="center" :colorScale="colorScale" mapStyle="height: 500px;" :zoom="6" :mapOptions="mapOptions">
      <template scope="props">
        <InfoControl :item="props.currentItem" :unit="props.unit" title="Department" placeholder="Hover over a department"></InfoControl>
        <ReferenceChart title="Girls school enrolment" :colorScale="colorScale" :min="props.min" :max="props.max" position="topright"></ReferenceChart>
      </template>
    </ChoroplethMap>
  </div>
</template>

<script>
import { ChoroplethMap, InfoControl, ReferenceChart } from 'vue-choropleth'
import { geojson } from './data/py-departments-geojson'
import paraguayGeojson from './data/paraguay.json'
import { pyDepartmentsData } from './data/py-departments-data'

export default {
  name: "app",
  components: { ChoroplethMap, InfoControl, ReferenceChart },
  data() {
    return {
      center: [-23.752961, -57.854357],
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
  }
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
