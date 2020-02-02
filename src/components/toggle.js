import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import ReactToggle from 'react-toggle'

import './toggle.css'

const styles = {
  icon: {
    fontSize: 14,
    position: 'absolute',
    top: 5,
    right: 0,
  },
}

const Moon = () => <div style={styles.icon}>🌚</div>
const Sun = () => <div style={{ ...styles.icon, left: 0 }}>🌞</div>

// side effect to prevent rerenders after switching pages
let lastTheme

const Toggle = () => {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => {
        const checked = (theme ? theme : lastTheme) === 'dark'

        lastTheme = theme

        return (
          <label>
            <ReactToggle
              checked={checked}
              icons={{
                checked: <Moon />,
                unchecked: <Sun />,
              }}
              onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
            />
          </label>
        )
      }}
    </ThemeToggler>
  )
}

export default Toggle
