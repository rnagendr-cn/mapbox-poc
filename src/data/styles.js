export const styles = {
  winterLight: process.env.REACT_APP_WINTER_LIGHT,
  winterMedium: process.env.REACT_APP_WINTER_MEDIUM,
  winterDark: process.env.REACT_APP_WINTER_DARK,
  summerLight: process.env.REACT_APP_SUMMER_LIGHT,
  summerMedium: process.env.REACT_APP_SUMMER_MEDIUM,
  summerDark: process.env.REACT_APP_SUMMER_DARK,
}

const conditionalStyles = {
  January: styles.winterDark,
  February: styles.winterMedium,
  March: styles.winterLight,
  April: styles.summerLight,
  May: styles.summerMedium,
  June: styles.summerDark,
  July: styles.summerDark,
  August: styles.summerMedium,
  September: styles.summerLight,
  October: styles.winterLight,
  November: styles.winterMedium,
  December: styles.winterDark,
}

export default conditionalStyles
