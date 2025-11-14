import React, { useEffect, useRef } from 'react'
import '../styles/styles.css'

export default function BackgroundBlur() {
  const blurRef = useRef(null)

  useEffect(() => {
    const updateHeight = () => {
      if (blurRef.current) {
        const documentHeight = Math.max(
          document.body.scrollHeight,
          document.body.offsetHeight,
          document.documentElement.clientHeight,
          document.documentElement.scrollHeight,
          document.documentElement.offsetHeight
        )
        blurRef.current.style.height = `${documentHeight}px`
      }
    }

    updateHeight()
    window.addEventListener('resize', updateHeight)
    window.addEventListener('scroll', updateHeight)
    
    // Use MutationObserver to watch for content changes
    const observer = new MutationObserver(updateHeight)
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['style', 'class']
    })

    return () => {
      window.removeEventListener('resize', updateHeight)
      window.removeEventListener('scroll', updateHeight)
      observer.disconnect()
    }
  }, [])

  return (
    <div ref={blurRef} className="background-blur">
      {[...Array(9)].map((_, i) => (
        <div key={i} className="blur-circle" />
      ))}
      {/* Additional blur circles for longer content */}
      {[...Array(6)].map((_, i) => {
        const positions = [
          { left: '187px', top: '3000px' },
          { left: '-71px', top: '3800px' },
          { left: '162px', top: '4600px' },
          { left: '0px', top: '5400px' },
          { left: '132px', top: '6200px' },
          { left: '187px', top: '7000px' },
        ]
        return (
          <div 
            key={`extra-${i}`} 
            className="blur-circle blur-circle-extra"
            style={{
              left: positions[i].left,
              top: positions[i].top,
            }}
          />
        )
      })}
    </div>
  )
}
