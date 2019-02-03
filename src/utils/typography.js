import Typography from "typography"
import Parnassus from "typography-theme-parnassus"

Parnassus.overrideThemeStyles = () => {
  return {
    "h1, h2, h3": {
      fontFamily: `Merriweather`,
      fontWeight: `700`
    },
  }
}

// delete Wordpress2016.googleFonts

const typography = new Typography(Parnassus)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
