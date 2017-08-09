var ChoroplethMap = require("./components/ChoroplethMap")
var InfoControl = require("./components/InfoControl")
var ReferenceChart = require("./components/ReferenceChart")

module.exports = {
  install: function(Vue, options) {
    Vue.component("ChoroplethMap", ChoroplethMap)
    Vue.component("InfoControl", InfoControl)
    Vue.component("ReferenceChart", ReferenceChart)
  }
}
