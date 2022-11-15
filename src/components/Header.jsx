import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
      <ul>
        <li><Link to={'/test-on-react'}><a>Главная</a></Link></li>
        <li><Link to={'/test-on-react/faworits'}><a>Избранное</a></Link></li>
      </ul>
    </div>
  )
}

export default Header