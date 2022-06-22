import React from 'react'

interface ContainerProps {
  children?: React.ReactNode
  isFluid?: boolean
  isMain?: boolean
}

export const Container = ({ children, isFluid, isMain }: ContainerProps) => {
  return (
    <div
      className={`container${isFluid ? '-fluid' : ''} ${
        isMain ? 'main-container' : ''
      }`}
    >
      {children}
    </div>
  )
}
