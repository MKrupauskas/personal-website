import React from 'react'
import Bio from '../components/bio'
import Layout from '../components/layout'
import Seo from '../components/seo'

const Uses = () => {
  return (
    <Layout>
      <Seo title="Uses" />
      <Bio />
      <h1>Uses</h1>
      <p>A collection of most of the tools I use every day.</p>
      <h2>Laptop - HP ZBook Studio G5</h2>
      <ul>
        <li>CPU: Intel® Core™ i7-8750H</li>
        <li>Display: 15.6&quot; (16:9) 1920 x 1080 pixels</li>
        <li>Graphics: NVIDIA Quadro P1000 4 GB GDDR5</li>
        <li>Memory: 16 GB (1 x 16 GB)</li>
        <li>Storage: 512 GB SSD</li>
      </ul>
      <h2>Software</h2>
      <h3>Development</h3>
      <ul>
        <li>Visual Studio Code</li>
        <li>Hyper terminal</li>
        <li>Visual Studio</li>
        <li>Unity</li>
      </ul>
      <h3>Miscellaneous</h3>
      <ul>
        <li>Figma for designing</li>
        <li>Adobe Premiere Pro for editing</li>
        <li>Todoist for getting things done</li>
        <li>Google Calendar for planning my schedule</li>
      </ul>
    </Layout>
  )
}

export default Uses
