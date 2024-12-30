"use client"

import { motion, useAnimation, useTransform, useSpring, MotionValue } from "framer-motion"
import { useEffect, useState } from "react"

interface FloatingTagProps {
  text: string
  mouseX: MotionValue<number>
  mouseY: MotionValue<number>
  x: number
  y: number
  containerWidth: number
  containerHeight: number
}

export function FloatingTag({ text, mouseX, mouseY, x, y, containerWidth, containerHeight }: FloatingTagProps) {
  const [isHovered, setIsHovered] = useState(false)

  // Create spring-animated position values with smoother response
  const springConfig = { damping: 30, stiffness: 150, mass: 0.8 }
  const tagX = useSpring(x, springConfig)
  const tagY = useSpring(y, springConfig)

  // Update position based on mouse movement with more freedom
  useEffect(() => {
    const unsubscribeX = mouseX.onChange((latestX) => {
      const dx = latestX - x
      const distance = Math.sqrt(dx * dx)
      const maxDistance = containerWidth / 2
      const influence = Math.max(0, 1 - distance / maxDistance)
      const movement = dx * influence * 0.2
      
      tagX.set(x + movement)
    })

    const unsubscribeY = mouseY.onChange((latestY) => {
      const dy = latestY - y
      const distance = Math.sqrt(dy * dy)
      const maxDistance = containerHeight / 2
      const influence = Math.max(0, 1 - distance / maxDistance)
      const movement = dy * influence * 0.2
      
      tagY.set(y + movement)
    })

    return () => {
      unsubscribeX()
      unsubscribeY()
    }
  }, [mouseX, mouseY, x, y, tagX, tagY, containerWidth, containerHeight])

  return (
    <motion.div
      className="absolute cursor-pointer"
      style={{
        x: tagX,
        y: tagY,
        zIndex: isHovered ? 50 : 0,
      }}
      initial={{ scale: 1, y: y }}
      whileHover={{
        scale: 1.1,
        y: y - 20,
        transition: { 
          type: "spring",
          stiffness: 300,
          damping: 20
        }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div 
        className="rounded-full bg-white px-4 py-2 shadow-sm"
        animate={{
          opacity: isHovered ? 1 : 0.8,
          boxShadow: isHovered 
            ? "0 8px 16px rgba(0, 0, 0, 0.1)" 
            : "0 1px 3px rgba(0, 0, 0, 0.1)",
          backgroundColor: isHovered ? "#fff" : "#fff",
          border: isHovered ? "1px solid rgba(0, 0, 0, 0.1)" : "1px solid transparent",
        }}
        transition={{
          duration: 0.2
        }}
      >
        <span className={`text-sm font-medium ${isHovered ? 'text-gray-900' : 'text-gray-800'}`}>
          {text}
        </span>
      </motion.div>
    </motion.div>
  )
}

