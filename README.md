# vue-choropleth

> Vue component to display a choropleth map given a certain GeoJSON and another datasource to show information from. Using [Vue2Leaflet](https://korigan.github.com/Vue2Leaflet/)

![Image of Paraguay Choropleth](https://i.imgur.com/J0hodJN.jpg)

## How to use

Register ChoroplethMap as a component
``` javascript
import ChoroplethMap from 'vue-choropleth'

Vue.component(ChoroplethMap);
``` 

Make sure the leaflet.css is included, either via a HTML link tag or in your vue component style

``` css
@import "~leaflet/dist/leaflet.css";
```
