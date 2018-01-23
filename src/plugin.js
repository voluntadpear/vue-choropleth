var ChoroplethLayer = require("./components/ChoroplethLayer")
var InfoControl = require("./components/InfoControl")
var ReferenceChart = require("./components/ReferenceChart")

module.exports = {
  install: function(Vue, options) {
    Vue.component("ChoroplethLayer", ChoroplethLayer)
    Vue.component("InfoControl", InfoControl)
    Vue.component("ReferenceChart", ReferenceChart)
  }
}
