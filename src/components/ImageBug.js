import React, { useState } from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

const ImageBug = ({ }) => {
  const [hovering, setHovering] = useState(false)
  const data = {
      images: {
          sources: [],
          fallback: {
              src: "https://cdn.sanity.io/images/tg7cfroy/production/5f641ce34eea261e6d2aff7ae51e8be35afe0844-1920x1280.png?w=1920&h=1280&auto=format",
              srcSet: "https://cdn.sanity.io/images/tg7cfroy/production/5f641ce34eea261e6d2aff7ae51e8be35afe0844-1920x1280.png?rect=0,1,1920,1278&w=320&h=213&auto=format 320w,\nhttps://cdn.sanity.io/images/tg7cfroy/production/5f641ce34eea261e6d2aff7ae51e8be35afe0844-1920x1280.png?w=654&h=436&auto=format 654w,\nhttps://cdn.sanity.io/images/tg7cfroy/production/5f641ce34eea261e6d2aff7ae51e8be35afe0844-1920x1280.png?w=768&h=512&auto=format 768w,\nhttps://cdn.sanity.io/images/tg7cfroy/production/5f641ce34eea261e6d2aff7ae51e8be35afe0844-1920x1280.png?rect=0,0,1919,1280&w=1024&h=683&auto=format 1024w,\nhttps://cdn.sanity.io/images/tg7cfroy/production/5f641ce34eea261e6d2aff7ae51e8be35afe0844-1920x1280.png?rect=0,0,1919,1280&w=1366&h=911&auto=format 1366w,\nhttps://cdn.sanity.io/images/tg7cfroy/production/5f641ce34eea261e6d2aff7ae51e8be35afe0844-1920x1280.png?rect=0,0,1919,1280&w=1600&h=1067&auto=format 1600w,\nhttps://cdn.sanity.io/images/tg7cfroy/production/5f641ce34eea261e6d2aff7ae51e8be35afe0844-1920x1280.png?w=1920&h=1280&auto=format 1920w",
              sizes: "(min-width: 1920px) 1920px, 100vw"
          }
      },
      layout: "constrained",
      width: 1920,
      height: 1280
  }

  return (
    <div
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      style={{background: 'pink', padding: '1rem', maxWidth: '500px'}}
    >
    <GatsbyImage image={data} alt=""/>
    {hovering ? 'hovering' : 'not hovering'}
    </div>
  )
}

export default ImageBug
