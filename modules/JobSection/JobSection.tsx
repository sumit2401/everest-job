"use client"

import { FloatingTag } from "@/components/FloatingJob/FloatingJob"
import { useMotionValue } from "framer-motion"
import { useEffect, useState } from "react"

// Sample data for the floating tags
const tags = [
  "Cyber Security", "Blockchain Developers", "Vue JS Developers", "Android Developers",
  "Front End Developers", "Artificial Intelligence", "SaaS", "Robotics",
  "Hardware", "Node JS Developers", "Austin", "New York",
  "Los Angeles", "Aerospace", "Boston", "Stack Developers",
  "Databases", "Flutter Developers"
]

export default function JobSection() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const [containerSize, setContainerSize] = useState({ width: 1000, height: 600 })
  const [positions, setPositions] = useState<Array<{ x: number; y: number }>>([])

  useEffect(() => {
    const updateSize = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      setContainerSize({ width, height })
      
      // Update positions when container size changes
      const newPositions = tags.map(() => ({
        x: Math.random() * (width - 200) + 100, // Keep 100px padding from edges
        y: Math.random() * (height - 200) + 100
      }))
      setPositions(newPositions)
    }
    
    window.addEventListener('resize', updateSize)
    updateSize()
    
    return () => window.removeEventListener('resize', updateSize)
  }, [])

  const handleMouseMove = (event: React.MouseEvent) => {
    mouseX.set(event.clientX)
    mouseY.set(event.clientY)
  }

  return (
    <div 
      className="relative min-h-screen bg-white overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-6xl font-bold text-gray-900">
          Find what&apos;s next
        </h1>
      </div>

      {positions.length > 0 && tags.map((tag, index) => (
        <FloatingTag
          key={index}
          text={tag}
          mouseX={mouseX}
          mouseY={mouseY}
          x={positions[index].x}
          y={positions[index].y}
          containerWidth={containerSize.width}
          containerHeight={containerSize.height}
        />
      ))}
    </div>
  )
}

