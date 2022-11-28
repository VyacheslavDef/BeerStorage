import React from 'react'

const Cup = () => {
    const swapclassname = (event) => {
        event.target.classList.add('qq')
    }

  return (
    <div onClick={swapclassname}>
        <h6>tap</h6>
        <h1 className='q'>123</h1>
    </div>
  )
}

export default Cup