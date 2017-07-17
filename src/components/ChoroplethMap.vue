<template>
    <v-map id="map" :zoom="zoom" :center="center" style="height: 500px">
        <v-geojson-layer :geojson="geojson" :options="geojsonOptions"></v-geojson-layer>
        <InfoControl :data="currentItem" :unit="value.metric" :title="dataTitle" :placeholder="dataPlaceholder"></InfoControl>
        <ReferenceChart :colorScale="colorScale" :title="referenceTitle" :min="min" :max="max"></ReferenceChart>
    </v-map>
</template>

<script>
import InfoControl from './InfoControl.vue'
import ReferenceChart from './ReferenceChart.vue'
import Vue2Leaflet from 'vue2-leaflet'
import chroma from 'chroma-js'

function mouseover({ target }) {
    target.setStyle({
        weight: 5,
        color: "#666",
        dashArray: ""
    })


    if (!L.Browser.ie && !L.Browser.opera) {
        target.bringToFront()
    }

    let geojsonItem = target.feature.properties

    let item = this.data.find(x => x[this.idKey] === Number(geojsonItem[this.geojsonIdKey]))
    let tempItem = { name: item[this.titleKey], value: item[this.value.key] }
    if (this.extraValues) {
        let tempValues = [];
        for (let x of this.extraValues) {
            tempValues.push({
                value: item[x.key],
                metric: x.metric
            })
        }
        tempItem = { ...tempItem, extraValues: tempValues }
    }
    this.currentItem = tempItem
}

function mouseout({ target }) {
    target.setStyle({
        weight: 2,
        color: "#FFF",
        dashArray: ""
    })
    this.currentItem = { name: "", value: 0 }
}

const getMin = (array, key) => Math.min(...array.map(x => Number(x[key])))

const getMax = (array, key) => Math.max(...array.map(x => Number(x[key])))


const normalizeValue = (value, min, max) =>
    (value - min) / (max - min)

const getColor = (param, colorScale, min, max) =>
    chroma
        .scale(colorScale)
        .mode("lch")
        (normalizeValue(param, min, max)).hex()

export default {
    props: [
        "geojson",
        "data",
        "center",
        "colorScale",
        "titleKey",
        "idKey",
        "value",
        "extraValues",
        "geojsonIdKey",
        "referenceTitle",
        "dataTitle",
        "dataPlaceholder"
    ],
    data() {
        return {
            zoom: 6,
            currentItem: { name: "", value: 0 },
            geojsonOptions: {
                style: feature => {
                    let itemGeoJSONID = Number(feature.properties[this.geojsonIdKey])
                    let color = "NONE"
                    let item = this.data.find(x => x[this.idKey] === itemGeoJSONID)
                    if (!item) {
                        return {
                            color: "white",
                            weight: 2
                        }
                    }
                    // let canH = dpto.cantidad_h
                    let valueParam = item[this.value.key]
                    let min = this.min
                    let max = this.max
                    return {
                        weight: 2,
                        opacity: 1,
                        color: "white",
                        dashArray: "3",
                        fillOpacity: 0.7,
                        fillColor: getColor(valueParam, this.colorScale, min, max)
                    }
                },
                onEachFeature: (feature, layer) => {
                    layer.on({
                        mouseover: mouseover.bind(this),
                        mouseout: mouseout.bind(this)
                    })
                },
            },
        }
    },
    computed: {
        min() {
            return getMin(this.data, this.value.key)
        },
        max() {
            return getMax(this.data, this.value.key)
        }
    },
    components: {
        "v-map": Vue2Leaflet.Map,
        "v-geojson-layer": Vue2Leaflet.GeoJSON,
        'v-tilelayer': Vue2Leaflet.TileLayer,
        InfoControl,
        ReferenceChart
    }
}
</script>