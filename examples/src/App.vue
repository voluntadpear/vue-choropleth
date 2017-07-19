<template>
  <div id="app">
    <ChoroplethMap :data="pyDepartmentsData" titleKey="department_name" idKey="department_id" :value="value" :extraValues="extraValues" geojsonIdKey="dpto" :geojson="geojson" :center="center" :colorScale="colorScale" referenceTitle="Girls school enrolment" dataTitle="Department" dataPlaceholder="Hover over a department" mapStyle="height: 500px;" :zoom="6">
    </ChoroplethMap>
  </div>
</template>

<script>
import ChoroplethMap from 'vue-choropleth'
import { geojson } from './data/py-departments-geojson'
import { pyDepartmentsData } from './data/py-departments-data'

export default {
  name: "app",
  components: { "ChoroplethMap": ChoroplethMap },
  data() {
    return {
      center: [-23.752961, -57.854357],
      pyDepartmentsData,
      geojson,
      colorScale: ["e7d090", "e9ae7b", "de7062"],
      value: {
        key: "amount_w",
        metric: "% girls"
      },
      extraValues: [{
        key: "amount_m",
        metric: "% boys"
      }]
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
