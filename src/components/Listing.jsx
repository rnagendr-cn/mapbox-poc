import React, { useState, useEffect } from "react"
import withStyles from "react-jss"

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    margin: "5px 0 20px 0",
  },
  item: {
    border: "1px solid black",
    display: "flex",
    flexDirection: "column",
    margin: "10px 0 0 0",
    padding: "5px",
    cursor: "pointer",
  },
  image: {
    width: "20vw",
  },
  title: {
    fontSize: "16px",
    margin: 0,
  },
  subtext: {
    fontSize: "12px",
    margin: 0,
  },
}

const Listing = ({ classes, monthData, setLocationData }) => {
  return (
    <div className={classes.container}>
      {monthData &&
        monthData.map((d) => {
          const { id, data } = d
          return (
            <div
              key={id}
              className={classes.item}
              onClick={() => setLocationData(d)}>
              <img
                className={classes.image}
                src={data.imageUrl}
                alt="location"
              />
              <h6 className={classes.title}>{data.name}</h6>
              <p className={classes.subtext}>{data.travelTime}</p>
              <p className={classes.subtext}>{data.temperature}</p>
            </div>
          )
        })}
    </div>
  )
}

export default withStyles(styles)(Listing)
