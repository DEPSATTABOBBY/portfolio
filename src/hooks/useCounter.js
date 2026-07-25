import { useState, useEffect } from 'react'

export function useCounter(end, duration = 2000, startOnVisible = true) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)

  const startCounting = () => {
    if (hasStarted) return
    setHasStarted(true)

    let startTime = null
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * end))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }

  return [count, startCounting]
}
