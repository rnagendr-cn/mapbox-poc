import { januaryLocations, februaryLocations } from "./monthwiseLocations"
import janGeojson from "./geojson/january"
import febGeojson from "./geojson/february"
import { formatFullData } from "../utils/helper"

const allLocations = [
  {
    month: "January",
    data: formatFullData(januaryLocations, janGeojson),
  },
  {
    month: "February",
    data: formatFullData(februaryLocations, febGeojson),
  },
]

export default allLocations
