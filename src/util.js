import chroma from "chroma-js"

export const validNumber = num => !(isNaN(num) ||
num == null ||
num == undefined ||
// for our use case, we don't consider Infinity a valid number
num == Infinity ||
num == -Infinity)

export const getMin = (array, key) =>
  Math.min(...array.filter(x => validNumber(x[key])).map(x => Number(x[key])))

export const getMax = (array, key) =>
  Math.max(...array.filter(x => validNumber(x[key])).map(x => Number(x[key])))

export const normalizeValue = (value, min, max) => (value - min) / (max - min)

export const getColor = (param, colorScale, min, max) => 
    chroma
    .scale(colorScale)
    .mode("lch")(normalizeValue(param, min, max))
    .hex()
