import React from 'react'
import ReactToggle from 'react-toggle'
import useDarkMode from 'use-dark-mode'

const styles = {
  icon: {
    fontSize: 14,
    position: 'absolute',
    top: 5,
    right: 0,
  },
}

const Moon = () => (
  <div style={styles.icon}>
    <span role="img" aria-label="dark-mode">
      🌚
    </span>
  </div>
)

const Sun = () => (
  <div style={{ ...styles.icon, left: 0 }}>
    <span role="img" aria-label="light-mode">
      🌞
    </span>
  </div>
)

const Toggle = () => {
  const theme = useDarkMode(false)

  return (
    <label htmlFor="themeToggle">
      <ReactToggle
        id="themeToggle"
        name="themeToggle"
        checked={theme.value}
        icons={{
          checked: <Moon />,
          unchecked: <Sun />,
        }}
        onChange={theme.toggle}
      />
    </label>
  )
}

export default Toggle
