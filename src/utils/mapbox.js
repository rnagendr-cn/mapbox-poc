import { US } from "../data/constants"

export const flyTo = (mapRef, location) => {
  if (!location) {
    mapRef.current.flyTo({
      center: [US.lng, US.lat],
      zoom: US.zoom,
    })
    return
  }
  const lat = location.geojson.geometry.coordinates[1],
    lng = location.geojson.geometry.coordinates[0],
    zoom = location.geojson.properties.zoom

  mapRef.current.flyTo({
    center: [lng, lat],
    zoom: zoom,
  })
}
