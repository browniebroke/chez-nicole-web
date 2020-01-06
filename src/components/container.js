import React from 'react'

const Container = props => {
  return (
    <div
      className={`container${props.isFluid ? '-fluid' : ''} ${
        props.isMain ? 'main-container' : ''
      }`}
    >
      {props.children}
    </div>
  )
}

export default Container
