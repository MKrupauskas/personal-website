import React from 'react'
import { CONFIG } from '../config'
import { rhythm } from '../utils/typography'
import Icon from './icon'

const Footer = () => {
  const { author, social } = CONFIG

  return (
    <footer style={{ marginTop: rhythm(1) }}>
      <ul
        style={{
          display: 'flex',
          margin: 0,
          listStyle: 'none',
          flexWrap: 'wrap',
        }}
      >
        {social?.map((item) => (
          <li key={item.name} style={{ marginRight: rhythm(1 / 2) }}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={item.link}
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Icon type={item.name} />
              <span style={{ marginLeft: 5 }}>{item.name}</span>
            </a>
          </li>
        ))}
      </ul>
      © {new Date().getFullYear()}, {author}
    </footer>
  )
}

export default Footer
