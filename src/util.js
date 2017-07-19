import chroma from "chroma-js"

export const getMin = (array, key) =>
  Math.min(...array.map(x => Number(x[key])))

export const getMax = (array, key) =>
  Math.max(...array.map(x => Number(x[key])))

export const normalizeValue = (value, min, max) => (value - min) / (max - min)

export const getColor = (param, colorScale, min, max) =>
  chroma.scale(colorScale).mode("lch")(normalizeValue(param, min, max)).hex()
