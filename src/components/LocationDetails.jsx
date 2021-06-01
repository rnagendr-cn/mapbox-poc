import React, { useState, useEffect, useRef } from "react"
import withStyles from "react-jss"

const styles = {
  container: {
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    marginBottom: "20px",
  },
  image: {
    marginBottom: "10px",
  },
  title: {
    margin: "10px 0",
    fontSize: "16px",
  },
  description: {
    margin: "5px 0",
    fontSize: "12px",
  },
  link: { textDecoration: "none", color: "black" },
}

const LocationDetails = ({ classes, locationData }) => {
  const sections = (section) => {
    if (section && section.description) {
      if (section.link) {
        if (section.title) {
          return (
            <a
              className={classes.link}
              href={section.link}
              target="_blank"
              rel="noreferrer">
              <p className={classes.description}>
                <span style={{ fontWeight: "bold" }}>{section.title}</span>:
                {section.description}
              </p>
            </a>
          )
        } else {
          return (
            <a
              className={classes.link}
              href={section.link}
              target="_blank"
              rel="noreferrer">
              <p className={classes.description}>{section.description}</p>
            </a>
          )
        }
      } else return <p className={classes.description}>{section.description}</p>
    }
  }

  return (
    <div className={classes.container}>
      <h3 className={classes.title}>{locationData.name}</h3>
      <img
        className={classes.image}
        src={locationData.imageUrl}
        alt={locationData.name}
      />
      {sections(locationData.section1)}
      {sections(locationData.section2)}
      {sections(locationData.section3)}
    </div>
  )
}

export default withStyles(styles)(LocationDetails)
