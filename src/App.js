import React, { useState, useEffect } from "react"
import withStyles from "react-jss"
import { Map, Select, Listing, LocationDetails } from "./components"
import { months } from "./data/constants"
import allLocations from "./data/allLocations"

const styles = {
  app: {
    display: "flex",
    height: "100vh",
    width: "100vw",
  },
  sidebarContainer: {
    display: "flex",
    flexDirection: "column",
    width: "30vw",
    padding: "10px",
    overflowY: "scroll",
    borderRight: "2px solid black",
  },
}

function App({ classes }) {
  const [activeMonth, setActiveMonth] = useState("")
  const [monthData, setMonthData] = useState([])
  const [locationData, setLocationData] = useState({})

  const handleClick = (e) => {
    setActiveMonth(e.target.value)
  }

  useEffect(() => {
    if (!activeMonth) return
    if (activeMonth === "") {
      setMonthData([])
      return
    }
    setMonthData(allLocations.find((d) => d.month === activeMonth)?.data)
  }, [activeMonth])

  return (
    <div className={classes.app}>
      <div className={classes.sidebarContainer}>
        {!locationData?.data ? (
          <>
            {" "}
            <Select
              activeMonth={activeMonth}
              handleClick={handleClick}
              data={months}
            />
            <Listing monthData={monthData} setLocationData={setLocationData} />
          </>
        ) : (
          <>
            <button onClick={() => setLocationData({})}>Go back</button>
            <LocationDetails locationData={locationData.data} />
          </>
        )}
      </div>
      <Map
        activeMonth={activeMonth}
        monthData={monthData}
        locationData={locationData}
      />
    </div>
  )
}

export default withStyles(styles)(App)
