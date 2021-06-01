import React, { useState, useEffect, useRef } from "react"
import withStyles from "react-jss"
import mapboxgl from "!mapbox-gl" // eslint-disable-line import/no-webpack-loader-syntax
import { locationFeatures, US } from "../data/constants"
import { flyTo } from "../utils/mapbox"
import Marker from "../assets/marker.png"
import conditionalStyles from "../data/styles"

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN

const styles = {
  mapContainer: {
    height: "100%",
    width: "70vw",
  },
  marker: {
    border: "none",
    cursor: "pointer",
    height: "30px",
    width: "30px",
    backgroundImage: `url(${Marker})`,
    backgroundSize: "cover",
  },
}

const Map = ({ classes, activeMonth, monthData, locationData }) => {
  const mapContainer = useRef(null)
  const map = useRef(null)

  const [lng, setLng] = useState(US.lng)
  const [lat, setLat] = useState(US.lat)
  const [zoom, setZoom] = useState(US.zoom)

  const [markers, setMarkers] = useState([
    {
      remove: () => {},
    },
  ])

  useEffect(() => {
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    })
  }, [])

  // Update lat, lng and zoom data when user manually interacts with map
  useEffect(() => {
    // Wrapped inside useEffect so that we can get the map.current context
    if (!map.current) return // wait for map to initialize
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4))
      setLat(map.current.getCenter().lat.toFixed(4))
      setZoom(map.current.getZoom().toFixed(2))
    })
  })

  // Runtime styling of map according to month
  useEffect(() => {
    if (!activeMonth) return
    map.current.setStyle(conditionalStyles[activeMonth])
  }, [activeMonth])

  useEffect(() => {
    if (!monthData) return
    // Remove old markers
    markers.forEach((marker) => {
      marker.remove()
    })

    // Add new markers
    const markersList = []
    monthData.forEach((marker) => {
      let el = document.createElement("div")
      el.className = classes.marker

      const mapboxMarker = new mapboxgl.Marker(el)
        .setLngLat(marker.geojson.geometry.coordinates)
        .addTo(map.current)
      markersList.push(mapboxMarker)
    })
    setMarkers(markersList)
  }, [monthData])

  useEffect(() => {
    if (
      Object.keys(locationData).length === 0 &&
      locationData.constructor === Object
    ) {
      flyTo(map)
      return
    }
    flyTo(map, locationData)
    console.log(locationData)
  }, [locationData])

  return <div ref={mapContainer} className={classes.mapContainer} />
}

export default withStyles(styles)(Map)
