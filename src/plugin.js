var ChoroplethLayer = require("./components/ChoroplethLayer")
var InfoControl = require("./components/InfoControl")
var ReferenceChart = require("./components/ReferenceChart")

module.exports = {
  install: function(Vue, options) {
    Vue.component("l-choropleth-layer", ChoroplethLayer)
    Vue.component("l-info-control", InfoControl)
    Vue.component("l-reference-chart", ReferenceChart)
  }
}
