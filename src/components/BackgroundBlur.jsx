import React, { useEffect, useRef } from 'react'
import '../styles/styles.css'

export default function BackgroundBlur() {
  const blurRef = useRef(null)

  useEffect(() => {
    const updateHeight = () => {
      if (blurRef.current) {
        // Get the actual content height more accurately
        const bodyHeight = document.body.scrollHeight
        const htmlHeight = document.documentElement.scrollHeight
        // Use the larger of the two, but ensure we're getting the actual content height
        const documentHeight = Math.max(bodyHeight, htmlHeight, document.documentElement.offsetHeight)
        blurRef.current.style.height = `${documentHeight}px`
      }
    }

    updateHeight()
    window.addEventListener('resize', updateHeight)
    window.addEventListener('scroll', updateHeight)
    
    // Use MutationObserver to watch for content changes
    const observer = new MutationObserver(() => {
      // Use requestAnimationFrame to batch updates
      requestAnimationFrame(updateHeight)
    })
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['style', 'class'],
      characterData: false
    })
    
    // Also observe the document element for height changes
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['style', 'class'],
      childList: true,
      subtree: true
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
          { left: 'calc(50% - 196.5px + 187px)', top: '3000px' },
          { left: 'calc(50% - 196.5px - 71px)', top: '3800px' },
          { left: 'calc(50% - 196.5px + 162px)', top: '4600px' },
          { left: 'calc(50% - 196.5px + 0px)', top: '5400px' },
          { left: 'calc(50% - 196.5px + 132px)', top: '6200px' },
          { left: 'calc(50% - 196.5px + 187px)', top: '7000px' },
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
