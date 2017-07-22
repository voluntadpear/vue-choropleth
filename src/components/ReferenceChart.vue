<template>
    
</template>
<script>
import chroma from 'chroma-js'

export default {
    props: ["colorScale", "title", "min", "max"],
    mounted() {

        let colorScale = this.colorScale
        let referenceTitle = this.title
        let min = this.min
        let max = this.max
        this.mapObject = L.control({
            position: "topright"
        })
        this.mapObject.onAdd = function (map) {
            this._div = L.DomUtil.create('div', 'info') // create a div with a class "info"
            this.update()
            return this._div
        }

        this.mapObject.update = function (argument) {
            let labels = []
            let med = ((min + max) / 2)
            med = Math.round(med * 100) / 100;
            let colors = chroma.scale(colorScale).mode('lch').colors(100)

            let gradiente = '<div class="gradient">';

            for (let color of colors) {
                gradiente += `<span class="grad-step" style="background-color:${color}"></span>`
            }
            gradiente += `
                <span class="domain-min">${min.toString()}</span>
                <span class="domain-med">
                ${med.toString()}
                </span>
                <span class="domain-max">
                ${max.toString()}
                </span>
                </div>`
            this._div.innerHTML = `<span>${referenceTitle}</span><br>` + gradiente
        }

        if (this.$parent._isMounted) {
            this.deferredMountedTo(this.$parent.mapObject)
        }
    },
    methods: {
        deferredMountedTo(parent) {
            this.parent = parent
            this.mapObject.addTo(parent)
        }
    }
}
</script>
<style>
.info.legend span {
    display: block;
}

.gradient {
    width: 95%;
    margin: 0 auto;
    white-space: nowrap;
    position: relative;
    top: 6px;
    padding-bottom: 15px;
}

.grad-step {
    display: inline-block;
    height: 20px;
    width: 1%;
}

.gradient .domain-min {
    position: absolute;
    left: 0;
    font-size: 11px;
    bottom: 3px;
}

.gradient .domain-med {
    position: absolute;
    right: 25%;
    left: 25%;
    text-align: center;
    font-size: 11px;
    bottom: 3px;
}

.gradient .domain-max {
    position: absolute;
    right: 0;
    font-size: 11px;
    bottom: 3px;
}
</style>
