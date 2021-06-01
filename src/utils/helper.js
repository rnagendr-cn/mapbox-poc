export const formatLocationsData = (data) => {
  return data.map((d, i) => ({
    ...d,
    id: i,
    selected: false,
  }))
}

export const formatFullData = (data, json) => {
  return data.map((data, i) => {
    // console.log(json)
    const geojson = json.features.find((d) => d.properties.name === data.name)
    return {
      id: i,
      data,
      geojson,
    }
  })
}
