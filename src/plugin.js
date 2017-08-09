var component = require("./components/ChoroplethMap")

module.exports = {
    install: function(Vue, options) {
        Vue.component('ChoroplethMap', component)
    }
}