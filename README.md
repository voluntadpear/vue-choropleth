# vue-choropleth
<a href="https://www.npmjs.com/package/vue-choropleth"><img src="https://img.shields.io/npm/dt/vue-choropleth.svg" alt="Downloads"></a>
<a href="https://www.npmjs.com/package/vue-choropleth"><img src="https://img.shields.io/npm/v/vue-choropleth.svg" alt="Version"></a>
<a href="https://www.npmjs.com/package/vue-choropleth"><img src="https://img.shields.io/npm/l/vue-choropleth.svg" alt="License"></a>
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/voluntadpear/ChoroplethMap/issues)

> Vue component to display a choropleth map given a certain GeoJSON and another datasource to show information from. Using [Vue2Leaflet](https://korigan.github.com/Vue2Leaflet/)

![Image of Paraguay Choropleth](https://i.imgur.com/J0hodJN.jpg)

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
    referenceTitle="Girls school enrolment" 
    dataTitle="Department" 
    dataPlaceholder="Hover over a department"
    :center="center" 
    :colorScale="colorScale"
    mapStyle="height: 500px;">
    </ChoroplethMap>
```

### Props
* **geojson**: The GeoJSON object to use (currently it needs to be an JS object as shown on the example)
* **data**: Data object with the information to show on the map
* **titleKey**: Property of the **data** object to show when you hover over a certain region of your map (e.g. state_name)
* **geojsonIdKey**: Property under the *properties* array of the GeoJSON that serves as identifier of each region of the map.
* **idKey**: Property of the **data** object that matches the **geojsonIdKey** value.
* **value**: JS object with two properties, **key**: that maps to the **data** property that contains the value domain set (e.g. amount) and **metric**: that maps to the **data** property that describes the unit that you're working on (e.g. ```"% of students"```)
* **extraValues**: Array of **value** objects that show additional information of a certain region of the map.
* **referenceTitle**: Short description to show as reference of the information described by the map (e.g. ```"Population density"```)
* **dataTitle**: Description about what each item of the map is (e.g. ```"State"```)
* **dataPlaceholder**: Placeholder text to show when no element is currently selected
* **center**: Geographic coordinates of the map initial center (e.g. ```[-23.752961, -57.854357]```)
* **colorScale**: Array of hex color codes to fill each region of the map with. At the minimum you need to specify two colors, the one to use with the lowest values and another one to use with the highest values. (e.g. ```["e7d090", "de7062"]```)
* **mapStyle**: CSS style of the map.

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
$ cd examples
$ npm link vue-choropleth
$ npm install
# serve with hot reload at localhost:8080
$ npm run dev
```
Go to <http://localhost:8080/> to see the demo

NOTE: If you make changes to the library you should run 'npm run build' again in the root folder.
The dev server should detect modification and reload the demo
## Authors

Guillermo Peralta Scura

Thanks to the works of Mickaël Bouchaud with [Vue2Leaflet](https://raw.githubusercontent.com/KoRiGaN/Vue2Leaflet)