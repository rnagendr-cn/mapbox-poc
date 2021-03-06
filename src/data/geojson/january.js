const january = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-13.646758, 29.015947],
      },
      properties: {
        name: "Lanzarote, Canary Islands",
        zoom: 10,
        attractions: {
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              geometry: {
                type: "Point",
                coordinates: [-13.658898, 28.984149],
              },
              properties: {
                name: "Finca Malvasia",
                type: "hotel",
                zoom: 11,
              },
            },
          ],
        },
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-118.2694, 34.0897],
      },
      properties: {
        name: "Silver Lake, Los Angeles",
        zoom: 13.5,
        attractions: {
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              geometry: {
                type: "Point",
                coordinates: [-118.50194, 34.0211],
              },
              properties: {
                name: "Palihouse Santa Monica",
                type: "hotel",
                zoom: 14,
              },
            },
          ],
        },
      },
    },
  ],
}

export default january
