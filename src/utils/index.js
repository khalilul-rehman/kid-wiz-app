const DarkenHexColor = ({ hex, percentage = 17.5 }) => {
  const r = parseInt(hex.substr(1, 2), 16)
  const g = parseInt(hex.substr(3, 2), 16)
  const b = parseInt(hex.substr(5, 2), 16)

  const darkenedR = Math.round(r * (1 - percentage / 100))
  const darkenedG = Math.round(g * (1 - percentage / 100))
  const darkenedB = Math.round(b * (1 - percentage / 100))

  return `#${((1 << 24) + (darkenedR << 16) + (darkenedG << 8) + darkenedB).toString(16).slice(1)}`
}

const $ = ({ size = 12, scale = 0.875, numeric = false }) => {
  if (numeric) return size * scale
  return `${size * scale}px`
}

export {
  DarkenHexColor,
  $
}