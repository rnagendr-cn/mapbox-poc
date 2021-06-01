import React from "react"

const Select = ({ activeMonth, handleClick, data }) => {
  return (
    <>
      <label htmlFor="month">Select month</label>
      <select
        id="month"
        value={activeMonth}
        autoFocus={true}
        onChange={handleClick}>
        {data.map((month, i) => (
          <option key={i} value={month}>
            {month}
          </option>
        ))}
      </select>
    </>
  )
}

export default Select
