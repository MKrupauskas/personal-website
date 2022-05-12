import Typography from 'typography'
import Wordpress2016 from 'typography-theme-wordpress-2016'

Wordpress2016.overrideThemeStyles = () => {
  return {
    'a.gatsby-resp-image-link': {
      boxShadow: `none`,
    },
    a: {
      color: 'var(--primary)',
      transition: 'color 300ms',
    },
    'a:hover, a:active': {
      color: 'var(--secondary)',
    },
  }
}

delete Wordpress2016.googleFonts

const typography = new Typography(Wordpress2016)

export default typography

export const rhythm = typography.rhythm
export const scale = typography.scale
