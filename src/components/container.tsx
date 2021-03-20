import React from 'react'

interface ContainerProps {
  isFluid?: boolean
  isMain?: boolean
}

const Container: React.FC<ContainerProps> = ({ isFluid, isMain, children }) => {
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

export default Container
