import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
      <ul>
        <li><Link to={'/test-on-react'}>Главная</Link></li>
        <li><Link to={'/test-on-react/faworits'}>Избранное</Link></li>
      </ul>
    </div>
  )
}

export default Header