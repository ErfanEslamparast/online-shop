import React from 'react'
import './Header.css'
function Header() {
  return (
    <div className='header d-flex justify-content-between align-items-center fs-4 px-5'>
      <span className="shop-name fw-bold">فروشگاه آنلاین عرفان</span>
      <div className="shop-logo">ERFAN</div>
    </div>
  )
}

export default Header