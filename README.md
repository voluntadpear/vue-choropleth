# vue-choropleth
<a href="https://www.npmjs.com/package/vue-choropleth"><img src="https://img.shields.io/npm/dt/vue-choropleth.svg" alt="Downloads"></a>
<a href="https://www.npmjs.com/package/vue-choropleth"><img src="https://img.shields.io/npm/v/vue-choropleth.svg" alt="Version"></a>
<a href="https://www.npmjs.com/package/vue-choropleth"><img src="https://img.shields.io/npm/l/vue-choropleth.svg" alt="License"></a>
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/voluntadpear/ChoroplethMap/issues)

> Vue component to display a choropleth map given a certain GeoJSON and another datasource to show information from. Using [Vue2Leaflet](https://korigan.github.com/Vue2Leaflet/)

![Image of Paraguay Choropleth](https://media.giphy.com/media/3ohzh15YwfUVpAWsJq/giphy.gif)

## How to use

Register ChoroplethMap as a component
``` javascript
import ChoroplethMap from 'vue-choropleth'

Vue.component(ChoroplethMap)
``` 

Make sure the leaflet.css is included, either via a HTML link tag or in your vue component style

``` css
@import "~leaflet/dist/leaflet.css";
```

On the template:
```html
<ChoroplethMap   
    :geojson="geojson"
    :data="pyDepartmentsData" 
    titleKey="department_name"
    geojsonIdKey="dpto"
    idKey="department_id" 
    :value="value" 
    :extraValues="extraValues" 
    :center="center" 
    :colorScale="colorScale"
    mapStyle="height: 500px;"
    :zoom="6" 
    :mapOptions="mapOptions">
    <template scope="props">
        <InfoControl 
            :item="props.currentItem" 
            :unit="props.unit" 
            title="Department" 
            placeholder="Hover over a department"
            position="topright">
        </InfoControl>
        <ReferenceChart 
            title="Girls school enrolment" 
            :colorScale="colorScale" 
            :min="props.min" 
            :max="props.max" 
            position="bottomright">
        </ReferenceChart>
    </template>
</ChoroplethMap>
```

### ChoroplethMap Props
* **geojson**: The GeoJSON object to use
* **data**: Data object with the information to show on the map
* **titleKey**: Property of the **data** object to show when you hover over a certain region of your map (e.g. state_name)
* **geojsonIdKey**: Property under the *properties* array of the GeoJSON that serves as identifier of each region of the map.
* **idKey**: Property of the **data** object that matches the **geojsonIdKey** value.
* **value**: JS object with two properties, **key**: that maps to the **data** property that contains the value domain set (e.g. amount) and **metric**: that maps to the **data** property that describes the unit that you're working on (e.g. ```"% of students"```)
* **extraValues**: Array of **value** objects that show additional information of a certain region of the map.
* **center**: Geographic coordinates of the map initial center (e.g. ```[-23.752961, -57.854357]```)
* **colorScale**: Array of hex color codes to fill each region of the map with. At the minimum you need to specify two colors, the one to use with the lowest values and another one to use with the highest values. (e.g. ```["e7d090", "de7062"]```)
* **mapStyle**: CSS style of the map.
* **zoom**: With how much zoom to init the map.
* **mapOptions**: Additional leaflet Map options. (e.g. ```{attributionControl: false}```)

The `ChoroplethMap` component pass the this information through its [default slot](https://vuejs.org/v2/guide/components.html#Scoped-Slots):
* **currentItem**: Current item on focus
* **unit**: metric associated with the value
* **min**: The lowest value on the domain set
* **max**: The highest value on the domain set

As seen on the example, usually you'll pass these values to the `InfoControl` and `ReferenceChart` components.

### InfoControl props
This is the current item information view.
* **item**: Item to show information about
* **unit**: Metric to use while displaying information
* **title**: Description about what each item of the map is (e.g. ```"State"```)
* **placeholder**: Placeholder text to show when no element is currently selected
* **position**: Where to render the component. With values allowed [here](http://leafletjs.com/reference-1.2.0.html#control-position) (default: ```"bottomleft"```)

### ReferenceChart props
* **title**: Short description to show as reference of the information described by the map (e.g. ```"Population density"```)
* **colorScale**: Same prop as used on `ChoroplethMap` component
* **min**: The lowest value represented on the visualization
* **max**: The highest value represented on the visualization
* **position**: Where to render the component. With values allowed [here](http://leafletjs.com/reference-1.2.0.html#control-position) (default: ```"topright"```)


## How to install
### NPM
``` bash
$ npm install vue-choropleth --save
```
### yarn
``` bash
$ yarn add vue-choropleth
```

## Live Demo
Example available [here](http://educacionporgeneros.herokuapp.com/).

## Build Setup

``` bash
# Once you have cloned this repo, install dependencies
$ npm install

# build for development and production with minification
$ npm run build

```

## Run demo locally
``` bash
# Run demo at localhost:8080
$ npm link
$ cd examples/node-example
$ npm link vue-choropleth
$ npm install
# serve with hot reload at localhost:8080
$ npm run dev
```
Go to <http://localhost:8080/> to see the demo

NOTE: If you make changes to the library you should run 'npm run build' again in the root folder.
The dev server should detect modification and reload the demo

### Web example

You'll also find an example using direct `<script>` include under `examples/browser-example`
## Authors

Guillermo Peralta Scura

Thanks to the works of Mickaël Bouchaud with [Vue2Leaflet](https://raw.githubusercontent.com/KoRiGaN/Vue2Leaflet)