var ChoroplethLayer = require("./components/ChoroplethLayer")
var InfoControl = require("./components/InfoControl")
var ReferenceChart = require("./components/ReferenceChart")

module.exports = {
  install: function(Vue, options) {
    Vue.component("v-choropleth-layer", ChoroplethLayer)
    Vue.component("v-info-control", InfoControl)
    Vue.component("v-reference-chart", ReferenceChart)
  }
}
